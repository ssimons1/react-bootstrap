import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Dropdown from './Dropdown';
import SplitToggle from './SplitToggle';
import splitComponentProps from './utils/splitComponentProps';

const propTypes = {
  ...Dropdown.propTypes,

  // Toggle props.
  bsStyle: PropTypes.string,
  bsSize: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  /**
   * The content of the split button.
   */
  title: PropTypes.node.isRequired,
  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: PropTypes.string,

  // Override generated docs from <Dropdown>.
  /**
   * @private
   */
  children: PropTypes.node,
};
/**
 * @description
 * Represents a split button dropdown.
 * Create split button dropdowns with the <SplitButton /> component:
 * @example
 * const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];
 *
 * function renderSplitButton(title, i) {
 *  return (
 *    <SplitButton bsStyle={title.toLowerCase()} title={title} key={i} id={`split-button-basic-${i}`}>
 *      <MenuItem eventKey="1">Action</MenuItem>
 *      <MenuItem eventKey="2">Another action</MenuItem>
 *      <MenuItem eventKey="3">Something else here</MenuItem>
 *      <MenuItem divider />
 *      <MenuItem eventKey="4">Separated link</MenuItem>
 *    </SplitButton>
 *  );
 * }
 *
 * const buttonsInstance = (
 *  <ButtonToolbar>{BUTTONS.map(renderSplitButton)}</ButtonToolbar>
 * );
 *
 * ReactDOM.render(buttonsInstance, mountNode);
 *
 * @example
 * // Sizing
 * // Dropdowns work with buttons of all sizes:
 *
 * const buttonsInstance = (
 *  <div>
 *    <ButtonToolbar>
 *      <SplitButton bsSize="large" title="Large button" id="dropdown-size-large">
 *        <MenuItem eventKey="1">Action</MenuItem>
 *        <MenuItem eventKey="2">Another action</MenuItem>
 *        <MenuItem eventKey="3">Something else here</MenuItem>
 *        <MenuItem divider />
 *        <MenuItem eventKey="4">Separated link</MenuItem>
 *      </SplitButton>
 *    </ButtonToolbar>
 *
 *    <ButtonToolbar>
 *      <SplitButton title="Default button" id="dropdown-size-medium">
 *        <MenuItem eventKey="1">Action</MenuItem>
 *        <MenuItem eventKey="2">Another action</MenuItem>
 *        <MenuItem eventKey="3">Something else here</MenuItem>
 *        <MenuItem divider />
 *        <MenuItem eventKey="4">Separated link</MenuItem>
 *      </SplitButton>
 *    </ButtonToolbar>
 *
 *    <ButtonToolbar>
 *      <SplitButton bsSize="small" title="Small button" id="dropdown-size-small">
 *        <MenuItem eventKey="1">Action</MenuItem>
 *        <MenuItem eventKey="2">Another action</MenuItem>
 *        <MenuItem eventKey="3">Something else here</MenuItem>
 *        <MenuItem divider />
 *        <MenuItem eventKey="4">Separated link</MenuItem>
 *      </SplitButton>
 *    </ButtonToolbar>
 *
 *    <ButtonToolbar>
 *      <SplitButton bsSize="xsmall" title="Extra small button" id="dropdown-size-extra-small">
 *        <MenuItem eventKey="1">Action</MenuItem>
 *        <MenuItem eventKey="2">Another action</MenuItem>
 *        <MenuItem eventKey="3">Something else here</MenuItem>
 *        <MenuItem divider />
 *        <MenuItem eventKey="4">Separated link</MenuItem>
 *      </SplitButton>
 *    </ButtonToolbar>
 *  </div>
 * );
 *
 * ReactDOM.render(buttonsInstance, mountNode);
 *
 *
 * @example
 * //No caret variation
 * //Remove the caret using the `noCaret` prop:
 *
 * const buttonInstance = (
 *  <ButtonToolbar>
 *    <SplitButton bsStyle="default" title="No caret" noCaret id="dropdown-no-caret">
 *      <MenuItem eventKey="1">Action</MenuItem>
 *      <MenuItem eventKey="2">Another action</MenuItem>
 *      <MenuItem eventKey="3">Something else here</MenuItem>
 *      <MenuItem divider />
 *      <MenuItem eventKey="4">Separated link</MenuItem>
 *    </SplitButton>
 *  </ButtonToolbar>
 * );
 *
 * ReactDOM.render(buttonInstance, mountNode);
 *
 * @example
 * //Dropup variation
 * //Trigger dropdown menus that site above the button by adding the `dropup` prop.
 *
 *   <div>
 *    <ButtonToolbar>
 *      <SplitButton title="Dropup" dropup id="split-button-dropup">
 *        <MenuItem eventKey="1">Action</MenuItem>
 *        <MenuItem eventKey="2">Another action</MenuItem>
 *        <MenuItem eventKey="3">Something else here</MenuItem>
 *        <MenuItem divider />
 *        <MenuItem eventKey="4">Separated link</MenuItem>
 *      </SplitButton>
 *    </ButtonToolbar>
 *
 *    <ButtonToolbar>
 *      <SplitButton bsStyle="primary" title="Right dropup" dropup pullRight id="split-button-dropup-pull-right">
 *        <MenuItem eventKey="1">Action</MenuItem>
 *        <MenuItem eventKey="2">Another action</MenuItem>
 *        <MenuItem eventKey="3">Something else here</MenuItem>
 *        <MenuItem divider />
 *        <MenuItem eventKey="4">Separated link</MenuItem>
 *      </SplitButton>
 *    </ButtonToolbar>
 *  </div>
 * );
 *
 * ReactDOM.render(buttonsInstance, mountNode);
 *
 *
 * @example
 * //Dropdown right variation
 * //Trigger dropdown menus that align to the right of the button using the `pullRight` prop.
 *
 * const buttonsInstance = (
 *  <SplitButton title="Dropdown right" pullRight id="split-button-pull-right">
 *    <MenuItem eventKey="1">Action</MenuItem>
 *    <MenuItem eventKey="2">Another action</MenuItem>
 *    <MenuItem eventKey="3">Something else here</MenuItem>
 *    <MenuItem divider />
 *    <MenuItem eventKey="4">Separated link</MenuItem>
 *  </SplitButton>
 * );
 *
 * ReactDOM.render(buttonsInstance, mountNode);
 *
 *
 * @property {string} bsSize - Component size variations.
 * @property {string} bsStyle - Component visual or contextual style variants.
 * @property {elementType} componentClass - You can use a custom element type for this component. Default is `ButtonGroup`.
 * @property {PropTypes.bool} defaultOpen
 * @property {PropTypes.bool} disabled - Whether or not component is disabled.
 * @property {string} href
 * @property {PropTypes.bool} dropup - The menu will open above the dropdown button, instead of below it.
 * @property {string|number} id - An html id attribute, necessary for assistive technologies, such as screen readers. Required.
 * @property {PropTypes.func} onClick
 * @property {PropTypes.func} onSelect - A callback fired when a menu item is selected.
 * (eventKey: any, event: Object) => any
 *
 * @property {PropTypes.func} onToggle - A callback fired when the Dropdown wishes to change visibility. Called with the requested `open` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
 * Controls `open`.
 *
 * function(Boolean isOpen, Object event, { String source }) {}
 *
 * @property {PropTypes.bool} open - Whether or not the Dropdown is visible. Controlled by `onToggle`. Initial prop is `defaultOpen`.
 * @property {PropTypes.bool} pullRight - Align the menu to the right side of the Dropdown toggle.
 * @property {string} role - If `'menuitem'`, causes the dropdown to behave like a menu item rather than a menu button.
 * @property {click|mousedown} rootCloseEvent - Which event when fired outside the component will cause it to be closed
 * @property {node} title - Required.
 * @property {node} toggleLabel - Accessible label for the toggle; the value of `title` if not specified.
 */
class SplitButton extends React.Component {
  render() {
    const {
      bsSize, bsStyle, title, toggleLabel, children, ...props
    } = this.props;

    const [dropdownProps, buttonProps] =
      splitComponentProps(props, Dropdown.ControlledComponent);

    return (
      <Dropdown
        {...dropdownProps}
        bsSize={bsSize}
        bsStyle={bsStyle}
      >
        <Button
          {...buttonProps}
          disabled={props.disabled}
          bsSize={bsSize}
          bsStyle={bsStyle}
        >
          {title}
        </Button>
        <SplitToggle
          aria-label={toggleLabel || title}
          bsSize={bsSize}
          bsStyle={bsStyle}
        />

        <Dropdown.Menu>
          {children}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

SplitButton.propTypes = propTypes;

SplitButton.Toggle = SplitToggle;

export default SplitButton;
