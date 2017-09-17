// TODO: The publicly exposed parts of this should be in lib/BootstrapUtils.
/**
 * @description
 * A series of utility functions designed for use with bootstrap in react they include:
 * * Transitions: Transition components animate their children transitioning in and out.
 * * Custom Styles: The bsStyle prop, available in many components in React-Bootstrap,
 * * is used to map to a Bootstrap class for styling
 */

import invariant from 'invariant';
import PropTypes from 'prop-types';

import { SIZE_MAP } from './StyleConfig';

/**
 * @description
 * Turns a function into a curried function.
 * If the curried function recieves a component as the last argument, it will execute.
 * Otherwise, It will return another function that expects only a component.
 * That function will execute the orignal one with the original arguments, plus the component.
 *
 * @name curry
 * @param {function}
 * @returns {function}
 *
 */
function curry(fn) {
  return (...args) => {
    let last = args[args.length - 1];
    if (typeof last === 'function') {
      return fn(...args);
    }
    return Component => fn(...args, Component);
  };
}
/**
 * @description
 * Prefixes a variant with the bsClass.
 * If there's no variant, returns the bsClass.
 *
 * @name prefix
 * @param {object} props
 * @param {string} variant
 * @returns {string}
 */
export function prefix(props, variant) {
  invariant(
    props.bsClass != null,
    'A `bsClass` prop is required for this component'
  );
  return props.bsClass + (variant ? `-${variant}` : '');
}
/**
 * Adds a default class to a component.
 * @name bsClass
 * @param {string} defaultClass
 * @param {object} Component
 * @returns {function}
 */
export const bsClass = curry((defaultClass, Component) => {
  let propTypes = Component.propTypes || (Component.propTypes = {});
  let defaultProps = Component.defaultProps || (Component.defaultProps = {});

  propTypes.bsClass = PropTypes.string;
  defaultProps.bsClass = defaultClass;

  return Component;
});
/**
 * @description
 * Adds a bsStyle prop to the component.
 * Returns the component with a bsStyle prop that has a default value and a list of possible values.
 * @name bsStyles
 * @param {Array} styles
 * @param {string} defaultStyle
 * @param {object} Component
 * @returns {object}
 *
 */
export const bsStyles = curry((styles, defaultStyle, Component) => {
  if (typeof defaultStyle !== 'string') {
    Component = defaultStyle;
    defaultStyle = undefined;
  }

  let existing = Component.STYLES || [];
  let propTypes = Component.propTypes || {};

  styles.forEach(style => {
    if (existing.indexOf(style) === -1) {
      existing.push(style);
    }
  });

  let propType = PropTypes.oneOf(existing);

  // expose the values on the propType function for documentation
  Component.STYLES = propType._values = existing;

  Component.propTypes = {
    ...propTypes,
    bsStyle: propType
  };

  if (defaultStyle !== undefined) {
    let defaultProps = Component.defaultProps || (Component.defaultProps = {});
    defaultProps.bsStyle = defaultStyle;
  }

  return Component;
});
/**
 * @description
 * Adds a bsSize prop to the component.
 * Returns the component with a bsSize prop that has a default value and a list of possible values.
 * @name bsSizes
 * @param {Array} sizes
 * @param {string} defaultSize
 * @param {object} Component
 * @returns {function}
 *
 */
export const bsSizes = curry((sizes, defaultSize, Component) => {
  if (typeof defaultSize !== 'string') {
    Component = defaultSize;
    defaultSize = undefined;
  }

  let existing = Component.SIZES || [];
  let propTypes = Component.propTypes || {};

  sizes.forEach(size => {
    if (existing.indexOf(size) === -1) {
      existing.push(size);
    }
  });

  const values = [];
  existing.forEach(size => {
    const mappedSize = SIZE_MAP[size];
    if (mappedSize && mappedSize !== size) {
      values.push(mappedSize);
    }

    values.push(size);
  });

  const propType = PropTypes.oneOf(values);
  propType._values = values;

  // expose the values on the propType function for documentation
  Component.SIZES = existing;

  Component.propTypes = {
    ...propTypes,
    bsSize: propType
  };

  if (defaultSize !== undefined) {
    if (!Component.defaultProps) {
      Component.defaultProps = {};
    }
    Component.defaultProps.bsSize = defaultSize;
  }

  return Component;
});
/**
 * @description
 * Gets a class set according to the props.
 *
 * @name getClassSet
 * @param {object} props
 * @returns {object}
 * @example
 * { bsClass: 'btn', bsStyle: 'primary' } => { btn: true, 'btn-primary': true }
 * getClassSet({ bsClass: 'btn', bsSize: 'large' }) => { btn: true, 'btn-lg': true }
 * getClassSet({ bsClass: 'btn', bsSize: 'lg', bsStyle: 'primary' } => { btn: true, 'btn-lg': true, 'btn-primary': true }
 */
export function getClassSet(props) {
  const classes = {
    [prefix(props)]: true,
  };

  if (props.bsSize) {
    const bsSize = SIZE_MAP[props.bsSize] || props.bsSize;
    classes[prefix(props, bsSize)] = true;
  }

  if (props.bsStyle) {
    classes[prefix(props, props.bsStyle)] = true;
  }

  return classes;
}
/**
 * @description Seperates between the component's bsProps and other props.
 * bsProps are: bsClass, bsSize, bsStyle, bsRole.
 *
 */
function getBsProps(props) {
  return {
    bsClass: props.bsClass,
    bsSize: props.bsSize,
    bsStyle: props.bsStyle,
    bsRole: props.bsRole,
  };
}

function isBsProp(propName) {
  return (
    propName === 'bsClass' ||
    propName === 'bsSize' ||
    propName === 'bsStyle' ||
    propName === 'bsRole'
  );
}
/**
 * @name splitBsProps
 * @description Splits props into two arrays, contained in a container array.
 * First array is the bsProps, and the second is all the other props.
 * @param {object} props
 * @returns {Array}
 *
 */
export function splitBsProps(props) {
  const elementProps = {};
  Object.entries(props).forEach(([propName, propValue]) => {
    if (!isBsProp(propName)) {
      elementProps[propName] = propValue;
    }
  });

  return [getBsProps(props), elementProps];
}
/**
 * @name splitBsPropsAndOmit
 * @description Splits props into two arrays, contained in a container array.
 * First array is the bsProps, and the second is all the other props, minus those that should be ommitted.
 * @param {object} props
 * @param {Array} omittedPropNames
 * @returns {Array}
 *
 */
export function splitBsPropsAndOmit(props, omittedPropNames) {
  const isOmittedProp = {};
  omittedPropNames.forEach(propName => { isOmittedProp[propName] = true; });

  const elementProps = {};
  Object.entries(props).forEach(([propName, propValue]) => {
    if (!isBsProp(propName) && !isOmittedProp[propName]) {
      elementProps[propName] = propValue;
    }
  });

  return [getBsProps(props), elementProps];
}

/**
 * @description
 * Add a style variant to a Component. Mutates the propTypes of the component
 * in order to validate the new variant.
 * @name addStyle
 * @param {object} Component
 * @param {Array} styleVariant
 *
 */
export function addStyle(Component, ...styleVariant) {
  bsStyles(styleVariant, Component);
}

export const _curry = curry;
