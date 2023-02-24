import express from 'express';

const indexRouter = express.Router();

/* GET index. */
indexRouter.get('/', (req, res) => {
    res.redirect('/member'); // TODO: figure out why this isn't working
});

export default indexRouter;
