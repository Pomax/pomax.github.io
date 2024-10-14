import React from "./vendor/react/react.0.12.min.js";

export { React };

/**
 * This is a wrapper around React's component creation, so we can
 * pass in an object with a slightly nicer API surface. Much like
 * native JS, React 0.12 was incredibly verbose, while at the same
 * time not always passing component props and state into all of
 * the life cycle functions.
 *
 * Changes:
 *
 * - `initialState` is a spec property, declare it instead of a getInitialState function.
 * - `onMount` instead of the `componentDidMount` lifecycle function
 * - `onUpdate` instead of the `componentDidUpdate` lifecycle function
 * - there is a free `reset()` function that will set your component back to its initial state.
 *
 * @returns
 */
export function createClass(spec) {
  const { initialState = {} } = spec;
  spec.getInitialState = () => initialState;
  spec.onMount &&
    (spec.componentDidMount = function (...args) {
      this.onMount(...args);
    });
  spec.onUpdate &&
    (spec.componentDidUpdate = function (...args) {
      this.onUpdate(...args);
    });
  return React.createClass(spec);
}
