const test = require('tape');
const app = require('../index');

test('Crypto', t => {
  t.ok(app.createHash('text', 'secret'), 'should have createHash function');
  t.equal('2b7e9a47de781a4586076c07ee537a34cc198cd58d8032463023c838161af1db', app.createHash('I love you', 'secret'), 'should return hash with hex');
  t.end();
});