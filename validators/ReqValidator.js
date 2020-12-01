const { body, param } = require("express-validator");
const checkErrors = require("./result");

const paramsUrl = [
    param("url")
        .not().isEmpty({ ignore_whitespace: true })
        .matches(/^[a-z0-9. ]+$/i)
        .isLength({ min: 11, max:11 })
        .withMessage("Please provide a valid short url"),
    checkErrors
];

const bodyUrl = [
    body("url")
        .isURL()
        .withMessage("Please provide a valid url to shorten"),
    checkErrors
];

module.exports = {
    paramsUrl,
    bodyUrl
};
