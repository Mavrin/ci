const coolModule = require('../cool-module')
const assert = require('assert')
describe('test cool module', () => {
  it('Answer to the Ultimate Question of Life, the Universe, and Everything', () => {
    assert.equal(42, coolModule.doSomething())
  })
  it('Fail test', () => {
    assert.equal(40, coolModule.doSomething())
  })
})
