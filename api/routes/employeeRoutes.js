const router = require('express').Router();
const empController = require('../controllers/employeeController');

  router.get('/employees', empController.getAllEmployees);
  router.get('/employees/:employeeId', empController.fetchIndividualEmployee);
  router.post('/employees/search', empController.searchEmployee);

module.exports = router;