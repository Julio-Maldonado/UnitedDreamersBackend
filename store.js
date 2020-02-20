const crypto = require('crypto')
const knex = require('knex')(require('./knexfile'))

module.exports = {
  createCompany({
    // id,
    owner_first_name,
    owner_last_name,
    email_address,
    phone_number,
    company_name,
    category,
    description,
    services,
    website_url,
    facebook_url,
    instagram_url,
    twitter_url,
    zip_code,
    city,
    state,
    country,
    company_size,
    daca_owned,
    support_daca,
    signed_support_for_daca,
    against_daca,
    donated_against_daca
  }) {
    console.log(`Add company ${company_name}`)
    console.log(
      owner_first_name,
    owner_last_name,
    email_address,
    phone_number,
    company_name,
    category,
    description,
    services,
    website_url,
    facebook_url,
    instagram_url,
    twitter_url,
    zip_code,
    city,
    state,
    country,
    company_size,
    daca_owned,
    support_daca,
    signed_support_for_daca,
    against_daca,
    donated_against_daca
    )
    return knex('companies').insert({
      // id,
      owner_first_name,
      owner_last_name,
      email_address,
      phone_number,
      company_name,
      category,
      description,
      services,
      website_url,
      facebook_url,
      instagram_url,
      twitter_url,
      zip_code,
      city,
      state,
      country,
      company_size,
      daca_owned,
      support_daca,
      signed_support_for_daca,
      against_daca,
      donated_against_daca
    })
  }
}
