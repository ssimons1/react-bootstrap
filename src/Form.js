import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'prop-types-extra/lib/elementType';

import { bsClass, prefix, splitBsProps } from './utils/bootstrapUtils';

const propTypes = {
  horizontal: PropTypes.bool,
  inline: PropTypes.bool,
  componentClass: elementType,
};

const defaultProps = {
  horizontal: false,
  inline: false,
  componentClass: 'form',
};
/**
 * @description
 * Represents a form layout.
 *
 * @example
 * //Inline forms
 * //Use `<Form inline>` instead of `<form>`. JSX strips whitespace between lines, so you will need to manually add spaces. Additionally, Bootstrap assigns inline form controls `width: auto` by default, so you may need to set custom widths.
 *  const formInstance = (
 *  <Form inline>
 *    <FormGroup controlId="formInlineName">
 *      <ControlLabel>Name</ControlLabel>
 *      {' '}
 *      <FormControl type="text" placeholder="Jane Doe" />
 *    </FormGroup>
 *    {' '}
 *    <FormGroup controlId="formInlineEmail">
 *      <ControlLabel>Email</ControlLabel>
 *      {' '}
 *      <FormControl type="email" placeholder="jane.doe@examples.com" />
 *    </FormGroup>
 *    {' '}
 *    <Button type="submit">
 *      Send invitation
 *    </Button>
 *  </Form>
 * );
 * ReactDOM.render(formInstance, mountNode);
 *
 * @example
 * //Horizontal forms
 * //Use `<Form horizontal>` instead of `<form>`, then use [`<Col>`](https://bitsrc.io/react-bootstrap/components/grid/col)s to align labels and controls. Do not use [`<Row>`](https://bitsrc.io/react-bootstrap/components/grid/row) here, as [`<FormGroup>`](https://bitsrc.io/react-bootstrap/components/forms/form-group) will already serve as a grid row in a horizontal form.
 *  const formInstance = (
 *  <Form horizontal>
 *    <FormGroup controlId="formHorizontalEmail">
 *      <Col componentClass={ControlLabel} sm={2}>
 *        Email
 *      </Col>
 *      <Col sm={10}>
 *        <FormControl type="email" placeholder="Email" />
 *      </Col>
 *    </FormGroup>
 *
 *    <FormGroup controlId="formHorizontalPassword">
 *      <Col componentClass={ControlLabel} sm={2}>
 *        Password
 *      </Col>
 *      <Col sm={10}>
 *        <FormControl type="password" placeholder="Password" />
 *      </Col>
 *    </FormGroup>
 *
 *    <FormGroup>
 *      <Col smOffset={2} sm={10}>
 *        <Checkbox>Remember me</Checkbox>
 *      </Col>
 *    </FormGroup>
 *
 *    <FormGroup>
 *      <Col smOffset={2} sm={10}>
 *        <Button type="submit">
 *          Sign in
 *        </Button>
 *      </Col>
 *    </FormGroup>
 *  </Form>
 * );
 *
 * ReactDOM.render(formInstance, mountNode);
 *
 * @property {string} bsClass - Base CSS class and prefix for the component. Generally one should only change `bsClass` to provide new, non-Bootstrap, CSS styles for a component. Default is `form`.
 * @property {elementType} componentClass - You can use a custom element type for this component. Default is `form`.
 * @property {PropTypes.bool} horizontal
 * @property {PropTypes.bool} inline
 */
class Form extends React.Component {
  render() {
    const {
      horizontal,
      inline,
      componentClass: Component,
      className,
      ...props
    } = this.props;

    const [bsProps, elementProps] = splitBsProps(props);

    const classes = [];
    if (horizontal) {
      classes.push(prefix(bsProps, 'horizontal'));
    }
    if (inline) {
      classes.push(prefix(bsProps, 'inline'));
    }

    return (
      <Component
        {...elementProps}
        className={classNames(className, classes)}
      />
    );
  }
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default bsClass('form', Form);
