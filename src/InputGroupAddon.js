import classNames from 'classnames';
import React from 'react';

import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';
/**
 * @description
 * Wrap your form control in an <InputGroup>, then use for normal add-ons and for button add-ons. Exotic configurations may require CSS on your side.
 * @property {string} bsClass - Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.
 */
class InputGroupAddon extends React.Component {
  render() {
    const { className, ...props } = this.props;
    const [bsProps, elementProps] = splitBsProps(props);

    const classes = getClassSet(bsProps);

    return (
      <span
        {...elementProps}
        className={classNames(className, classes)}
      />
    );
  }
}

export default bsClass('input-group-addon', InputGroupAddon);
