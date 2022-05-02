/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Date, conn } = require('../../src/db.js');

const agent = session(app);
const date = {
  date: '2022-04-24',
};

describe('Date routes', () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error('Unable to connect to the database:', err);
    })
  );
  beforeEach(() => Date.sync({ force: true }).then(() => Date.create(date)));
  describe('GET /', () => {
    it('should get 200', () => agent.get('/').expect(200));
  });
});
