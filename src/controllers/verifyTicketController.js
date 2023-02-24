import verifyTicketService from '../services/verifyTicketService.js';

const verifyTicketController = {
    /**
     * Get all verify tickets with body
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @param {function} next Callback to next middleware
     */
    getAll(req, res, next) {
        verifyTicketService.getAll(req.body)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                next(err);
            });
    },

    /**
     * Get verify ticket by id
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @param {function} next Callback to next middleware
     */
    getById(req, res, next) {
        verifyTicketService.getById(req.params.id)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                next(err);
            });
    },

    /**
     * Create verify ticket with body
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @param {function} next Callback to next middleware
     */
    create(req, res, next) {
        verifyTicketService.create(req.body)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                next(err);
            });
    },

    /**
     * Update verify ticket by id
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @param {function} next Callback to next middleware
     */
    update(req, res, next) {
        verifyTicketService.update(req.params.id)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                next(err);
            });
    },

    /**
     * Remove verify ticket by id
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @param {function} next Callback to next middleware
     */
    remove(req, res, next) {
        verifyTicketService.remove(req.params.id)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                next(err);
            });
    },
};

export default verifyTicketController;
