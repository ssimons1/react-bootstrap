import classNames from 'classnames';
import React from 'react';
import elementType from 'prop-types-extra/lib/elementType';

import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';

const propTypes = {
  componentClass: elementType,
};

const defaultProps = {
  componentClass: 'div',
};
/**
 * @description
 * A React `<Grid>` row.
 * For more info about `<Grid>` and the usage of rows and columns, see [here](https://bitsrc.io/react-bootstrap/components/grid/grid).
 *
 * @property {string} bsClass - Base CSS class and prefix for the component. Generally one should only change `bsClass` to provide new, non-Bootstrap, CSS styles for a component. Default is `row`.
 * @property {elementType} componentClass - You can use a custom element type for this component. Default is `div`.
 */
class Row extends React.Component {
  render() {
    const { componentClass: Component, className, ...props } = this.props;
    const [bsProps, elementProps] = splitBsProps(props);

    const classes = getClassSet(bsProps);

    return (
      <Component
        {...elementProps}
        className={classNames(className, classes)}
      />
    );
  }
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default bsClass('row', Row);
