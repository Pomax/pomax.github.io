import {Component, createRef} from "preact/compat";

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
  const { initialState, getInitialState, onMount, onUpdate, refs, ...methods } = spec;

  const klass = class extends Component {
    constructor(props) {
      super(props);
      this.state = initialState ?? (getInitialState && getInitialState.call(this)) ?? {};

      for (const [name, method] of Object.entries(methods)) {
        this[name] = method.bind(this);
      }

      if (refs) {
        this.refs = {};
        for (const refName of refs) {
          this.refs[refName] = createRef(null);
        }
      }
    }

    componentDidMount(...args) {
      if (onMount) {
        onMount.call(this, ...args)
      }
    }

    componentDidUpdate(...args) {
      if (onUpdate) {
        onUpdate.call(this, ...args)
      }
    }
  }

  return klass;
}
