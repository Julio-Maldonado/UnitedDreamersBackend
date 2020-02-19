const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const app = express()

app.use(express.static('public'))

app.use(bodyParser.json())

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

app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})