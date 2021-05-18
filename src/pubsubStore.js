import { subscribe, unsubscribe } from 'pubsub-js'

/**
 * @access public
 * @type {Function}
 * @description Subscribes to stored path changes with given callback.
 * @param {string} path locator string path to store
 * @returns {*} reference to be used to single unsubscribe
 */
const subscribeToPath = (path, callback) => {
  DEBUG && console.log('STORE', `${path} subscribeToPath() ${callback}`)
  return subscribe(path, callback)
}

/**
 * @access public
 * @type {Function}
 * @description Unsubscribe from given paths were has subscribed.
 * @param {string} path locator string path to store
 */
const unsubscribeFromPath = (path) => {
  DEBUG && console.log('STORE', `${path} unsubscribeFromPath()`)
  unsubscribe(path)
}

/**
 * @access public
 * @type {Function}
 * @description Unsubscribe from all paths were callback or subscriber has subscribed.
 * @param {Function|object} callbackOrSubscriber to unsubscribe
 * @example
 */
const removeSubscription = (callbackOrSubscriber) => {
  DEBUG && console.log('STORE', `removeSubscription() ${callbackOrSubscriber}`)
  unsubscribe(callbackOrSubscriber)
}

export {
  subscribeToPath,
  unsubscribeFromPath,
  removeSubscription,
}
