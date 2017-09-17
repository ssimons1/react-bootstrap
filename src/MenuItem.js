import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import all from 'prop-types-extra/lib/all';

import SafeAnchor from './SafeAnchor';
import { bsClass, prefix, splitBsPropsAndOmit } from './utils/bootstrapUtils';
import createChainedFunction from './utils/createChainedFunction';

const propTypes = {
  /**
   * @property {PropTypes.bool} active - Highlight the menu item as active.
   */
  active: PropTypes.bool,

  /**
   * @property {PropTypes.bool} disabled - Disable the menu item, making it unselectable.
   */
  disabled: PropTypes.bool,

  /**
   * @property {PropTypes.bool} divider -
   * Styles the menu item as a horizontal rule, providing visual separation between
   * groups of menu items.
   */
  divider: all(
    PropTypes.bool,
    ({ divider, children }) => (
      divider && children ?
        new Error('Children will not be rendered for dividers') :
        null
    ),
  ),

  /**
   * @property {*} eventKey - Value passed to the `onSelect` handler, useful for identifying the selected menu item.
   */
  eventKey: PropTypes.any,

  /**
   * @property {PropTypes.bool} header - Styles the menu item as a header label, useful for describing a group of menu items.
   */
  header: PropTypes.bool,

  /**
   * @property {string} href - HTML `href` attribute corresponding to `a.href`.
   */
  href: PropTypes.string,

  /**
   * @property {PropTypes.func} onClick - Callback fired when the menu item is clicked.
   */
  onClick: PropTypes.func,

  /**
   * @property {PropTypes.func} onSelect -
   * Callback fired when the menu item is selected.
   *
   * (eventKey: any, event: Object) => any
   */
  onSelect: PropTypes.func,
};

const defaultProps = {
  divider: false,
  disabled: false,
  header: false,
};
/**
 * @description
 * Represents a menu item in a dropdown.
 * It supports the basic anchor properties `href`, `target`, `title`.
 *
 * It also supports different properties of the normal Bootstrap MenuItem.
 * * `header`: To add a header label to sections
 * * `divider`: Adds an horizontal divider between sections
 * * `disabled`: shows the item as disabled, and prevents onSelect from firing
 * * `eventKey`: passed to the callback
 * * `onSelect`: a callback that is called when the user clicks the item.
 *
 * @example
 * //The callback is called with the following arguments: `event` and `eventKey`.
 * function onSelectAlert(eventKey) {
 *  alert(`Alert from menu item.\neventKey: ${eventKey}`);
 * }
 * const MenuItems = (
 *  <Clearfix>
 *    <ul className="dropdown-menu open">
 *      <MenuItem header>Header</MenuItem>
 *      <MenuItem>link</MenuItem>
 *      <MenuItem divider/>
 *      <MenuItem header>Header</MenuItem>
 *      <MenuItem>link</MenuItem>
 *      <MenuItem disabled>disabled</MenuItem>
 *      <MenuItem title="See? I have a title.">
 *        link with title
 *      </MenuItem>
 *      <MenuItem eventKey={1} href="#someHref" onSelect={onSelectAlert}>
 *        link that alerts
 *      </MenuItem>
 *    </ul>
 *  </Clearfix>
 * );
 * ReactDOM.render(MenuItems, mountNode);
 *
 * @property {string} bsClass - Base CSS class and prefix for the component. Generally one should only change `bsClass` to provide new, non-Bootstrap, CSS styles for a component. Default is `dropdown`.
 *
 */
class MenuItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { href, disabled, onSelect, eventKey } = this.props;

    if (!href || disabled) {
      event.preventDefault();
    }

    if (disabled) {
      return;
    }

    if (onSelect) {
      onSelect(eventKey, event);
    }
  }

  render() {
    const {
      active,
      disabled,
      divider,
      header,
      onClick,
      className,
      style,
      ...props
    } = this.props;

    const [bsProps, elementProps] = splitBsPropsAndOmit(props, [
      'eventKey', 'onSelect',
    ]);

    if (divider) {
      // Forcibly blank out the children; separators shouldn't render any.
      elementProps.children = undefined;

      return (
        <li
          {...elementProps}
          role="separator"
          className={classNames(className, 'divider')}
          style={style}
        />
      );
    }

    if (header) {
      return (
        <li
          {...elementProps}
          role="heading"
          className={classNames(className, prefix(bsProps, 'header'))}
          style={style}
        />
      );
    }

    return (
      <li
        role="presentation"
        className={classNames(className, { active, disabled })}
        style={style}
      >
        <SafeAnchor
          {...elementProps}
          role="menuitem"
          tabIndex="-1"
          onClick={createChainedFunction(onClick, this.handleClick)}
        />
      </li>
    );
  }
}

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default bsClass('dropdown', MenuItem);
