/**
 * @description
 * Splits component props between parent and child
 * @name splitComponentProps
 * @param {object} Component
 * @param {object} props
 * @returns {Array}
 */
export default function splitComponentProps(props, Component) {
  const componentPropTypes = Component.propTypes;

  const parentProps = {};
  const childProps = {};

  Object.entries(props).forEach(([propName, propValue]) => {
    if (componentPropTypes[propName]) {
      parentProps[propName] = propValue;
    } else {
      childProps[propName] = propValue;
    }
  });

  return [parentProps, childProps];
}
