const client = require("../services/initRedis");

const duplicate = async (req, res, next) => {

    const url = await client.get(req.body.url);
    if (url) {
        return res.render("index", {
            success: true,
            message: "shorten your url! - exists already!",
            url
        });
    }

    next();
};

module.exports = { duplicate };
