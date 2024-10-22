const request = require('supertest');
const app = require('../app');

describe('Express.js App', () => {

it('should return Hello, World! on GET /', async () => {
const response = await request(app).get('/');
expect(response.statusCode).toBe(200);
expect(response.text).toBe('Hello, world!');
});

});
