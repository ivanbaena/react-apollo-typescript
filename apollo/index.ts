import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import passport from 'passport';

import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { MONGO_URI } from './db';
import { Users, Posts } from './data-source';
import { user, post } from './models';
import { isAuth } from './services/';

const app = express();

const MongoStore = connectMongo(session);
// Mongoose's built in promise library is deprecated, replace it with ES2015 Promise
mongoose.Promise = global.Promise;
// Connect to the mongoDB instance and log a message
// on success or failure
mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', (error) => console.log('Error connecting to MongoLab:', error));

// Configures express to use sessions.  This places an encrypted identifier
// on the users cookie.  When a user makes a request, this middleware examines
// the cookie and modifies the request object to indicate which user made the request
// The cookie itself only contains the id of a session; more data about the session
// is stored inside of MongoDB.
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: 'aaabbbccc',
    store: new MongoStore({
      url: MONGO_URI,
      autoReconnect: true,
    }),
  })
);

// Passport is wired into express as a middleware. When a request comes in,
// Passport will examine the request's session (as set by the above config) and
// assign the current user to the 'req.user' object.  See also servces/auth.js
app.use(passport.initialize());
app.use(passport.session());

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    users: new Users(user),
    posts: new Posts(post),
  }),
  context: ({ req }) => ({
    request: () => req,
    isAuth: isAuth(req),
  }),
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(
    `🚀 Server ready at http://localhost:4000${server.graphqlPath}, {useNewUrlParser: true}`
  )
);
