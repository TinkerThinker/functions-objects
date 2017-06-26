// this is only partially code, I call it, pseudo code, please note I'm hoping to do this with JS-native, 
// no Ajax, or Json, nor react, or another framework.  
<!DOCTYPE html>
<html>
// <html> tags have been mostly removed, but will be added to complete code, concern is primarily with JS - native.

<td input id= "UserNickName">;
<td input id= "Name">;
<td password id = "password">;
<button onCLICK="createNuuser">"Submit"</button>
<script>
function createNuuser();{
var unName = document.getElementById("UserNickName");
var pName = document.getElementById("Name");
var uPswrd = document.getElementById("password");

// for clarity: unName = UserNickname, pName = User's Proper Name, uPswrd = password
// example: unName = Mickey Mouse, pName = John Smith, password: John2017
// now using the getElemendById() function, I'm referencing the value that those ID's point to

var i = 0; 
// delcare the variable i, to be used as part of object generation, simply saying var i, does not bring in action or play

function userLogin = {
// create the initial object as a blue print for other objects, it is onto itself an object
// but is this is also a prototype???, and how does what I have hard "class" reference this object.

var userLoginid = {
this.uname = unName,
this.upname = pName,
this.upswd = uPswrd,
}
// so I should have an object created with 3 properties as follows 
// (brackets) used to denote what the label is >>> 
// userLoginid(object) = {uname:"unName"(property1), upname:"pName"(property2), upswd="uPswrd"(property3)}

var userLoginid + "++i" = new userLoginid;
// what I think I have made here is this userLoginid1 = {unname:"Mickey Mouse", upname:"John Smith", upswd:"John2017"}

var newLoginarry = [];
newLoginarray.push("userLoginid + "++i");
// this should create an array of objects all associated together
// Loginarray = [userLoginid1, userLoginid2, userLoginid3, ...]

// this is first part to module 1, **not included is storing it to cache/drive or server,
// nor I have created any checks and balancing functions
// checks & balancing function -> those function that compare the property values to that which is already existing, 
// so duplicates can not be made: example: Nickname = Mickey Mouse, another user tries to use, and error should return
// "Already used, try again". 
// nor has any function been made to compare inputed data with existing data, for validation dependency criteria
// only at the initial creation point. 


