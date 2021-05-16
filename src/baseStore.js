import { publish } from 'pubsub-js'
import set from 'lodash.set'
import get from 'lodash.get'
import unset from 'lodash.unset'

/**
 * @access private
 * @type {object}
 * @description Internal store.
 */
const _store = {}

/**
 * @access public
 * @type {Function}
 * @description Retrieves value from stored path.
 * @param {string} path locator string path to store
 * @returns {*} can be anything stored at given path, anythng stored returns undefined
 */
const pullFrom = (path) => {
  return get(_store, path)
}

/**
 * @access public
 * @type {Function}
 * @description Push value to path.
 * @param {string} path locator string path to store
 * @param {*} newValue the value to push
 */
const pushTo = (path, newValue, forceUpdate = false) => {
  let hasPublished = false
  const oldValue = pullFrom(path)
  if (forceUpdate || oldValue !== newValue) {
    set(_store, path, newValue)
    hasPublished = publish(path, {
      newValue,
      oldValue,
    })
  }
  console.log(`pushTo() ${path} ${newValue} ${hasPublished}`)
}

/**
 * @access public
 * @type {Function}
 * @description Push value to path.
 * @param {string} path locator string path to store
 * @param {object} values contains multiple keys and values to be pushed to store
 */
const pushValuesTo = (path, values) => {
  for (const key in values) {
    if (values.hasOwnProperty(key)) {
      pushTo(`${path}.${key}`, values[key])
    }
  }
}

/**
 * @access public
 * @type {Function}
 * @description Removes path stored.
 * @param {string} path locator string path to store
 * @returns {boolean} true if unset has been effective, otherwise returns false
 */
const unsetPath = (path) => {
  const hasUnsetted = unset(path)
  console.log(`unsetPath() ${path} ${hasUnsetted}`)
  return hasUnsetted
}

export {
  pullFrom,
  pushTo,
  pushValuesTo,
  unsetPath,
}
