import {
  subscribeToPath,
  unsubscribeFromPath,
  unsubscribeCallback
} from './pubsubStore'

// ENVIRONMENT VARIABLES

// TESTS
describe('subscribeToPath', () => {
  it('should exist', () => {
    expect(subscribeToPath).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(typeof subscribeToPath).toBe('function')
  })
})

describe('unsubscribeFromPath', () => {
  it('should exist', () => {
    expect(unsubscribeFromPath).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(typeof unsubscribeFromPath).toBe('function')
  })
})

describe('unsubscribeCallback', () => {
  it('should exist', () => {
    expect(unsubscribeCallback).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(typeof unsubscribeCallback).toBe('function')
  })
})
