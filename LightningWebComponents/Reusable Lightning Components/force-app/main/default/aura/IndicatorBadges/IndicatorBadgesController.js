({
    // doInit to make sure component has valid API name
    // then send call to the server and response handling to helper.js
      doInit : function(component, event, helper) {
        var recId = component.get("v.recordId");
        var sObj = component.get("v.sObjectName");
        if(sObj){
          helper.getLabelForRecord(component, sObj);
          helper.getBadgesForRecord(component, recId, sObj);
        }
      },
      //future code here
    })