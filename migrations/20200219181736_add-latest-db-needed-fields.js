
exports.up = function(knex) {
  return knex.schema.table('companies', t => {
    t.string('user_id');
    t.integer('clicks');
    t.integer('views');
    t.integer('hovers');
    t.integer('purchases');
    t.integer('customer_contacts');
    t.float('money_made');
    t.integer('subscribers');
    t.integer('rating');
    t.integer('reviews');
    t.integer('trustworthy_score');

    t.integer('partnership_level');
    t.string('company_size');
    t.bool('products_on_platform');
    t.string('internal_keywords');
    t.string('other_useful_string_metric');
    t.integer('other_useful_integer_metric');
    t.bool('other_useful_bool_metric');
    t.float('other_useful_float_metric');
    t.text('other_useful_text_metric');

    t.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.table('companies', t => {
    t.dropColumn('user_id');
    t.dropColumn('clicks');
    t.dropColumn('views');
    t.dropColumn('hovers');
    t.dropColumn('purchases');
    t.dropColumn('customer_contacts');
    t.dropColumn('money_made');
    t.dropColumn('subscribers');
    t.dropColumn('rating');
    t.dropColumn('reviews');
    t.dropColumn('trustworthy_score');

    t.dropColumn('partnership_level');
    t.dropColumn('company_size');
    t.dropColumn('products_on_platform');
    t.dropColumn('internal_keywords');
    t.dropColumn('other_useful_string_metric');
    t.dropColumn('other_useful_integer_metric');
    t.dropColumn('other_useful_bool_metric');
    t.dropColumn('other_useful_float_metric');
    t.dropColumn('other_useful_text_metric');

    table.dropTimestamps('created_at');
  });
};
