// static, public or global
public with sharing class AccountController {
// @auraenabled allows us to work with components, DML operations not allowed when cached but we can use @wire to LWC
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
//        return [
//            SELECT Name, AnnualRevenue, Industry
//            FROM Account
//            WITH SECURITY_ENFORCED
//            ORDER BY Name
//        ];
throw new AuraHandledException('Forced error');
    }
}