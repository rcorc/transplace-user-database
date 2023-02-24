import logEntryService from '../services/logEntryService.js';

const logEntryController = {
    /**
     * Get all log entries with body
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @param {function} next Callback to next middleware
     */
    getAll(req, res, next) {
        logEntryService.getAll(req.body)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                next(err);
            });
    },

    /**
     * Get log entry by id
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @param {function} next Callback to next middleware
     */
    getById(req, res, next) {
        logEntryService.getById(req.params.id)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                next(err);
            });
    },

    /**
     * Create log entry with body
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @param {function} next Callback to next middleware
     */
    create(req, res, next) {
        logEntryService.create(req.body)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                next(err);
            });
    },

    /**
     * Update log entry by id
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @param {function} next Callback to next middleware
     */
    update(req, res, next) {
        logEntryService.update(req.params.id)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                next(err);
            });
    },

    /**
     * Remove log entry by id
     * @param {object} req Express request object
     * @param {object} res Express response object
     * @param {function} next Callback to next middleware
     */
    remove(req, res, next) {
        logEntryService.remove(req.params.id)
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                next(err);
            });
    },
};

export default logEntryController;
