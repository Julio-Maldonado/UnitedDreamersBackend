exports.up = function(knex) {
  return knex.schema.createTable('companies', function(t) {
    t.increments('id').primary();
    t.string('owner_first_name');
    t.string('owner_last_name');
    t.string('company_name');
    t.string('category');
    t.text('description');
    t.string('services');
    t.string('phone_number');
    t.string('email_address');
    t.string('website_url');
    t.string('facebook_url');
    t.string('instagram_url');
    t.string('twitter_url');
    t.string('zip_code');
    t.string('city');
    t.string('state');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('companies');
};
