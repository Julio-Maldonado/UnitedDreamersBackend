const crypto = require('crypto')
const knex = require('knex')(require('./knexfile'))

module.exports = {
  createCompany({
    // id,
    owner_first_name,
    owner_last_name,
    company_name,
    category,
    description,
    services,
    phone_number,
    email_address,
    website_url,
    facebook_url,
    instagram_url,
    twitter_url,
    zip_code,
    city,
    state,
    country,
    daca_owned,
    support_daca,
    signed_support_for_daca,
    against_daca,
    donated_against_daca
  }) {
    console.log(`Add company ${company_name}`)
    return knex('companies').insert({
      // id,
      owner_first_name,
      owner_last_name,
      company_name,
      category,
      description,
      services,
      phone_number,
      email_address,
      website_url,
      facebook_url,
      instagram_url,
      twitter_url,
      zip_code,
      city,
      state,
      country,
      daca_owned,
      support_daca,
      signed_support_for_daca,
      against_daca,
      donated_against_daca
    })
  }
}
