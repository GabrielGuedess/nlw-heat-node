import { Router } from 'express';
import { ProfileUserController } from './controllers/ProfileUserController';
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { AuthenticateUserController } from './controllers/AuthenticateUSerController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

export const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle
);

router.get('/messages/last3', new GetLast3MessagesController().handle);

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle);
