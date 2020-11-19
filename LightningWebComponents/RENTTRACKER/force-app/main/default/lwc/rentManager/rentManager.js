import { LightningElement, track, wire } from 'lwc';
import getMonth from "@salesforce/apex/MonthData.getMonth";
import getRoommate from "@salesforce/apex/MonthData.getRoommate";

export default class RentManager extends LightningElement {
    @track selectedMonthTypeId = "";
    @track selectedRoommateTypeId = "";
    @track error = undefined;
    @track monthOptions;
    @track roommateOptions;

// fill ROOMMATE list with data
    @wire (getRoommate)
    roommate({ error, data }) {
    if (data) {
      this.roommateOptions = data.map(type => {
        return {
          label: type.Name,
          value: type.Id 
        };
      });
      this.roommateOptions.unshift({ label: 'Select a roommate', value: '' });
    } else if (error) {
      this.roommateOptions = undefined;
      this.error = error;
    }
  }

// fill MONTH list with data
    @wire (getMonth)
        month({ error, data }) {
        if (data) {
          this.monthOptions = data.map(type => {
            return {
              label: type.Name,
              value: type.Id 
            };
          });
          this.monthOptions.unshift({ label: 'Select a month', value: '' });
        } else if (error) {
          this.monthOptions = undefined;
          this.error = error;
        }
      }

    // roommate
    roommateOptionChange(event) {
      event.preventDefault();
      this.selectedRoommateTypeId = event.detail.value;
      const searchEvent = new CustomEvent('search', {
        detail: {
          roommateTypeId: this.selectedRoommateTypeId
        }
      })
      searchEvent;
      this.dispatchEvent(searchEvent);
    }

    // month
    monthOptionChange(event) {
        event.preventDefault();
        this.selectedMonthTypeId = event.detail.value;
        const searchEvent = new CustomEvent('search', {
          detail: {
            monthTypeId: this.selectedMonthTypeId
          }
        })
        searchEvent;
        this.dispatchEvent(searchEvent);
      }







      

      // button submit payed
//    payed() {
//        const fields = {};
//        fields[NAME_FIELD.fieldApiName] = this.name;
//        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
//        createRecord(recordInput)
//            .then(account => {
//                this.accountId = account.id;
//                this.dispatchEvent(
//                    new ShowToastEvent({
//                        title: 'Success',
//                        message: 'Account created',
//                        variant: 'success',
//                    }),
//                );
//            })
//            .catch(error => {
//                this.dispatchEvent(
//                    new ShowToastEvent({
//                        title: 'Error creating record',
//                        message: error.body.message,
//                        variant: 'error',
//                    }),
//                );
//            });
//    }    
}