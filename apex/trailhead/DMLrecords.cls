// add a new record into accounts with DML
public class AccountHandler {
    // method to create new account through incoming string (accName)
        public static Account insertNewAccount(String accName){
    // create account sObject
            Account acct = new Account(Name=accName);
    // try catch block, insert record then return it
            try 
            {
                insert acct;
                return acct;
            }
    // catch empty string, return null
            catch(DmlException e)
            {
                return null;
            }
        }
    }