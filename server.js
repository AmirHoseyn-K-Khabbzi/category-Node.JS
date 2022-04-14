const app = require('express')();
const express = require("express")
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
global.config = require('./config');
const ejs = require("ejs")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const flash = require("connect-flash")
const MongoStore = require("connect-mongo")(session)
const expressLayouts = require('express-ejs-layouts');






app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(expressLayouts);


mongoose.connect('mongodb://127.0.0.1:27017/cate', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
        // user:"",
        // pass:""
})

mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(cookieParser("GWRr23$@E$#2q$R#245$2"))

app.use(session({
    secret: "GWRr23$@E$#2q$R#245$2",
    resave: false,
    saveUninitialized: true,
    cookie: { expires: new Date(Date.now() + 1000 * 60 * 60 * 60) },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))
app.use(flash())


const webRouter = require('./router/index');
app.use('/', webRouter);


app.listen(config.port, () => {
    console.log(`Server running at Port ${config.port}`)
});