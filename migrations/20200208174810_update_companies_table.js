
exports.up = function(knex) {
  return knex.schema.table('companies', t => {
    t.boolean('daca_owned');
    t.boolean('support_daca');
    t.boolean('signed_support_for_daca');
    t.boolean('against_daca');
    t.boolean('donated_against_daca');
  });
};

exports.down = function(knex) {
  return knex.schema.table('companies', t => {
    t.dropColumn('daca_owned');
    t.dropColumn('support_daca');
    t.dropColumn('signed_support_for_daca');
    t.dropColumn('against_daca');
    t.dropColumn('donated_against_daca');
  });
};
