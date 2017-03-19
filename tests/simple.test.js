const coolModule = require('../cool-module')
const assert = require('assert')
describe('test cool module', () => {
  it('Answer to the Ultimate Question of Life, the Universe, and Everything', () => {
    assert.equal(42, coolModule.doSomething())
  })
})
