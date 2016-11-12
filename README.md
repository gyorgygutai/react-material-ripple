# react-material-ripple

A ReactJS component to make awesome components with ripples.

![alt tag](https://raw.githubusercontent.com/gyorgygutai/react-material-ripple/master/preview.gif)

## Installation

It can be installed as an [npm package](https://www.npmjs.org/package/react-material-ripple):

```bash
$ npm install --save react-material-ripple
```

## Why another ripple component?

All other solutions I used try doing some magic with binding to touchStart, touchEnd which is good for response time, but didn't work for me in real life applications, because they show the ripples `on scroll` which is bad UX and causes scroll performance issues. This one just simply listens to `onClick`.

Also, I'd like to have this feature without a full-featured material library that has all the bells and whistles.

## Basic usage

Import the `Ripple` component and pass your content as the single child:

```js
import React from 'react'
import Ripple from 'react-material-ripple'

(
	<Ripple>
      <div>
        A div with some text.
      </div>
    </Ripple>
)
```

You can also apply css to the wrapper if your wrapped component has an unusual shape. `overflow: hidden` is applied by default to contain the ripple, but there are cases you need to do more.

An example with a rounded button:

```js
import React from 'react'
import Ripple from 'react-material-ripple'

(
	<Ripple style={{borderRadius: '10px'}}>
      <button className="button-rounded-10">
        Click me
      </button>
    </Ripple>
)

// of course you can also use a class
(
	<Ripple className="ripple-rounded">
      <button className="button-rounded">
        Click me
      </button>
    </Ripple>
)
```
