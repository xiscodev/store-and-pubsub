import { subscribe, unsubscribe } from 'pubsub-js'
import { pullFrom } from './baseStore'

/**
 * @access public
 * @type {Function}
 * @description Subscribes to stored path changes with given callback.
 * @param {string} path locator string path to store
 * @returns {*} reference to be used to single unsubscribe
 */
const subscribeToPath = (path, callback) => {
  const stored = pullFrom(path)
  return subscribe(stored, callback)
}

/**
 * @access public
 * @type {Function}
 * @description Unsubscribe from given paths were has subscribed.
 * @param {string} path locator string path to store
 */
const unsubscribeFromPath = (path) => {
  const stored = pullFrom(path)
  unsubscribe(stored)
}

/**
 * @access public
 * @type {Function}
 * @description Unsubscribe from all paths were callback has subscribed.
 * @param {Function} callback to unsubscribe
 */
const unsubscribeCallback = (callback) => {
  unsubscribe(callback)
}

export {
  subscribeToPath,
  unsubscribeFromPath,
  unsubscribeCallback,
}
