
exports.up = function(knex) {
  return knex.schema.alterTable('companies', t => {
    t.text('services').alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('companies', t => {
    t.string('services').alter();
  });
};
