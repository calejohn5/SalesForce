//function that retrieves contacts with specified filters using SOQL
public class ContactSearch {
// initialize function with lastname and postalcode parameters
    public static List<Contact> searchForContacts(String last, String postal){
// declare our list var to search contacts using inline SOQL
        List<Contact>contactReturn = [SELECT ID, Name FROM CONTACT WHERE LastName =:last AND MailingPostalCode=:postal];
// return our list populated with ID and name fields
        return contactReturn;
    }
}
// test by pasting 
// System.debug(ContactSearch.searchForContacts('testName','testCode'));
// into the execute anonymous