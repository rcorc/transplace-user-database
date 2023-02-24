import express from 'express';
import memberController from '../controllers/memberController.js';

const memberRouter = express.Router();

/* GET all members. */
memberRouter.get('/', memberController.getAll);

/* GET member by id. */
memberRouter.get('/:id', memberController.getById);

/* POST member */
memberRouter.post('/', memberController.create);

/* PUT member */
memberRouter.put('/:id', memberController.update);

/* DELETE member */
memberRouter.delete('/:id', memberController.remove);

export default memberRouter;
