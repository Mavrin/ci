const coolModule = require('../cool-module');
const assert = require('assert');
describe('test cool module', () => {
  assert.equal(42, coolModule.doSomething());
});
