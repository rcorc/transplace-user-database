import memberService from '../services/memberService.js';

const memberController = {
    /**
     * Get all members with body
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @param {function} next Callback to next middleware
     */
    getAll(req, res, next) {
        memberService.getAll(req.body)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                next(err);
            });
    },

    /**
     * Get member by id
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @param {function} next Callback to next middleware
     */
    getById(req, res, next) {
        memberService.getById(req.params.id)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                if (err instanceof ReferenceError) {
                    const message = err.message || 'An error was encountered';
                    res.status(404);
                    res.send(message);
                }
                // next(err);
            });
    },

    /**
     * Create member with body
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @param {function} next Callback to next middleware
     */
    create(req, res, next) {
        memberService.create(req.body)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                console.error(err);
                next(err);
            });
    },

    /**
     * Update member by id
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @param {function} next Callback to next middleware
     */
    update(req, res, next) {
        memberService.update(req.params.id)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                next(err);
            });
    },

    /**
     * Remove member by id
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @param {function} next Callback to next middleware
     */
    remove(req, res, next) {
        memberService.remove(req.params.id)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                next(err);
            });
    },
};

export default memberController;
