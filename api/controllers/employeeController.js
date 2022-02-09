const employeService = require('../services/employe-service');

/**
 * @param {req} req get parameters passed in params or header
 * @param {res} res returns response data coming in request
 * @returns This function return a list of emp after reading the json file
 */
async function getAllEmployees(req, res) {
    try {
        const empResp = employeService.getEmployeeArr();
        if(empResp){
            return res.status(200).json({data: empResp == null ? "No record found." : empResp});
        }
     } catch (err) {
        return res.status(500).json({ error: `Please try again. ${err}` });
    }
};

/**
 * @param {req} req 
 * @param {res} res 
 * @returns This function return a list of single employee object on basis of employeeId in query string.
 */
 async function fetchIndividualEmployee(req, res) {
    try {
        let filterEmpArray = [];
        const empObj = employeService.getEmployeeArr();
         Object.keys(empObj).filter(function (key) {
            if(empObj[key]['employeeId'] == req.params.employeeId){
              filterEmpArray.push(empObj[key]);
            }
         });
         return res.status(200).json({data: filterEmpArray.length != 0 ? filterEmpArray : 'No record found.'});
    } catch (err) {
        return res.status(500).json({ error: `Please try again. ${err}` });
    }
};

/**
 * @param {req} req 
 * @param {res} res 
 * @returns This function will return a list of employees description.
 */
async function searchEmployee(req, res) {
    try {
        const respSearch = employeService.filterEmpByParams(req.body.search, req.body.sortBy);
        return res.status(200).json({data: respSearch.length != 0 ? respSearch : 'No record found.'});
    } catch (err) {
        return res.status(500).json({ error: `Please try again. ${err}` });
    }
};

module.exports = {
    getAllEmployees,
    fetchIndividualEmployee,
    searchEmployee
};