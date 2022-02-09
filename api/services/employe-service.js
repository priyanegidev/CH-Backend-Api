const fs = require('fs');

/**
 * @returns This function return a list of all employees array in json format reading form json file.
 */
 function getEmployeeArr(){
    try {
        const employeeJson = fs.readFileSync('api/json/employees-data.json',
            { encoding: 'utf8', flag: 'r' });
        var employeeArray = JSON.parse(employeeJson);
        return employeeArray;
    } catch (err) {
        console.log(err);
    }
    return false
}

/**
 * @param {req.body.search} searchObject return object passed in search keyword
 * @param {req.body.sortBy} sortByArr return object passed in sortBy keyword
 * @returns This function return a list of array on basis of request body keys like search and sortBy
 */
function filterEmpByParams(searchObject, sortByArr) {
    var filterEmpArray = [];
    const empObject = getEmployeeArr();
    Object.keys(empObject).filter(function (key) {

        searchObject.employeeId !=null && searchObject.employeeId != undefined && empObject[key]['employeeId'] == searchObject.employeeId ?  searchEmpId = searchObject.employeeId : searchEmpId = null; 
        
        searchObject.firstName !=null && searchObject.firstName != undefined && empObject[key]['firstName'] == searchObject.firstName ? searchFirstName = searchObject.firstName : searchFirstName = null;

        searchObject.lastName !=null && searchObject.lastName != undefined && empObject[key]['lastName'] == searchObject.lastName ? searchLastName = searchObject.lastName : searchLastName = null;

        searchObject.department !=null && searchObject.department != undefined && empObject[key]['department'] == searchObject.department ? searchDept = searchObject.department : searchDept = null;
        
        searchObject.status !=null && searchObject.status != undefined && empObject[key]['status'] == searchObject.status ? searchStatus = searchObject.status : searchStatus = null;

        var respArr =   searchEmpId !=null|| searchFirstName !=null  || searchLastName !=null || searchDept !=null || searchStatus !=null ? empObject[key] : null;
        respArr !=null ? filterEmpArray.push(respArr) : '';
     });
     return  filterEmpArray.length == 0 ? sortBy(empObject, sortByArr) : sortBy(filterEmpArray, sortByArr);
}

/**
 * @param {arr} arr array to be sort
 * @param {keys} keys column for sorting
 * @param {splitKeyChar} splitKeyChar key splict for columns
 * @returns sorted array with provided columns
 */
function sortBy (arr, keys, splitKeyChar='~') {
    return arr.sort((i1,i2) => {
        const sortStr1 = keys.reduce((str, key) => str + splitKeyChar+i1[key], '')
        const sortStr2 = keys.reduce((str, key) => str + splitKeyChar+i2[key], '')
        return sortStr1.localeCompare(sortStr2)
    })
}

module.exports = {
    getEmployeeArr,
    filterEmpByParams
};