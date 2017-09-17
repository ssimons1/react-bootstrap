import classNames from 'classnames';
import React from 'react';

import { bsClass, bsStyles, getClassSet, splitBsProps }
  from './utils/bootstrapUtils';
import { State, Style } from './utils/StyleConfig';
/**
 * @description
 * Create a `<Label>label</Label>` to highlight information.
 *
 * @example
 * const labelInstance = (
 *  <div>
 *    <h1>Label <Label>New</Label></h1>
 *    <h2>Label <Label>New</Label></h2>
 *    <h3>Label <Label>New</Label></h3>
 *    <h4>Label <Label>New</Label></h4>
 *    <h5>Label <Label>New</Label></h5>
 *    <p>Label <Label>New</Label></p>
 *  </div>
 * );
 *
 * ReactDOM.render(labelInstance, mountNode);
 *
 * @example
 * //Available variations
 * //Add any of the below mentioned modifier classes to change the appearance of a label.
 * const labelVariationInstance = (
 *  <div>
 *    <Label bsStyle="default">Default</Label>&nbsp;
 *    <Label bsStyle="primary">Primary</Label>&nbsp;
 *    <Label bsStyle="success">Success</Label>&nbsp;
 *    <Label bsStyle="info">Info</Label>&nbsp;
 *    <Label bsStyle="warning">Warning</Label>&nbsp;
 *    <Label bsStyle="danger">Danger</Label>
 *  </div>
 * );
 * ReactDOM.render(labelVariationInstance, mountNode);
 *
 * @property {string} bsClass - Base CSS class and prefix for the component. Generally one should only change `bsClass` to provide new, non-Bootstrap, CSS styles for a component. Default is `label`.
 * @property {success|warning|danger|info|default|primary} bsStyle - Component visual or contextual style variants.
 */
class Label extends React.Component {
  hasContent(children) {
    let result = false;

    React.Children.forEach(children, child => {
      if (result) {
        return;
      }

      if (child || child === 0) {
        result = true;
      }
    });

    return result;
  }

  render() {
    const { className, children, ...props } = this.props;
    const [bsProps, elementProps] = splitBsProps(props);

    const classes = {
      ...getClassSet(bsProps),

      // Hack for collapsing on IE8.
      hidden: !this.hasContent(children),
    };

    return (
      <span
        {...elementProps}
        className={classNames(className, classes)}
      >
        {children}
      </span>
    );
  }
}

export default bsClass('label',
  bsStyles(
    [...Object.values(State), Style.DEFAULT, Style.PRIMARY],
    Style.DEFAULT,
    Label
  )
);
