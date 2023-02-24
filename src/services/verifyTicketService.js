import db from '../db/index.js';

const memberService = {
    /**
     * Get all verify tickets with body
     * @param {Object} where
     * @returns {Promise<Array<Model>>}
     */
    async getAll(where) {
        return db.VerifyTicket.findAll({
            where,
        });
    },

    /**
     * Get verify ticket by id
     * @param {string} id
     * @returns {Promise<Model>}
     */
    async getById(id) {
        return db.VerifyTicket.findByPk(id);
    },

    /**
     * Create verify ticket (builds and saves it to the db)
     * @param {Object} values
     * @returns {Promise<Model>}
     */
    async create(values) {
        return db.VerifyTicket.create({ values });
    },

    /**
     * Update verify ticket
     * @param {Object} values
     * @param {Object} options
     * @returns {Promise<Array<number, number>>}
     */
    async update(values, options) {
        return db.VerifyTicket.update(values, options);
    },

    /**
     * Remove verify ticket
     * @param {Object} options
     * @returns {Promise}
     */
    async remove(options) {
        return db.VerifyTicket.destroy(options);
    },
};
export default memberService;
