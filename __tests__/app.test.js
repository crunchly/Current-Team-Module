const request = require('supertest');
const app = require('../server/app.js');

describe('Test the root path', () => {
  test('It should respond to GET method', () => {
    return request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('It should respond to GET method', () => {
    return request(app)
      .get('/people/Facebook')
      .then((response) => {
        expect(response.body).toHaveLength(4);
      });
  });
});
