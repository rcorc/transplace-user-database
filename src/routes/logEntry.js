import express from 'express';
import logEntryController from '../controllers/logEntryController.js';

const logEntryRouter = express.Router();

/* GET all log entries. */
logEntryRouter.get('/', logEntryController.getAll);

/* GET log entry by id. */
logEntryRouter.get('/:id', logEntryController.getById);

/* POST log entry */
logEntryRouter.post('/', logEntryController.create);

/* PUT log entry by id */
logEntryRouter.put('/:id', logEntryController.update);

/* DELETE log entry by id */
logEntryRouter.delete('/:id', logEntryController.remove);

export default logEntryRouter;
