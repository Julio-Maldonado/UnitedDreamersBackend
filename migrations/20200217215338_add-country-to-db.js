
exports.up = function(knex) {
  return knex.schema.table('companies', t => {
    t.string('country');
  });
};

exports.down = function(knex) {
  return knex.schema.table('companies', t => {
    t.dropColumn('country');
  });
};
