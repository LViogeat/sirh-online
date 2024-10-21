/**
 * @param {import('knex').Knex} knex
 * @returns {Promise<void>}
 */
exports.up = function(knex) {
    return knex.schema.table('employees', function(table) {
      table.date('exit_date');
    });
  };
  
  /**
   * @param {import('knex').Knex} knex
   * @returns {Promise<void>}
   */
  exports.down = function(knex) {
    return knex.schema.table('employees', function(table) {
      table.dropColumn('exit_date');
    });
  };
  