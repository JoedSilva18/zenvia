import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import RequestController from './app/controllers/RequestController';

const routes = new Router();

routes.post('/session', SessionController.store);
routes.get('/session/:telephone_number', SessionController.show);
routes.put(
  '/session/telephone/:telephone_number/session/:session_id',
  SessionController.update
);

routes.get('/request', RequestController.index);

routes.post('/request', RequestController.store);

routes.get('/request/:request_id', RequestController.show);

export default routes;
