let Request = require('request');
require('dotenv').config()

describe("server", () => {
    let server;
    let promiseBundleID1;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
    });
    describe("POST /API/users/register", () => {
        let data = {};
        let username = "testusername";
        let password = "testpassword";
        beforeAll((done) => {
            Request(
                {
                    method: 'POST',
                    uri: 'http://localhost:3000/API/users/register',
                    json: true,
                    body: {username: username, password: password}
                }, (error, response, body) => {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
            }).auth(null,null,true,process.env.PROMISE_BACKEND_SECRET);
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check body", () => {
            expect(data.body.promiseBundle.length).toBeDefined();
            expect(data.body.token).toBeDefined();
            promiseBundleID1 = data.body.promiseBundle;
        });
    });
    describe("POST /API/users/login", () => {
        let data = {};
        let username = "testusername";
        let password = "testpassword";
        beforeAll((done) => {
            Request(
                {
                    method: 'POST',
                    uri: 'http://localhost:3000/API/users/login',
                    json: true,
                    body: {username: username, password: password}
                }, (error, response, body) => {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
            }).auth(null,null,true,process.env.PROMISE_BACKEND_SECRET);
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check body", () => {
            expect(data.body.promiseBundle).toBeDefined();
            expect(data.body.token).toBeDefined();
        });
    });
    describe("GET /API/promisebundle/ unauthorized ", () => {
        let data = {};
        beforeAll((done) => {
            Request.get(`http://localhost:3000/API/promisebundle/${promiseBundleID1}`,
                (error, response, body) => {
                    data.status = response.statusCode;
                    done();
            });
        });
        it("status 401", () => {
            expect(data.status).toBe(401);
        });
    });
    /* describe("POST /API/promisebundles/:promisebundle/promises", () => {
        let data = {};
        let name = "testpromisename";
        let description = "testpromisedescription";
        let promisee = "testpromiseename";
        beforeAll((done) => {
            Request(
                {
                    method: 'POST',
                    uri: `http://localhost:3000/API/promisebundles/${promiseBundleID1}/promises/`,
                    json: true,
                    body: {name: name, description: description, promisees: [{name: promisee}]}
                }, (error, response, body) => {
                    data.status = response.statusCode;
                    data.body = body;
                    done();
            }).auth(null,null,true, process.env.PROMISE_BACKEND_SECRET);
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check body", () => {
            expect(data.body.promises.length).toBeDefined();
        });
    }); */
})