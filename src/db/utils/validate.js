/**
 * The creation time of TransPlace in ms, set to 2022-04-01 20:35:21.033 UTC.
 * If it is not 1648845321033, then somebody set up us the bomb.
 * @type {number}
 */
const transPlaceCreatedTimestamp = 1648845321033;

/**
 * Regex that matches valid avatar hashes. Hashes are lowercase hex, optionally starting with 'a_'.
 * I couldn't find Discord documentation on hash formatting but it appears to follow this pattern.
 * Pattern is /^(a_)?[a-z0-9]+$/
 * @see https://discord.com/developers/docs/reference#image-formatting
 * @type {RegExp}
 */
const avatarRegex = /^(a_)?[a-z0-9]+$/;

/**
 * Regex that matches valid discriminators. Discriminators are exactly four numeric digits. Pattern is /^\d{4}$/
 * @type {RegExp}
 */
const discriminatorRegex = /^\d{4}$/;

/**
 * Regex that matches valid snowflakes. Snowflakes are strings of only digits and are between 17 and
 * 20 digits, inclusive. 17 because the oldest id on Discord is 17 digits. 20 because snowflakes are
 * up to 64 bits and the max value of a 64 bit number is 20 digits. Pattern is /^\d{13,20}$/
 * @see https://discord.com/developers/docs/reference#snowflakes
 * @type {RegExp}
 */
const snowflakeRegex = /^\d{17,20}$/;

/**
 * Regex that matches valid Discord usernames. Usernames are between 2 and 32 characters long, do
 * not contain leading or trailing whitespace, do not contain the following substrings: [@, #, :,
 * ```, discord], and are not 'everyone' or 'here' (no quotes). Pattern is
 * /^[^@#:\s][^@#:]{0,30}[^@#:\s](?<!^(?:everyone|here)|.*(?:```|discord).*)$/
 * @see https://discord.com/developers/docs/resources/user#usernames-and-nicknames
 * @type {RegExp}
 */
const usernameRegex = /^[^@#:\s][^@#:]{0,30}[^@#:\s](?<!^(?:everyone|here)|.*(?:```|discord).*)$/s;
//                       |       |           |       |    |                |__ contains the substring ``` or discord
//                       |       |           |       |    |__ exactly everyone or here
//                       |       |           |       |__ result is not the following:
//                       |       |           |__ character that is not @#: or whitespace
//                       |       |__ 0-30 characters that are not @#:
//                       |__ starts with character that is not @#: or whitespace

/**
 * Validates that the date is not before the creation time of TransPlace (2022-04-01 20:35:21.033 UTC)
 * @param {Date} date The date to test
 * @throws {Error} If the date is not a Date or the date is before the creation time
 */
function isAfterGuildCreation(date) {
    if (!(date instanceof Date)) {
        throw Object.assign(
            new Error('date must be of type Date!'),
            date,
        );
    } else if (date.getTime() < transPlaceCreatedTimestamp) {
        throw Object.assign(
            new Error('Value of date must not be before 2022-04-01 20:35:21.033 UTC!'),
            date,
        );
    }
}

export {
    avatarRegex,
    discriminatorRegex,
    snowflakeRegex,
    usernameRegex,
    isAfterGuildCreation,
};
