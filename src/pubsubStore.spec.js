import {
  subscribeToPath,
  unsubscribeFromPath,
  removeSubscription
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

describe('removeSubscription', () => {
  it('should exist', () => {
    expect(removeSubscription).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(typeof removeSubscription).toBe('function')
  })
})
