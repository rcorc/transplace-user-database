import db from '../db/index.js';

const memberService = {
    /**
     * Get all members with body
     * @param {Object} where
     * @returns {Promise<Array<Model>>}
     */
    async getAll(where) {
        return db.Member.findAll({
            where,
        });
    },

    /**
     * Get member by id
     * @param {string} id
     * @returns {Promise<Model>}
     */
    async getById(id) {
        const member = await db.Member.findByPk(id);
        if (member === null) {
            throw new ReferenceError(`No member found for the id ${id}`);
        }
        return member;
    },

    /**
     * Create member (builds and saves it to the db)
     * @param {Object} values
     * @returns {Promise<Model>}
     */
    async create(values) {
        const {
            userId,
            tag,
            avatar,
            nickname,
            joinedAt,
        } = values;

        const toCreate = {
            userId,
            username: tag.slice(0, -5),
            discriminator: tag.slice(-4),
            avatar,
            nickname,
            joinedAt,
        };
        console.log(toCreate);
        return db.Member.create(toCreate);
    },

    /**
     * Update member
     * @param {Object} values
     * @param {Object} options
     * @returns {Promise<Array<number, number>>}
     */
    async update(values, options) {
        return db.Member.update(values, options);
    },

    /**
         * Remove member
         * @param {Object} options
         * @returns {Promise}
         */
    async remove(options) {
        return db.Member.destroy(options);
    },
};
export default memberService;
