const Knex = require('knex')
const Employee = require('../models/Employee');

class EmployeeService {
  /**
   * @param {Knex} knex
   * @returns {Promise<void>}
   */
  static createTable(knex) {
    return knex.schema.createTable('employees', (table) => {
      table.increments('id').primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').unique().notNullable();
      table.string('phone');
      table.date('hire_date');
      table.date('exit_date');
      table.string('status').defaultTo('active');
      table.timestamps(true, true);
    });
  }

  /**
   * @param {Knex} knex
   * @returns {Promise<Employee[]>}
   */
  static async findAll(knex) {
    const employeesData = await knex('employees').select('*');
    return employeesData.map(Employee.fromDatabase);
  }
}

module.exports = EmployeeService;
