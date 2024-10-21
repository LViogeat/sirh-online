class Employee {
  constructor(id, first_name, last_name, email, phone, hire_date, exit_date, status) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone = phone;
    this.hire_date = hire_date;
    this.exit_date = exit_date;
    this.status = status || 'active';
  }

  static fromDatabase(data) {
    return new Employee(
      data.id,
      data.first_name,
      data.last_name,
      data.email,
      data.phone,
      data.hire_date,
      data.exit_date,
      data.status
    );
  }
}

module.exports = Employee;
