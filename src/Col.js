import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';

import { bsClass, prefix, splitBsProps } from './utils/bootstrapUtils';
import { DEVICE_SIZES } from './utils/StyleConfig';

const propTypes = {
  componentClass: elementType,

  /*
   * The number of columns you wish to span
   *
   * for Extra small devices Phones (<768px)
   *
   * class-prefix `col-xs-`
   */
  xs: PropTypes.number,
  /*
   * The number of columns you wish to span
   *
   * for Small devices Tablets (≥768px)
   *
   * class-prefix `col-sm-`
   */
  sm: PropTypes.number,
  /*
   * The number of columns you wish to span
   *
   * for Medium devices Desktops (≥992px)
   *
   * class-prefix `col-md-`
   */
  md: PropTypes.number,
  /*
   * The number of columns you wish to span
   *
   * for Large devices Desktops (≥1200px)
   *
   * class-prefix `col-lg-`
   */
  lg: PropTypes.number,
  /*
   * Hide column
   *
   * on Extra small devices Phones
   *
   * adds class `hidden-xs`
   */
  xsHidden: PropTypes.bool,
  /*
   * Hide column
   *
   * on Small devices Tablets
   *
   * adds class `hidden-sm`
   */
  smHidden: PropTypes.bool,
  /*
   * Hide column
   *
   * on Medium devices Desktops
   *
   * adds class `hidden-md`
   */
  mdHidden: PropTypes.bool,
  /*
   * Hide column
   *
   * on Large devices Desktops
   *
   * adds class `hidden-lg`
   */
  lgHidden: PropTypes.bool,
  /*
   * Move columns to the right
   *
   * for Extra small devices Phones
   *
   * class-prefix `col-xs-offset-`
   */
  xsOffset: PropTypes.number,
  /*
   * Move columns to the right
   *
   * for Small devices Tablets
   *
   * class-prefix `col-sm-offset-`
   */
  smOffset: PropTypes.number,
  /*
   * Move columns to the right
   *
   * for Medium devices Desktops
   *
   * class-prefix `col-md-offset-`
   */
  mdOffset: PropTypes.number,
  /*
   * Move columns to the right
   *
   * for Large devices Desktops
   *
   * class-prefix `col-lg-offset-`
   */
  lgOffset: PropTypes.number,
  /*
   * Change the order of grid columns to the right
   *
   * for Extra small devices Phones
   *
   * class-prefix `col-xs-push-`
   */
  xsPush: PropTypes.number,
  /*
   * Change the order of grid columns to the right
   *
   * for Small devices Tablets
   *
   * class-prefix `col-sm-push-`
   */
  smPush: PropTypes.number,
  /*
   * Change the order of grid columns to the right
   *
   * for Medium devices Desktops
   *
   * class-prefix `col-md-push-`
   */
  mdPush: PropTypes.number,
  /*
   * Change the order of grid columns to the right
   *
   * for Large devices Desktops
   *
   * class-prefix `col-lg-push-`
   */
  lgPush: PropTypes.number,
  /*
   * Change the order of grid columns to the left
   *
   * for Extra small devices Phones
   *
   * class-prefix `col-xs-pull-`
   */
  xsPull: PropTypes.number,
  /*
   * Change the order of grid columns to the left
   *
   * for Small devices Tablets
   *
   * class-prefix `col-sm-pull-`
   */
  smPull: PropTypes.number,
  /*
   * Change the order of grid columns to the left
   *
   * for Medium devices Desktops
   *
   * class-prefix `col-md-pull-`
   */
  mdPull: PropTypes.number,
  /*
   * Change the order of grid columns to the left
   *
   * for Large devices Desktops
   *
   * class-prefix `col-lg-pull-`
   */
  lgPull: PropTypes.number,
};

const defaultProps = {
  componentClass: 'div',
};
/**
 * @description
 * A React `<Grid>` column.
 * For more info about `<Grid>` and the usage of rows and columns, see [here](https://bitsrc.io/react-bootstrap/react-bootstrap/grid/grid).
 *
 * @property {string} bsClass - Base CSS class and prefix for the component. Generally one should only change `bsClass` to provide new, non-Bootstrap, CSS styles for a component. Default is `col`.
 * @property {elementType} componentClass - You can use a custom element type for this component. Default is `div`.
 * @property {number} lg - The number of columns you wish to span for Large devices Desktops (≥1200px). Class-prefix `col-lg-`.
 * @property {PropTypes.bool} lgHidden - Hide column on Large devices Desktops. Adds class `hidden-lg`.
 * @property {number} lgOffset - Move columns to the right for Large devices Desktops. Class-prefix `col-lg-offset-`.
 * @property {number} lgPull - Change the order of grid columns to the left for Large devices Desktops. Class-prefix `col-lg-pull-`.
 * @property {number} lgPush - Change the order of grid columns to the right for Large devices Desktops. class-prefix `col-lg-push-`.
 * @property {number} md - The number of columns you wish to span for Medium devices Desktops (≥1200px). Class-prefix `col-md-`.
 * @property {PropTypes.bool} mdHidden - Hide column on Medium devices Desktops. Adds class `hidden-md`.
 * @property {number} mdOffset - Move columns to the right for Medium devices Desktops. Class-prefix `col-md-offset-`.
 * @property {number} mdPull - Change the order of grid columns to the left for Medium devices Desktops. Class-prefix `col-md-pull-`.
 * @property {number} mdPush - Change the order of grid columns to the right for Medium devices Desktops. class-prefix `col-md-push-`.
 * @property {number} sm - The number of columns you wish to span for Small devices Desktops (≥1200px). Class-prefix `col-sm-`.
 * @property {PropTypes.bool} smHidden - Hide column on Small devices Desktops. Adds class `hidden-sm`.
 * @property {number} smOffset - Move columns to the right for Small devices Desktops. Class-prefix `col-sm-offset-`.
 * @property {number} smPull - Change the order of grid columns to the left for Small devices Desktops. Class-prefix `col-sm-pull-`.
 * @property {number} smPush - Change the order of grid columns to the right for Small devices Desktops. class-prefix `col-sm-push-`.
 * @property {number} xs - The number of columns you wish to span for Extra small devices Desktops (≥1200px). Class-prefix `col-xs-`.
 * @property {PropTypes.bool} xsHidden - Hide column on Extra small devices Desktops. Adds class `hidden-xs`.
 * @property {number} xsOffset - Move columns to the right for Extra small devices Desktops. Class-prefix `col-lg-offset-`.
 * @property {number} xsPull - Change the order of grid columns to the left for Extra small devices Desktops. Class-prefix `col-xs-pull-`.
 * @property {number} xsPush - Change the order of grid columns to the right for Extra small devices Desktops. class-prefix `col-xs-push-`.
 */
class Col extends React.Component {
  render() {
    const { componentClass: Component, className, ...props } = this.props;
    const [bsProps, elementProps] = splitBsProps(props);

    const classes = [];

    DEVICE_SIZES.forEach(size => {
      function popProp(propSuffix, modifier) {
        const propName = `${size}${propSuffix}`;
        const propValue = elementProps[propName];

        if (propValue != null) {
          classes.push(prefix(bsProps, `${size}${modifier}-${propValue}`));
        }

        delete elementProps[propName];
      }

      popProp('', '');
      popProp('Offset', '-offset');
      popProp('Push', '-push');
      popProp('Pull', '-pull');

      const hiddenPropName = `${size}Hidden`;
      if (elementProps[hiddenPropName]) {
        classes.push(`hidden-${size}`);
      }
      delete elementProps[hiddenPropName];
    });

    return (
      <Component
        {...elementProps}
        className={classNames(className, classes)}
      />
    );
  }
}

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default bsClass('col', Col);
