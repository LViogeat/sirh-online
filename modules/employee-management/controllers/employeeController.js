const EmployeeService = require('../services/employeeService');

const getAllEmployees = async (req, res) => {
  try {
    const employees = await EmployeeService.findAll(req.app.get('db'));
    console.log('Employés récupérés :', employees);
    res.status(200).json(employees);
  } catch (error) {
    console.error('Erreur lors de la récupération des employés :', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des employés : ' + error.message });
  }
};

module.exports = {
  getAllEmployees
};
