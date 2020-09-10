import express, { Request } from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import cors from 'cors';
import passport from 'passport';
import passportConfig from './services/passportConfig';

import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { MONGO_URI } from './db';
import { Users, Posts } from './data-source';
import { user, post } from './models';

const app = express();

// Mongoose's built in promise library is deprecated, replace it with ES2015 Promise
mongoose.Promise = global.Promise;
// Connect to the mongoDB instance and log a message
// on success or failure
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', (error) => console.log('Error connecting to MongoLab:', error));

const MongoStore = connectMongo(session);

// Configures express to use sessions.  This places an encrypted identifier
// on the users cookie.  When a user makes a request, this middleware examines
// the cookie and modifies the request object to indicate which user made the request
// The cookie itself only contains the id of a session; more data about the session
// is stored inside of MongoDB.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    resave: true,
    saveUninitialized: false,
    name: 'auth',
    secret: 'qwertyasdfg',
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      autoReconnect: true,
      collection: 'sessions',
    }),
    cookie: {
      secure: false,
      maxAge: 1000 * 30,
    },
  })
);

// Set headers to notify server that will allow our graphql api
// to handle incoming request from different origins
app.use(cors());

// Passport is wired into express as a middleware. When a request comes in,
// Passport will examine the request's session (as set by the above config) and
// assign the current user to the 'req.user' object.  See also servces/auth.js
passportConfig(passport);
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
    getUser: () => req.user,
    logout: () => req.logout(),
  }),
});

server.applyMiddleware({ app, cors: false });

app.listen({ port: 4000 }, () =>
  console.log(
    `🚀 Server ready at http://localhost:4000${server.graphqlPath}, {useNewUrlParser: true}`
  )
);

app.get('/', (req, res) => {
  res.send('hi');
});
