function pickMessages(){
    var successMessage = aSuccessMessages[Math.floor(Math.random() * aSuccessMessages.length)];
    
    var failureMessage = aFailureMessages[Math.floor(Math.random() * aFailureMessages.length)];
    
    window.cpAPIInterface.setVariableValue("v_randomSuccess", successMessage);
    
    window.cpAPIInterface.setVariableValue("v_randomFailure", failureMessage);
}