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

// Rotas para tratamento de Pedidos

// Lista todos os pedidos
routes.get('/request', RequestController.index);

// Armazena um pedido
routes.post('/request', RequestController.store);

// Lista um pedido por completo
routes.get('/request/:request_id', RequestController.show);

// Atualiza um pedido
routes.put('/request/:request_id', RequestController.update);

// Remove um pedido
routes.delete('/request/:request_id', RequestController.delete);

export default routes;
