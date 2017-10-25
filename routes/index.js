const subRoutes = require("./submit");
const path = require('path');

const constructorMethod = (app) => {
    app.use("/", subRoutes);
    app.use("*", (req, res) => {
        res.redirect('/');
    })
};

module.exports = constructorMethod;