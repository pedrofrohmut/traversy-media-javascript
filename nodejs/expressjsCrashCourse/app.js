// IMPORTS
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path") // core module
const expressValidator = require("express-validator")
const mongojs = require('mongojs')
const db = mongojs('customerapp', ['users'])
var ObjectId = mongojs.ObjectId

const app = express()

// MIDDLEWARE
// const logger = (req, res, next) => {
//   console.log('Logging...')
//   next()
// }
// app.use(logger)

// VIEW ENGINE
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// BODY PARSER MIDDLEWARE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// SET STATIC PATH
app.use(express.static(path.join(__dirname, 'public')))

// GLOBAL VARS
app.use((req, res, next) => {
  res.locals.errors = null
  next()
})

// EXPRESS VALIDATOR MIDDLEWARE
app.use(expressValidator({
  errorFormatter: (param, msg, value) => {
    const namespace = param.split("."),
    root = namespace.shift(),
    formParam = root

    while(namespace.length) {
      formParam += "[" + namespace.shift() + "]";
    }

    return {
      param: formParam,
      msg: msg,
      value: value
    }
  }
}))

const users = [
  {
    id: 1,
    firstname: "Jhon",
    lastname: "Doe",
    email: "jhondoe@email.com"
  }, {
    id: 1,
    firstname: "Bob",
    lastname: "Smith",
    email: "bobsmith@emial.com"
  }, {
    id: 1,
    firstname: "Jill",
    lastname: "Jackson",
    email: "jilljackson@email.com"
  },
]

// const person = [{
//   name: "Jeff",
//   age: 30
// }, {
//   name: "Sara",
//   age: 22
// }, {
//   name: "Bill",
//   age: 40
// }]

app.get("/", (req, res) => {
  // res.send("Hello World!") // Where u pass the view source
  // res.json(person)

  // find everything FROM MongoDB
  db.users.find(function (err, docs) {
  	// console.log(docs)
    res.render("index", {
      title: "Customers",
      // users: users
      users: docs
    })
  })
})

app.post("/users/add", (req, res) => {
  // console.log("FORM SUBMITTED")
  // console.log("First name submited: " + req.body.firstName)
  req.checkBody(
    "firstName",
    "First name is required",
    req.body.firstName
  ).notEmpty()

  req.checkBody(
    "lastName",
    "Last name is required",
    req.body.lastName
  ).notEmpty()

  req.checkBody(
    "email",
    "E-mail name is required",
    req.body.email
  ).notEmpty()

  const errors = req.validationErrors()

  if (errors) {
    // console.log(errors)
    res.render("index", {
      title: "Customers",
      users: users,
      errors: errors
    })
  }
  else {
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    }
    // console.log(user)
    // INSERT INTO MongoDB
    db.users.insert(user, (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.redirect("/")
      }
    })
  }
})

app.delete("/users/delete/:id", (req, res) => {
  // console.log(req.params.id)
  db.users.remove({_id: ObjectId(req.params.id)}, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.redirect("/")
    }
  })
})

app.listen(3000, () => console.log("Server started on Port 3000 ... "))
