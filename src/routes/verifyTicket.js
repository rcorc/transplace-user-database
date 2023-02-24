import express from 'express';
import verifyTicketController from '../controllers/verifyTicketController.js';

const verifyTicketRouter = express.Router();

/* GET all verify tickets. */
verifyTicketRouter.get('/', verifyTicketController.getAll);

/* GET verify ticket by id. */
verifyTicketRouter.get('/:id', verifyTicketController.getById);

/* POST verify ticket */
verifyTicketRouter.post('/', verifyTicketController.create);

/* PUT verify ticket by id */
verifyTicketRouter.put('/:id', verifyTicketController.update);

/* DELETE verify ticket by id */
verifyTicketRouter.delete('/:id', verifyTicketController.remove);

export default verifyTicketRouter;
