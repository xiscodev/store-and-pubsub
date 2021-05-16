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
 * @param {*} path stored which wants to retrieve value from
 * @returns {*} can be anything stored at given path
 */
const pullFrom = (path) => {
  return get(_store, path)
}

/**
 * @access public
 * @type {Function}
 * @description Push value to path.
 * @param {*} path stored which wants to push values
 * @param {*} newValue the value to push
 * @returns {*} the newValue stored to path
 */
const pushTo = (path, newValue) => {
  const oldValue = pullFrom(path)
  if (oldValue !== newValue) {
    set(_store, path, newValue)
  }
  return newValue
}

/**
 * @access public
 * @type {Function}
 * @description Removes path stored.
 * @param {*} path stored which wants to destroy
 * @returns {boolean} true if unset has been effective, otherwise returns false
 */
const unsetPath = (path) => {
  return unset(path)
}

/**
 * @access public
 * @type {Function}
 * @description Clears all stored paths and values.
 * @param {*} storeName to be cleared
 * @param {*} initialObject to populate empty object with initial params, default undefined
 */
const resetStore = (storeName, initialObject) => {
  pushTo(storeName, Object.assign({}, initialObject))
}

export {
  _store,
  pullFrom,
  pushTo,
  unsetPath,
  resetStore,
}
