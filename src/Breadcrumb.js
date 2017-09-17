import classNames from 'classnames';
import React from 'react';

import BreadcrumbItem from './BreadcrumbItem';
import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';
/**
 * @description
 * Breadcrumbs are used to indicate the current page's location.
 * Add `active` attribute to active `Breadcrumb.Item`.
 * Do not set both `active` and `href` attributes. `active` overrides `href` and `span` element is rendered instead of `a`.
 *
 * @example
 * const breadcrumbInstance = (
 *  <Breadcrumb>
 *    <Breadcrumb.Item href="#">
 *      Home
 *    </Breadcrumb.Item>
 *    <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
 *      Library
 *    </Breadcrumb.Item>
 *    <Breadcrumb.Item active>
 *      Data
 *    </Breadcrumb.Item>
 *  </Breadcrumb>
 * );
 *
 * ReactDOM.render(breadcrumbInstance, mountNode);
 */
class Breadcrumb extends React.Component {
  render() {
    const { className, ...props } = this.props;
    const [bsProps, elementProps] = splitBsProps(props);

    const classes = getClassSet(bsProps);

    return (
      <ol
        {...elementProps}
        role="navigation"
        aria-label="breadcrumbs"
        className={classNames(className, classes)}
      />
    );
  }
}

Breadcrumb.Item = BreadcrumbItem;

export default bsClass('breadcrumb', Breadcrumb);
