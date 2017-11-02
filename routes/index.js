const path = require('path');
const contentData = require('../content');

const constructorMethod = (app) => {
    app.use("/:chapterId/:problemId", (req, res) => {
        res.render("home", {
            chapterId: req.params.chapterId,
            problemId: req.params.problemId,
            problemCount: Object.keys(contentData[req.params.chapterId]).length,
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