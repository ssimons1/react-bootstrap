import classNames from 'classnames';
import React from 'react';

import InputGroupAddon from './InputGroupAddon';
import InputGroupButton from './InputGroupButton';
import { bsClass, bsSizes, getClassSet, splitBsProps }
  from './utils/bootstrapUtils';
import { Size } from './utils/StyleConfig';
/**
 * @description
 * <InputGroup>` is a wrapper around form controls that allows to use add-ons, such as `<InputGroup.Addon>` and `<InputGroup.Button>`.
 * Exotic configurations may require CSS on your side.
 *
 * Input sizes
 * Use bsSize on `<InputGroup>` to change the size of inputs. It also works with add-ons and most other options.
 *
 * props:
 * * `{string} bsClass` - Base CSS class and prefix for the component. Generally one should only change `bsClass` to provide new, non-Bootstrap, CSS styles for a component. Default is `input-group`.
 * * `{'lg'|'large'|'sm'|'small'} bsSize` - Component size variations.
 *
 * @example
 * const formInstance = (
 *  <form>
 *    <FormGroup>
 *      <InputGroup>
 *        <InputGroup.Addon>@</InputGroup.Addon>
 *        <FormControl type="text" />
 *      </InputGroup>
 *    </FormGroup>
 *    <FormGroup>
 *      <InputGroup>
 *        <FormControl type="text" />
 *        <InputGroup.Addon>.00</InputGroup.Addon>
 *      </InputGroup>
 *    </FormGroup>
 *    <FormGroup>
 *      <InputGroup>
 *        <InputGroup.Addon>$</InputGroup.Addon>
 *        <FormControl type="text" />
 *        <InputGroup.Addon>.00</InputGroup.Addon>
 *      </InputGroup>
 *    </FormGroup>
 *
 *    <FormGroup>
 *      <InputGroup>
 *        <FormControl type="text" />
 *        <InputGroup.Addon>
 *          <Glyphicon glyph="music" />
 *        </InputGroup.Addon>
 *      </InputGroup>
 *    </FormGroup>
 *
 *    <FormGroup>
 *      <InputGroup>
 *        <InputGroup.Button>
 *          <Button>Before</Button>
 *        </InputGroup.Button>
 *        <FormControl type="text" />
 *      </InputGroup>
 *    </FormGroup>
 *    <FormGroup>
 *      <InputGroup>
 *        <FormControl type="text" />
 *        <DropdownButton
 *          componentClass={InputGroup.Button}
 *          id="input-dropdown-addon"
 *          title="Action"
 *        >
 *          <MenuItem key="1">Item</MenuItem>
 *        </DropdownButton>
 *      </InputGroup>
 *    </FormGroup>
 *
 *    <FormGroup>
 *      <InputGroup>
 *        <InputGroup.Addon>
 *          <input type="radio" aria-label="..." />
 *        </InputGroup.Addon>
 *        <FormControl type="text" />
 *      </InputGroup>
 *    </FormGroup>
 *    <FormGroup>
 *      <InputGroup>
 *        <InputGroup.Addon>
 *          <input type="checkbox" aria-label="..." />
 *        </InputGroup.Addon>
 *        <FormControl type="text" />
 *      </InputGroup>
 *    </FormGroup>
 *  </form>
 * );
 *
 * ReactDOM.render(formInstance, mountNode);
 *
 */
class InputGroup extends React.Component {
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

InputGroup.Addon = InputGroupAddon;
InputGroup.Button = InputGroupButton;

export default bsClass('input-group',
  bsSizes([Size.LARGE, Size.SMALL], InputGroup)
);
