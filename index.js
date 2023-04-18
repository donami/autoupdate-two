import { GridWidget } from '@telia-ace/knowledge-widget-types-grid';
import WidgetHeaderComponent from '@telia-ace/widget-components-widget-header';
import { bootstrap, Humany as Environment } from '@telia-ace/knowledge-widget-core';
import implementationConfig from './config.json';

const environment = (window.webprovisions = Environment.createFromGlobal(window.webprovisions));
const implementation = environment.createImplementation(implementationConfig);

console.log('hello from autoupdate-two');

bootstrap(implementation, async (config) => {
    config.types.register('@humany/grid-widget', GridWidget);
    config.plugin(WidgetHeaderComponent);

    const widget = implementation.widgets.get('my-widget');
    await widget.activate();
    widget.invoke('attach', {
        withRenderState: 'open',
    });
});
