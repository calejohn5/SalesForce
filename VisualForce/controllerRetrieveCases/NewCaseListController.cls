/* 
here I created a controller that retrieves a list of cases with the status of new
*/
public class NewCaseListController {
// use return type List<Case>
	public List<Case> getNewCases() {
// store our query in results and return them, moving them to our page
        List<Case> results = Database.query(
        	'SELECT Id, CaseNumber ' +
        	'FROM Case ' +
            'WHERE Status=\'New\''               
        );
        return results;
    }
}