import React from 'react';

import PanelGroup from './PanelGroup';
/**
 * @description
 * `<Accordion />` aliases `<PanelGroup accordion />`.
 * For more info on `<PanelGroup>`, see [here](https://bitsrc.io/react-bootstrap/components/panels/panel-group).
 *
 * @example
 * const accordionInstance = (
 *  <Accordion>
 *    <Panel header="Collapsible Group Item #1" eventKey="1">
 *      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
 *    </Panel>
 *    <Panel header="Collapsible Group Item #2" eventKey="2">
 *      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
 *    </Panel>
 *    <Panel header="Collapsible Group Item #3" eventKey="3">
 *      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
 *    </Panel>
 *  </Accordion>
 * );
 *
 * ReactDOM.render(accordionInstance, mountNode);
 */
class Accordion extends React.Component {
  render() {
    return (
      <PanelGroup {...this.props} accordion>
        {this.props.children}
      </PanelGroup>
    );
  }
}

export default Accordion;
