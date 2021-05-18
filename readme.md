<div style="display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center;">
  <img style="-webkit-order: 0; -ms-flex-order: 0; order: 0; -webkit-flex: 0 1 auto; -ms-flex: 0 1 auto; flex: 0 1 auto; -webkit-align-self: auto; -ms-flex-item-align: auto; align-self: auto;" src="icon.png" />
</div>

<h1 style="text-align:center;">Store and PubSub</h1>

## What is this?

A simple library to manage a Store and subscriptions to store values.

## How to use it?

First you need to import it in your project

*The require way*

```js
let { pullFrom, pushTo } = require("store-and-pubsub");
```

*The import way*

```js
import { unsetPath } from "store-and-pubsub";
```

Then use it to establish a store with getter and setter for a path, for example currentParam

```js
import { pullFrom, pushTo } from "store-and-pubsub";

const MODULE_STORE_NAME = 'moduleStoreName'

// INITIALIZE AN EMPTY STORE FOR YOUR MODULE
pushTo(MODULE_STORE_NAME, {})

// CREATE A SETTER FOR SOME PATH TO STORE
pushTo(`${MODULE_STORE_NAME}.currentParam`, state)

// CREATE A GETTER FOR SOME PATH TO RETRIEVE
pullFrom(`${MODULE_STORE_NAME}.currentParam`)
```

To unset or push multiple values to store

```js
import { unsetPath, pushValuesTo } from "store-and-pubsub";

const MODULE_STORE_NAME = 'moduleStoreName'

// REMOVES THE PROPERTY AT PATH OF STORE
unsetPath(`${MODULE_STORE_NAME}.currentParam`)

// PUSHES MULTIPLE PROPERTIES AND VALUES AT PATH OF STORE
const values = {
  prop1: "value1",
  prop2: "value2",
}
pushValuesTo(`${MODULE_STORE_NAME}`, values)
```

Paths from store can be subscribed for changes

```js
import { subscribeToPath, unsubscribeFromPath, unsubscribeCallbackOrSubscriber } from "store-and-pubsub";

const MODULE_STORE_NAME = 'moduleStoreName'

const path = `${MODULE_STORE_NAME}.currentParam`

const myCallback = () => {
  // YOUR OWN CODE AND STUFF
}

// SUBSCRIBES TO moduleStoreName.currentParam CHANGES EXECUTING myCallback
const subscriber = subscribeToPath(path, myCallback)

// REMOVES SUBSCRIPTION FRM GIVEN PATH
unsubscribeFromPath(path)

// GIVEN subscriber REMOVES IT FROM PATH SUBSCRIPTION
unsubscribeCallbackOrSubscriber(subscription)

// GIVEN myCallback REMOVES IT FROM ALL PATHS SUBSCRIBED
unsubscribeCallbackOrSubscriber(myCallback)
```

Powered by [xiscodev](https://xisco.dev)

<details>
<summary>Additional JSDOC info</summary>

### JSDOC

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

##### Table of Contents

*   [pullFrom](#pullfrom)
    *   [Parameters](#parameters)
*   [pushTo](#pushto)
    *   [Parameters](#parameters-1)
*   [pushValuesTo](#pushvaluesto)
    *   [Parameters](#parameters-2)
*   [unsetPath](#unsetpath)
    *   [Parameters](#parameters-3)
*   [subscribeToPath](#subscribetopath)
    *   [Parameters](#parameters-4)
*   [unsubscribeFromPath](#unsubscribefrompath)
    *   [Parameters](#parameters-5)
*   [removeSubscription](#removesubscription)
    *   [Parameters](#parameters-6)

#### pullFrom

Retrieves value from stored path.

Type: [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

##### Parameters

*   `path` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** locator string path to store

Returns **any** can be anything stored at given path, anythng stored returns undefined

#### pushTo

Push value to path and notify if could publish.

Type: [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

##### Parameters

*   `path` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** locator string path to store
*   `newValue` **any** the value to push
*   `forceUpdate`   (optional, default `false`)

#### pushValuesTo

Push value to path.

Type: [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

##### Parameters

*   `path` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** locator string path to store
*   `values` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** contains multiple keys and values to be pushed to store

#### unsetPath

Removes path stored.

Type: [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

##### Parameters

*   `path` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** locator string path to store

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if unset has been effective, otherwise returns false

#### subscribeToPath

Subscribes to stored path changes with given callback.

Type: [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

##### Parameters

*   `path` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** locator string path to store
*   `callback`  

Returns **any** reference to be used to single unsubscribe

#### unsubscribeFromPath

Unsubscribe from given paths were has subscribed.

Type: [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

##### Parameters

*   `path` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** locator string path to store

#### removeSubscription

Unsubscribe from all paths were callback or subscriber has subscribed.

Type: [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

##### Parameters

*   `callbackOrSubscriber` **([Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function) | [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object))** to unsubscribe
