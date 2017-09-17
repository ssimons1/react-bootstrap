import classNames from 'classnames';
import React, { cloneElement } from 'react';
import elementType from 'prop-types-extra/lib/elementType';

import ListGroupItem from './ListGroupItem';
import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';
import ValidComponentChildren from './utils/ValidComponentChildren';

const propTypes = {
  /**
   * @property {elementType} componentClass - You can use a custom element type for this component.
   *
   * If not specified, it will be treated as `'li'` if every child is a
   * non-actionable `<ListGroupItem>`, and `'div'` otherwise.
   */
  componentClass: elementType,
};

function getDefaultComponent(children) {
  if (!children) {
    // FIXME: This is the old behavior. Is this right?
    return 'div';
  }

  if (ValidComponentChildren.some(children, child => (
    child.type !== ListGroupItem || child.props.href || child.props.onClick
  ))) {
    return 'div';
  }

  return 'ul';
}
/**
 * @description
 * List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.
 * @example
 * const listgroupInstance = (
 *  <ListGroup>
 *    <ListGroupItem>Item 1</ListGroupItem>
 *    <ListGroupItem>Item 2</ListGroupItem>
 *    <ListGroupItem>...</ListGroupItem>
 *  </ListGroup>
 * );
 *
 * ReactDOM.render(listgroupInstance, mountNode);
 */

 /**
  * @property {string} bsClass - Default: 'list-group'. Base CSS class and prefix for the component. Generally one should only change `bsClass` to provide new, non-Bootstrap, CSS styles for a component.
  */
class ListGroup extends React.Component {
  render() {
    const {
      children,
      componentClass: Component = getDefaultComponent(children),
      className,
      ...props
    } = this.props;

    const [bsProps, elementProps] = splitBsProps(props);

    const classes = getClassSet(bsProps);

    const useListItem =
      Component === 'ul' &&
      ValidComponentChildren.every(children, child => (
        child.type === ListGroupItem
      ));

    return (
      <Component
        {...elementProps}
        className={classNames(className, classes)}
      >
        {useListItem ?
          ValidComponentChildren.map(children, child => (
            cloneElement(child, { listItem: true })
          )) :
          children
        }
      </Component>
    );
  }
}

ListGroup.propTypes = propTypes;

export default bsClass('list-group', ListGroup);
