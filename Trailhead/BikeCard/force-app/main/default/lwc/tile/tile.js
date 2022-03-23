import { LightningElement, api } from 'lwc';

export default class Tile extends LightningElement {
    @api product;
// field is clicked on html, calling this function then sent out
    tileClick() {
        const event = new CustomEvent('tileclick', {
// detail contains only primitives
            detail: this.product.fields.Id.value
        });
// Fire the event from c-tile
        this.dispatchEvent(event);
    }
}
