---
path: Reactjs-summary-from-goalkicker-part1
date: 2020-05-12T16:37:16.530Z
title: Summary Reactjs Part 1
description: "source: https://goalkicker.com/ReactJSBook/"
---
# stateless functions in reactjs
Stateless components are getting their philosophy from functional programming. Which implies that: A function
returns all time the same thing exactly on what is given to it.

**for example:**
```js
const statelessSum = (a, b) => a + b; //stateless

let a = 0;
const statefulSum = () => a++;        //stateful

```
The most basic type of react component is one without state. React components that are pure functions of their
props and do not require any internal state management can be written as simple JavaScript functions. These are
said to be Stateless Functional Components because they are a function only of props , without having any state
to keep track of.
Here is a simple example to illustrate the concept of a Stateless ** Functional Component :**
```js
// In HTML
<div id="element"></div>
// In React
const MyComponent = props => {
return <h1>Hello, {props.name}!</h1>;
};
ReactDOM.render(<MyComponent name="Arun" />, element);
// Will render <h1>Hello, Arun!</h1>
```
Note that all that this component does is render an h1 element containing the name prop. This component doesn't
keep track of any state. Here's an **ES6** example as well:
```js
import React from 'react'
const HelloWorld = props => (
<h1>Hello, {props.name}!</h1>
)
HelloWorld.propTypes = {
name: React.PropTypes.string.isRequired
}
export default HelloWorld
```
Since these components do not require a backing instance to manage the state, React has more room for
optimizations. The implementation is clean, but as of yet no such optimizations for stateless components have
been implemented.