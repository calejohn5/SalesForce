import { LightningElement } from 'lwc';
import { bikes } from '../detail/node_modules/c/data';

export default class List extends LightningElement {
    bikes = bikes;

    handleTileClick(evt) {
// This component wants to emit a productselected event to its parent
        const event = new CustomEvent('productselected', {
            detail: evt.detail
        });
// Fire the event from c-list (dispatching to selector)
        this.dispatchEvent(event);
    }
}
