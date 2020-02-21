const cors = require('cors');
const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')

const app = express()

const PORT = process.env.PORT || 7555;

app.use(express.static('public'))

app.use(express.json())

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  const allowedOrigins = [
    "http://127.0.0.1:3000",
    "http://localhost:3000",
    "julio-maldonado.github.io/UnitedDreamers/",
    // "yeux.tech"
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS, POST");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Content-Type", "application/json; charset=utf-8");

  return next();
})

function prettyJSON(obj) {
  console.log(JSON.stringify(obj, null, 2));
}

app.post('/createCompany', (req, res) => {
  let body = '';

  console.log('req = %j', req)

  // console.log
  // console.log(`req = ${prettyJSON(req)}`)
  // console.log(`req.body = ${prettyJSON(req.body)}`)
  for (key in req.body) {
    console.log(req.body[key]);
  }
  store
    .createCompany({
      owner_first_name: req.body.firstName,
      owner_last_name: req.body.lastName,
      email_address: req.body.emailAddress,
      phone_number: req.body.phoneNumber,
      company_name: req.body.companyName,
      category: req.body.category,
      description: req.body.description,
      services: req.body.services,
      website_url: req.body.companyURL,
      facebook_url: req.body.companyFacebookURL,
      instagram_url: req.body.companyInstagramUsername,
      twitter_url: req.body.companyTwitterUsername,
      zip_code: req.body.zip,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      company_size: req.body.companySize,
      daca_owned: true,
      support_daca: true,
      signed_support_for_daca: true,
      against_daca: false,
      donated_against_daca: false
    })
    .then(() => {
      console.log('success');
      res.sendStatus(200);
    })
    .catch(() => {
      console.log('failure');
      res.sendStatus(400)
    })
})

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
});

server.timeout = 30000;