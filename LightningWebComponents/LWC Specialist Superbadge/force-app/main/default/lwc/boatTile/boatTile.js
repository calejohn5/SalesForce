// imports
import { LightningElement, api } from 'lwc';
export default class BoatTile extends LightningElement {
    @api boat;
    @api selectedBoatId;
    
    // Getter for dynamically setting the background image for the picture
    get backgroundStyle() { }
    
    // Getter for dynamically setting the tile class based on whether the
    // current boat is selected
    get tileClass() { }
    
    // Fires event with the Id of the boat that has been selected.
    selectBoat() { 
        const event = new CustomEvent('tileclick', {
            detail: this.selectedBoatId/// idk
        });
        this.dispatchEvent(event);
    }
  }