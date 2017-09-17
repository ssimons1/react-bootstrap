import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-overlays/lib/Transition';

const propTypes = {
  /**
   * @property {PropTypes.bool} in
   * Show the component; triggers the fade in or fade out animation
   */
  in: PropTypes.bool,

  /**
   * @property {PropTypes.bool} mountOnEnter -
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter: PropTypes.bool,

  /**
   * @property {PropTypes.bool} unmountOnExit -
   * Unmount the component (remove it from the DOM) when it is faded out
   */
  unmountOnExit: PropTypes.bool,

  /**
   * @property {PropTypes.bool} transitionAppear -
   * Run the fade in animation when the component mounts, if it is initially
   * shown
   */
  transitionAppear: PropTypes.bool,

  /**
   * @property {number} timeout -
   * Duration of the fade animation in milliseconds, to ensure that finishing
   * callbacks are fired even if the original browser transition end events are
   * canceled
   */
  timeout: PropTypes.number,

  /**
   * @property {PropTypes.func} onEnter -
   * Callback fired before the component fades in
   */
  onEnter: PropTypes.func,
  /**
   * @property {PropTypes.func} onEntering -
   * Callback fired after the component starts to fade in
   */
  onEntering: PropTypes.func,
  /**
   * @property {PropTypes.func} onEntered -
   * Callback fired after the has component faded in
   */
  onEntered: PropTypes.func,
  /**
   * @property {PropTypes.func} onExit -
   * Callback fired before the component fades out
   */
  onExit: PropTypes.func,
  /**
   * @property {PropTypes.func} onExiting -
   * Callback fired after the component starts to fade out
   */
  onExiting: PropTypes.func,
  /**
   * @property {PropTypes.func} onExited -
   * Callback fired after the component has faded out
   */
  onExited: PropTypes.func,
};

const defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  transitionAppear: false,
};
/**
 * @description
 * Adds a fade animation to a child element or component.
 */
class Fade extends React.Component {
  render() {
    return (
      <Transition
        {...this.props}
        className={classNames(this.props.className, 'fade')}
        enteredClassName="in"
        enteringClassName="in"
      />
    );
  }
}

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;

export default Fade;
