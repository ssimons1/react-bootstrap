import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import SafeAnchor from './SafeAnchor';
import createChainedFunction from './utils/createChainedFunction';

const propTypes = {
  /**
   * @property {PropTypes.bool} disabled
   */
  disabled: PropTypes.bool,
  /**
   * @property {PropTypes.bool} previous
   */
  previous: PropTypes.bool,
  /**
   * @property {PropTypes.bool} next
   */
  next: PropTypes.bool,
  /**
   * @property {PropTypes.func} onClick
   */
  onClick: PropTypes.func,
  /**
   * @property {PropTypes.func} onSelect
   */
  onSelect: PropTypes.func,
  /**
   * @property {*} eventKey
   */
  eventKey: PropTypes.any,
};

const defaultProps = {
  disabled: false,
  previous: false,
  next: false,
};
/**
 * @description
 * Represents an item in a <Pager>.
 *
 * @example
 * //Aligned
 * //Set the `previous` or `next` prop to `true`, to align left or right.
 *
 * const pagerInstance = (
 *  <Pager>
 *    <Pager.Item previous href="#">&larr; Previous Page</Pager.Item>
 *    <Pager.Item next href="#">Next Page &rarr;</Pager.Item>
 *  </Pager>
 * );
 *
 * ReactDOM.render(pagerInstance, mountNode);
 *
 * @example
 * //Disabled
 * //Set the `disabled` prop to `true` to disable the link.
 *
 * const pagerInstance = (
 *  <Pager>
 *    <Pager.Item previous href="#">&larr; Previous</Pager.Item>
 *    <Pager.Item disabled next href="#">Next &rarr;</Pager.Item>
 *  </Pager>
 * );
 *
 * ReactDOM.render(pagerInstance, mountNode);
 */
class PagerItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    const { disabled, onSelect, eventKey } = this.props;

    if (onSelect || disabled) {
      e.preventDefault();
    }

    if (disabled) {
      return;
    }

    if (onSelect) {
      onSelect(eventKey, e);
    }
  }

  render() {
    const { disabled, previous, next, onClick, className, style, ...props } =
      this.props;

    delete props.onSelect;
    delete props.eventKey;

    return (
      <li
        className={classNames(className, { disabled, previous, next })}
        style={style}
      >
        <SafeAnchor
          {...props}
          disabled={disabled}
          onClick={createChainedFunction(onClick, this.handleSelect)}
        />
      </li>
    );
  }
}

PagerItem.propTypes = propTypes;
PagerItem.defaultProps = defaultProps;

export default PagerItem;
