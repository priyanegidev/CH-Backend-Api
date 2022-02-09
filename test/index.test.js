var expect = require('chai').expect;
var request = require('supertest');
const mainEntryPoint = require("../app");
var chai = require('chai'), chaiHttp = require('chai-http');

chai.use(chaiHttp);
describe('Test Case Get All Employees', () => {
    describe('Route GET /api/v1/employees', () => {
        it('Should GET to /api/v1/employees', async () => {
            const res = await request(mainEntryPoint).get('/api/v1/employees');
            expect(res).to.have.status(200);
            expect(res).to.be.a('object');
        });
    });
});

describe('Test Case Get Individual Employee Detail', () => {
    describe('Route GET /api/v1/employees/:employeeId', () => {
        it('Should GET to /api/employees/:employeeId', async () => {
            const res = await request(mainEntryPoint).get('/api/v1/employees/:employeeId');
            expect(res).to.have.status(200);
            expect(res).to.be.a('object');
        });
    });
});

describe('Test Case Search Employee optional', () => {
    describe('Route POST /api/v1/employees/search', () => {
        it('Should POST to /api/v1/employees/search', async () => {
            const res = await request(mainEntryPoint).get('/api/v1/employees/search');
            expect(res).to.have.status(200);
            expect(res).to.be.a('object');
        });
    });
});

