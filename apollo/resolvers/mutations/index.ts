import { postMutations } from './post';
import { userMutations } from './user';

export const mutationsResolver = { ...postMutations, ...userMutations };
