const express = require("express");
const route = express.Router();
const UrlController = require("../controllers/UrlController");
const ReqValidator = require("../validators/ReqValidator");
const Url = require("../middlewares/Url");

route.get("/", UrlController.index);
route.post("/", ReqValidator.bodyUrl, Url.duplicate, UrlController.shorten);
route.get("/:url", ReqValidator.paramsUrl, UrlController.get);

module.exports = route;
