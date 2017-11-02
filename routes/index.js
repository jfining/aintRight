const path = require('path');
const contentData = require('../content');

const constructorMethod = (app) => {
    app.use("/:chapterId/:problemId", (req, res) => {
        res.render("home", {
            problem: contentData[req.params.chapterId][req.params.problemId]
        })
    });
    app.use("/", (req, res) => {
        res.redirect("/1/1");
    });
    app.use("*", (req, res) => {
        res.redirect('/');
    })
};

module.exports = constructorMethod;