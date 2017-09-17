import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';

import { bsClass, getClassSet, prefix, splitBsProps }
  from './utils/bootstrapUtils';

const propTypes = {
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  /*
   * Only valid if `inline` is not set.
   */
  validationState: PropTypes.oneOf([
    'success', 'warning', 'error', null,
  ]),

  inputRef: PropTypes.func,
};

const defaultProps = {
  inline: false,
  disabled: false,
  title: '',
};
  /**
   * @description
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   * @property {string} bsClass - Base CSS class and prefix for the component. Generally one should only change `bsClass` to provide new, non-Bootstrap, CSS styles for a component.
   * @property {PropTypes.bool} disabled - Default is `false`.
   * @property {PropTypes.bool} inline - Default is `false`.
   * @property {PropTypes.func} inputRef - Attaches a ref to the `<input>` element. Only functions can be used here.
   * @property {success|error|warning} validationState - Only valid if `inline` is not set.
   * @property {string} title - Default is an empty string.
   * @example
   * <Checkbox inputRef={ref => { this.input = ref; }} />
   */
class Checkbox extends React.Component {
  render() {
    const {
      inline,
      disabled,
      validationState,
      inputRef,
      className,
      style,
      title,
      children,
      ...props
    } = this.props;

    const [bsProps, elementProps] = splitBsProps(props);

    const input = (
      <input
        {...elementProps}
        ref={inputRef}
        type="checkbox"
        disabled={disabled}
      />
    );

    if (inline) {
      const classes = {
        [prefix(bsProps, 'inline')]: true,
        disabled,
      };

      // Use a warning here instead of in propTypes to get better-looking
      // generated documentation.
      warning(
        !validationState,
        '`validationState` is ignored on `<Checkbox inline>`. To display ' +
        'validation state on an inline checkbox, set `validationState` on a ' +
        'parent `<FormGroup>` or other element instead.'
      );

      return (
        <label className={classNames(className, classes)} style={style} title={title}>
          {input}
          {children}
        </label>
      );
    }

    const classes = {
      ...getClassSet(bsProps),
      disabled,
    };
    if (validationState) {
      classes[`has-${validationState}`] = true;
    }

    return (
      <div className={classNames(className, classes)} style={style}>
        <label title={title}>
          {input}
          {children}
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default bsClass('checkbox', Checkbox);
