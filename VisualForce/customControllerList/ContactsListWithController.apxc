/*
This is a custom controller similar to my retrieve cases one, but this has added functions to allow a user to filter ASC by either clicking first or last name
*/
public class ContactsListWithController {
// string used to sort the contacts 
    private String sortOrder = 'LastName';
// SOQL query to get list of contact records, and return to method caller
// greater method automatically connects to our page
	public List<Contact> getContacts() {
    	List<Contact> results = Database.query(
        	'SELECT Id, FirstName, LastName, Title, Email ' +
        	'FROM Contact ' +
        	'ORDER BY ' + sortOrder + ' ASC ' +
        	'LIMIT 10'
    	);
    	return results;
	}
    public void sortByLastName() {
    	this.sortOrder = 'LastName';
	}
	public void sortByFirstName() {
    	this.sortOrder = 'FirstName';
}
}