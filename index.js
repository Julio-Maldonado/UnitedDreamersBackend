const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const app = express()

const PORT = process.env.PORT || 7555;

app.use(express.static('public'))

app.use(bodyParser.json())

app.use(function(req, res, next) {
  const allowedOrigins = [
    "http://127.0.0.1:3000",
    "http://localhost:3000",
    "https://julio-maldonado.github.io/UnitedDreamers/",
    // "yeux.tech"
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Content-Type", "application/json; charset=utf-8");

  return next();
})

app.post('/createCompany', (req, res) => {
  console.log(`req = ${req}`)
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
      zip_code: req.body.zipCode,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      daca_owned: true,
      support_daca: true,
      signed_support_for_daca: true,
      against_daca: false,
      donated_against_daca: false
    })
    .then(() => res.sendStatus(200))
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})