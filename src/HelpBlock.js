import classNames from 'classnames';
import React from 'react';

import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';
/**
 * @description
 * Displays help text if needed.
 * * `{string} bsClass` - Base CSS class and prefix for the component. Generally one should only change `bsClass` to provide new, non-Bootstrap, CSS styles for a component. Default is `help-block`.
 * @example
 *  <FormGroup controlId={id}>
 *     <ControlLabel>{label}</ControlLabel>
 *     <FormControl {...props} />
 *     {help && <HelpBlock>{help}</HelpBlock>}
 *   </FormGroup>
 */
class HelpBlock extends React.Component {
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

export default bsClass('help-block', HelpBlock);
