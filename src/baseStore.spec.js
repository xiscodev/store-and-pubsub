import {
  pushTo,
  pullFrom,
  pushValuesTo,
  unsetPath,
} from './baseStore'

// ENVIRONMENT VARIABLES

// TESTS
describe('pullFrom', () => {
  it('should exist', () => {
    expect(pullFrom).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(typeof pullFrom).toBe('function')
  })
})

describe('pushTo', () => {
  it('should exist', () => {
    expect(pushTo).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(typeof pushTo).toBe('function')
  })
})

describe('pushValuesTo', () => {
  it('should exist', () => {
    expect(pushValuesTo).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(typeof pushValuesTo).toBe('function')
  })
})

describe('unsetPath', () => {
  it('should exist', () => {
    expect(unsetPath).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(typeof unsetPath).toBe('function')
  })
})
