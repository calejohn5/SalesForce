trigger ClosedOpportunityTrigger on Opportunity (after insert, after update) {
// create list 
	List<Task> taskList = new List<Task>();
// itterate each sObject
    for (Opportunity o: Trigger.new){
// find all opportunities with closed/won status
        if(o.StageName=='Closed Won'){
// create task and give task a subject and Id. Then add it to taskList
            Task T = new Task();
            t.Subject='Follow Up Test Task';
            t.WhatId=o.Id;
            taskList.add(t);        
        }
    }
// check to see if taskList holds value, if so insert into the opportunity
    if(taskList.size() > 0){
        insert TaskList;
    }
}