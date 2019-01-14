$(document).ready(function() {
$('#submit').click(function(e) {
// Initializing Variables With Form Element Values
var firstname = $('#firstname').val();
var lastname = $('#lastname').val();
var gender = $('#gender').val();
var birthdate = $('#birthdate').val();


// Initializing Variables With Regular Expressions
var name_regex = /^[a-zA-Z]+$/;

// To Check Empty Form Fields.

if( !$('#firstname').val() ) { 
$('#messages').html("<p>* Please fill the mandatory fields *</p>"); 
$("#firstname").focus();
return false;
}




else if (!firstname.match(name_regex) || firstname.length == 0) {
$('#messages').html("<p>* firstname contain alphabets only *</p>"); 
$("#firstname").focus();
return false;
}
else if (!lastname.match(name_regex) || lastname.length == 0) {
$('#messages').html("<p>* lastname contain alphabets only *</p>"); 
$("#lastname").focus();
return false;
}
else if ($('input[name=gender]:checked').length <= 0) {          
        
  
$('#messages').html("<p>* Please provide Gender *</p>"); 
$("#servicename").focus();
return false;
}
else 

if( !$('#birthdate').val() ) {     
    
$('#messages').html("<p>* Please provide birthdate *</p>"); 
$("#birthdate").focus();
return false;
}




else {

return true;
}
});
});