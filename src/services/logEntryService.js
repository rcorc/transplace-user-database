import db from '../db/index.js';

const logEntryService = {
    /**
     * Get all log entries with body
     * @param {Object} where
     * @returns {Promise<Array<Model>>}
     */
    async getAll(where) {
        return db.LogEntry.findAll({
            where,
        });
    },

    /**
     * Get log entry by id
     * @param {string} id
     * @returns {Promise<Model>}
     */
    async getById(id) {
        return db.LogEntry.findByPk(id);
    },

    /**
     * Create log entry (builds and saves it to the db)
     * @param {Object} values
     * @returns {Promise<Model>}
     */
    async create(values) {
        return db.LogEntry.create({ values });
    },

    /**
     * Update log entry
     * @param {Object} values
     * @param {Object} options
     * @returns {Promise<Array<number, number>>}
     */
    async update(values, options) {
        return db.LogEntry.update(values, options);
    },

    /**
     * Remove log entry
     * @param {Object} options
     * @returns {Promise}
     */
    async remove(options) {
        return db.LogEntry.destroy(options);
    },
};
export default logEntryService;
