const crypto = require('crypto')
const knex = require('knex')(require('./knexfile'))

module.exports = {
  createCompany({
    owner_first_name,
    owner_last_name,
    email_address,
    phone_number,
    company_name,
    category,
    company_type,
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
    company_type,
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
      email_address,
      phone_number,
      company_name,
      category,
      company_type,
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
      company_type,
      daca_owned,
      support_daca,
      signed_support_for_daca,
      against_daca,
      donated_against_daca,
      'user_id': 0,
      'clicks': 0,
      'views': 0,
      'hovers': 0,
      'purchases': 0,
      'customer_contacts': 0,
      'money_made': 0,
      'subscribers': 0,
      'rating': 0,
      'reviews': 0,
      'trustworthy_score': 0,
      'partnership_level': 0,
      'products_on_platform': 0,
      'internal_keywords': '',
      'other_useful_string_metric': '',
      'other_useful_integer_metric': 0,
      'other_useful_bool_metric': 0,
      'other_useful_float_metric': 0,
      'other_useful_text_metric': '',
    })
  }
}
