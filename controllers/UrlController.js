const { nanoid } = require('nanoid');
const client = require("../services/initRedis");

const index = (req, res) => {

    res.render("index", {
        success: true,
        message: "shorten your url!",
        url: null
    });

};

const get = async (req, res) => {

    const fullUrl = await client.get(process.env.URL + req.params.url);
    if (!fullUrl) {
        return res.render("index", {
            success: false,
            message: "shorten your url!",
            url: "short url does not exist"
        });
    }

    res.redirect(fullUrl);

};

const shorten = async (req, res) => {

    const shortUrl = process.env.URL + nanoid(11);
    const fullUrl = req.body.url;

    const promise = client.pipeline()
        .set(shortUrl, fullUrl)
        .set(fullUrl, shortUrl)
        .exec();

    await promise.then(result => {
        if (result[1][1] !== "OK") {
            return res.render("index", {
                success: false,
                message: "shorten your url!",
                url: "please try again"
            });
        }
    });

    res.render("index", {
        success: true,
        message: "Your url has been shortened!",
        url: shortUrl
    });

};

module.exports = {
    index,
    get,
    shorten
};
