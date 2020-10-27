//create trigger on account before an insert or update
trigger AccountAddressTrigger on Account(before insert, before update){
//itterate for each account sObject using for and Trigger.new to collect new records
    for (Account a:Trigger.new) {
//check to see if our new checkbox is checked and make sure account has a Billing Postal Code
        if (a.Match_Billing_Address__c == True && a.BillingPostalCode != Null){
//once reqs are passed, update Shipping Postal Code to match the new insert/update
            a.ShippingPostalCode = a.BillingPostalCode;
        }
    }
}


/* RANDOM NOTES FOR MYSELF
    for (Account a:Trigger.new[0]) {             to access specific record with index 0
    a.Name = a.Name + ' Updated';                to test or change name of a record on update

    Account a = new Account(Name='Test Trigger');
    insert a;                                            to test by inserting a new record
*/