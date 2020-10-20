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
