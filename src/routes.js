import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/session', SessionController.store);
routes.get('/session/:telephone_number', SessionController.show);
routes.put(
  '/session/telephone/:telephone_number/session/:session_id',
  SessionController.update
);

export default routes;
