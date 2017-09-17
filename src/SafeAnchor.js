import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';

import createChainedFunction from './utils/createChainedFunction';

const propTypes = {
  /**
   * @property {string} href
   */
  href: PropTypes.string,
  /**
   * @property {PropTypes.func} onClick
   */
  onClick: PropTypes.func,
  /**
   * @property {PropTypes.func} onKeyDown
   */
  onKeyDown: PropTypes.func,
  /**
   * @property {PropTypes.bool} disbled
   */
  disabled: PropTypes.bool,
  /**
   * @property {string} role
   */
  role: PropTypes.string,
  /**
   * @property {number|string} tabIndex
   */
  tabIndex: PropTypes.oneOfType([
    PropTypes.number, PropTypes.string,
  ]),
  /**
   * @property {elementType} componentClass - this is sort of silly but needed for Button
   */
  componentClass: elementType,
};

const defaultProps = {
  componentClass: 'a',
};

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}

/**
 * @description
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, MenuItems, etc.
 */
class SafeAnchor extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick(event) {
    const { disabled, href, onClick } = this.props;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  }

  handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      this.handleClick(event);
    }
  }

  render() {
    const { componentClass: Component, disabled, onKeyDown, ...props } = this.props;

    if (isTrivialHref(props.href)) {
      props.role = props.role || 'button';
      // we want to make sure there is a href attribute on the node
      // otherwise, the cursor incorrectly styled (except with role='button')
      props.href = props.href || '#';
    }

    if (disabled) {
      props.tabIndex = -1;
      props.style = { pointerEvents: 'none', ...props.style };
    }

    return (
      <Component
        {...props}
        onClick={this.handleClick}
        onKeyDown={createChainedFunction(this.handleKeyDown, onKeyDown)}
      />
    );
  }
}

SafeAnchor.propTypes = propTypes;
SafeAnchor.defaultProps = defaultProps;

export default SafeAnchor;
