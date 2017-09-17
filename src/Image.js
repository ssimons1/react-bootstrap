import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import { bsClass, prefix, splitBsProps } from './utils/bootstrapUtils';

const propTypes = {
  /**
   * @property {PropTypes.bool} responsive
   * Sets image as responsive image
   */
  responsive: PropTypes.bool,

  /**
   * @property {PropTypes.bool} rounded
   * Sets image shape as rounded
   */
  rounded: PropTypes.bool,

  /**
   * @property {PropTypes.bool} circle
   * Sets image shape as circle
   */
  circle: PropTypes.bool,

  /**
   * @property {PropTypes.bool} thumbnail
   * Sets image shape as thumbnail
   */
  thumbnail: PropTypes.bool,
};

const defaultProps = {
  responsive: false,
  rounded: false,
  circle: false,
  thumbnail: false,
};
/**
 * @description
 * An image React component.
 *
 * @example
 * //Shape
 * //Use the `rounded`, `circle` and `thumbnail` props to customise the image.
 * const imageShapeInstance = (
 *  <Grid>
 *    <Row>
 *      <Col xs={6} md={4}>
 *        <Image src="/assets/thumbnail.png" rounded />
 *      </Col>
 *      <Col xs={6} md={4}>
 *        <Image src="/assets/thumbnail.png" circle />
 *      </Col>
 *      <Col xs={6} md={4}>
 *        <Image src="/assets/thumbnail.png" thumbnail />
 *      </Col>
 *    </Row>
 *  </Grid>
 * );
 *
 * ReactDOM.render(imageShapeInstance, mountNode);
 *
 * @example
 * //Responsive
 * //Use the `responsive` to scale image nicely to the parent element.
 * const imageResponsiveInstance = (
 *  <Image src="/assets/thumbnail.png" responsive />
 * );
 *
 * ReactDOM.render(imageResponsiveInstance, mountNode);
 *
 * @property {string} bsClass - Base CSS class and prefix for the component. Generally one should only change `bsClass` to provide new, non-Bootstrap, CSS styles for a component. Default is `img`.
 */
class Image extends React.Component {
  render() {
    const { responsive, rounded, circle, thumbnail, className, ...props } =
      this.props;
    const [bsProps, elementProps] = splitBsProps(props);

    const classes = {
      [prefix(bsProps, 'responsive')]: responsive,
      [prefix(bsProps, 'rounded')]: rounded,
      [prefix(bsProps, 'circle')]: circle,
      [prefix(bsProps, 'thumbnail')]: thumbnail,
    };

    return (
      <img
        {...elementProps}
        className={classNames(className, classes)}
      />
    );
  }
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default bsClass('img', Image);
