import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button';

const propTypes = {
  /**
   * @property {checkbox|radio} type - The `<input>` `type`
   */
  type: PropTypes.oneOf(['checkbox', 'radio']),
  /**
   * @property {string} name - The HTML input name, used to group like checkboxes or radio buttons together
   * semantically
   */
  name: PropTypes.string,
  /**
   * @property {boolean} checked - The checked state of the input, managed by `<ToggleButtonGroup>`` automatically
   */
  checked: PropTypes.bool,
  /**
   * @property {function} onChange
   */
  disabled: PropTypes.bool,
  /**
   * @property {any} - (required) The value of the input, and unique identifier in the ToggleButtonGroup
   */
  onChange: PropTypes.func,
  /**
   * The value of the input, and unique identifier in the ToggleButtonGroup
   */
  value: PropTypes.any.isRequired,
};
/**
 * @description
 * For checkboxes or radio buttons styled as Buttons, you can can use the `ToggleButtonGroup` and `ToggleButton` components.
 * @example
 * //Checkbox example:
 * const toggleButtonGroup = (
 * <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]}>
 *   <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
 *   <ToggleButton value={2}>Checkbox 3</ToggleButton>
 *
 *   <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
 * </ToggleButtonGroup>
 * );
 *
 * ReactDOM.render(toggleButtonGroup, mountNode);
 *
 * @example
 * //Radio example:
 * const buttonGroupInstance = (
 * <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
 *   <ToggleButton value={1}>
 *     Radio 1 (pre-checked)
 *   </ToggleButton>
 *   <ToggleButton value={2}>Radio 3</ToggleButton>
 *
 *   <ToggleButton value={3}>Radio 3</ToggleButton>
 * </ToggleButtonGroup>
 * );
 *
 * ReactDOM.render(buttonGroupInstance, mountNode);
 */
class ToggleButton extends React.Component {
  render() {
    const {
      children, name, checked, type, onChange, value, ...props } = this.props;
    const disabled = props.disabled;

    return (
      <Button
        {...props}
        active={!!checked}
        componentClass="label"
      >
        <input
          name={name}
          type={type}
          autoComplete="off"
          value={value}
          checked={!!checked}
          disabled={!!disabled}
          onChange={onChange}
        />

        {children}
      </Button>
    );
  }
}

ToggleButton.propTypes = propTypes;

export default ToggleButton;
