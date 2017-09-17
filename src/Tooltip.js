import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import isRequiredForA11y from 'prop-types-extra/lib/isRequiredForA11y';

import { bsClass, getClassSet, prefix, splitBsProps }
  from './utils/bootstrapUtils';

const propTypes = {
  /**
   * @property {string|number} id - (required) An html id attribute, necessary for accessibility
   */
  id: isRequiredForA11y(PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ])),
  /**
   * @property {top|right|bottom|left} placement - Default: 'right'. Sets the direction the Tooltip is positioned towards.
   */
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * @property {number|string} positionTop - The "top" position value for the Tooltip.
   */
  positionTop: PropTypes.oneOfType([
    PropTypes.number, PropTypes.string,
  ]),
  /**
   * @property {number|string} positionLeft - The "left" position value for the Tooltip.
   */
  positionLeft: PropTypes.oneOfType([
    PropTypes.number, PropTypes.string,
  ]),
   /**
   * @property {number|string} arrowOffsetTop - The "top" position value for the Tooltip arrow.
   */
  arrowOffsetTop: PropTypes.oneOfType([
    PropTypes.number, PropTypes.string,
  ]),
  /**
   * @property {number|string} arrowOffsetLeft - The "left" position value for the Tooltip arrow.
   */
  arrowOffsetLeft: PropTypes.oneOfType([
    PropTypes.number, PropTypes.string,
  ]),
};

const defaultProps = {
  placement: 'right',
};
/**
 * @description
 * Tooltip component for a more stylish alternative to that anchor tag `title` attribute.
 *
 * @example
 * //Basic example:
 * const tooltip = (
 *  <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
 * );
 *
 * const positionerInstance = (
 *  <ButtonToolbar>
 *    <OverlayTrigger placement="left" overlay={tooltip}>
 *      <Button bsStyle="default">Holy guacamole!</Button>
 *    </OverlayTrigger>
 *
 *    <OverlayTrigger placement="top" overlay={tooltip}>
 *      <Button bsStyle="default">Holy guacamole!</Button>
 *    </OverlayTrigger>
 *
 *    <OverlayTrigger placement="bottom" overlay={tooltip}>
 *      <Button bsStyle="default">Holy guacamole!</Button>
 *    </OverlayTrigger>
 *
 *    <OverlayTrigger placement="right" overlay={tooltip}>
 *      <Button bsStyle="default">Holy guacamole!</Button>
 *    </OverlayTrigger>
 *  </ButtonToolbar>
 * );
 *
 * ReactDOM.render(positionerInstance, mountNode);
 *
 * @example
 * //With OverlayTrigger:
 * Attach and position `tooltips` with OverlayTrigger.
 * const now = 60;
 *
 * const progressInstance = (
 *   <ProgressBar now={now} label={`${now}%`} />
 * );
 *
 * ReactDOM.render(progressInstance, mountNode);
 */

 /**
  * @property {string} bsClass - Default: 'tooltip' - Base CSS class and prefix for the component. Generally one should only change `bsClass` to provide new, non-Bootstrap, CSS styles for a component.
  */
class Tooltip extends React.Component {
  render() {
    const {
      placement,
      positionTop,
      positionLeft,
      arrowOffsetTop,
      arrowOffsetLeft,
      className,
      style,
      children,
      ...props
    } = this.props;

    const [bsProps, elementProps] = splitBsProps(props);

    const classes = {
      ...getClassSet(bsProps),
      [placement]: true,
    };

    const outerStyle = {
      top: positionTop,
      left: positionLeft,
      ...style,
    };

    const arrowStyle = {
      top: arrowOffsetTop,
      left: arrowOffsetLeft,
    };

    return (
      <div
        {...elementProps}
        role="tooltip"
        className={classNames(className, classes)}
        style={outerStyle}
      >
        <div className={prefix(bsProps, 'arrow')} style={arrowStyle} />

        <div className={prefix(bsProps, 'inner')}>
          {children}
        </div>
      </div>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default bsClass('tooltip', Tooltip);
