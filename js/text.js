//Retrieves all Element by Id
var myInput = document.getElementById("new-Map");
var addButton = document.getElementsByTagName("button")[0];
var myMapInbox = document.getElementById("myMap-Inbox");
var myMapBox = document.getElementById("myMap-Box");
var addTaskErr = document.getElementById('addTaskError');
//________________________________________________________ 


/** Creates new Function with different button and input
 * and we will call it function by clicking the Add button so that
 see Adding the User Value to the New UL Box */


  //New ul List Article Function and adds a parameter
var createNewInboxElement = function(Berra){
  //Creates Li Article
var listItem = document.createElement("li");
  //label 
var label = document.createElement("label");
  //input (text)
var editInput = document.createElement("input"); 
  //button.edit
var editButton = document.createElement("button");
  //button.delete
var deleteButton = document.createElement("button");
  //checkBtn Adds the user's value to the last Box
var checkBtn = document.createElement('button');


  // Each element in our UL List by clicking the button needs to be changed
  editInput.type = "text";
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  checkBtn.innerText ='Todo';
  checkBtn.className ='todo';
  label.innerText= Berra;

    // Each element must be added to our Li so Li will take care of all the elements
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  listItem.appendChild(checkBtn);

   // We have added all our newly created elements to Li then we call their PARENT which is Li

  return listItem; 
};
// Im testet the program so that everything works well
console.log(createNewInboxElement()); 



 // Creates Function to Add Add button
function addMap(){
  //Uses If set == >> The user should not be able to create empty jobs in the list
  // By Creating a new list object we can add the user's value to the new List with text from # new-task and the Add button.
  if(myInput.value === "") {            
  addTaskErr.style.display = "";
  } else {
    addTaskErr.style.display = 'none';
    // Add list to myMapInbox
    var listItem = createNewInboxElement(myInput.value);
    myMapInbox.appendChild(listItem);
    // We Attach everything to each other through (bindInboxEvents) Function
    bindInboxEvents(listItem, finishedBox);
    //Input will be empty after
    myInput.value = "";
  }
};

// Create Functoin for our newly created Change Button
var editMyMap = function() {
  //Using this we just change the same Input
var listItem = this.parentNode;
 //Retrieves our new slaped Input and Declares to New Variable so to change it 
var editInput = listItem.querySelector("input[type=text]")
var label = listItem.querySelector("label");
  
 //Creates New variable (listItem.classList.contains) classList.contains == >> HTML
var containsClass = listItem.classList.contains("edit-MyMap");
    //By using if statement we only change the selected value and we do not add a new value
  if(containsClass) {
      //Goes through edtitMap
      //If we change the Value Then Our label inner Text becomes the changed value
    label.innerText = editInput.value;
  } else {
      //If we do not change the Value Then Our Input will be the Same value as we had in label inner Text
    editInput.value = label.innerText;
  };
  
    // Toggle .editMap that changes Style == >> CSS
  listItem.classList.toggle("edit-MyMap");
 
};

// Create Function for our newly created TaBort button
var deleteMyMap = function() {
   //Using this we Delete only the same Input
    var listItem = this.parentNode;
    //we do not delete the value so that we delete the entire Ul in the row
    var ul = listItem.parentNode;
    
    //Remove the parent list from ul
    ul.removeChild(listItem);
  }
  
  //Create Function for our CheckButton which adds all the value From last Folder to myMapBox
  //BUT we will not have this button in our last Folder
  var finishedBox = function(){
    //We just add the selected value to the last folder using this.parentNodes
  var listItem = this.parentNode;
    //We Remove CheckButton from Last Folder
    listItem.removeChild(listItem.childNodes[4]);  
    //We reattach our folder
    myMapBox.appendChild(listItem);
    bindInboxEvents(listItem, finishedInBox);
  };
  
  // Create Function for our CheckButton which adds all the value to the last Folder
  var finishedInBox = function() {
    //We just add the selected value to the last folder using this.parentNodes 
    var listItem = this.parentNode;
    //We reattach our folder again
    myMapInbox.appendChild(listItem);
    bindInboxEvents(listItem, finishedBox);
  };
  
  //Creates Bind Function that attaches all Folders to each other By calling it Functoin in Different Functions
  var bindInboxEvents = function(myMapListItem) {

    //Tests the Function so that everything works well
    console.log("Bind list item events");

    //We Choose Which canapes will be children for this function
  var checkBtn = myMapListItem.querySelector("button.todo");
  var editButton = myMapListItem.querySelector("button.edit");
  var deleteButton = myMapListItem.querySelector("button.delete");
    
    //calls the editMyMap Function When We Click the Change Button
    editButton.onclick = editMyMap;
    
   //calls the deleteMyMap Function When We Click the Delete Button
    deleteButton.onclick = deleteMyMap;
    
    //calls the finishedInBox Function When We Click the Add Button
    checkBtn.onclick = finishedInBox;
    checkBtn.onclick = finishedBox;
    
  };
  
  //AJAX - Send a request to the Add Button in Up
  var ajaxRequest = function(){};
  //Sends request to Add
  addButton.addEventListener("click", addMap);
  addButton.addEventListener("click", ajaxRequest);
