const test = require('tape');
const app = require('../index');

// test('Crypto', t => {
//   t.ok(app.createHash('text', 'secret'), 'should have createHash function');
//   t.equal('2b7e9a47de781a4586076c07ee537a34cc198cd58d8032463023c838161af1db', app.createHash('I love you', 'secret'), 'should return hash with hex');
//   t.end();
// });

test('createHash()', t => {

  const options = {
    secret: 'supersecret',
    encoding: 'base64'
  };

  t.equal('1139bcbe10425cf5cbc1efde3cabc2b3aa3d7fa428881e01f0025ac5830e10f4', app.createHash('i love you'), 'called without options');
  t.equal('f3f4NlQuxAL5PqxaD306Cq7CWRJJDvEJqGbHsP0XaeM=', app.createHash('i love you', options).toString(), 'return with base64');
  t.end();
});