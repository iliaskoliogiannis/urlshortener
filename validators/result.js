const { validationResult } = require("express-validator");

const checkErrors = (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.render("index", {
            success: false,
            message: "shorten your url!",
            url: result.errors[0].msg
        });
    }

    next();
};

module.exports = checkErrors;
