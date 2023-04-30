var firebaseConfig = {
    apiKey: "AIzaSyD7H4uTxcn2x9zKwFCku97a7Q6MafBH-H8",
    authDomain: "acustom-e0375.firebaseapp.com",
    databaseURL: "https://acustom-e0375-default-rtdb.firebaseio.com",
    projectId: "acustom-e0375",
    storageBucket: "acustom-e0375.appspot.com",
    messagingSenderId: "457258300853",
    appId: "1:457258300853:web:d66a877ed8564ca6df55fc",
    measurementId: "G-EL9DRB9HHG"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig)
  //Initialize variables
    const auth = firebase.auth()
    const database = firebase.database()

  //Set up our registration function
function registerUser() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value
    const fullname = document.getElementById("fullname").value
    const businessname = document.getElementById("businessname").value
    const businesstype = document.getElementById("businesstype").value
    const businessrole = document.getElementById("businessrole").value
    const location = document.getElementById("location").value

    if (validateEmail(email) == false || validatePassword(password) == false) {
        alert("Email/password is incorrect! Please enter a valid email and password.");
          return }
        //Don't contiue running the code
    if(validateFields(
        email, 
        password, 
        confirmPassword, 
        fullname, 
        businessname, 
        businesstype, 
        businessrole, 
        location) == false) {
            alert("One or more fields are incorrect. Please re-enter your user profile information.")
        }
}//end of validateEmail and validatePassword and validateFields functions

//Continue authorization
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
        //Declare user variable
        var user = auth.currentUser
        
        //Add user to Firebase database
        var databaseRef = database.ref()

        //Create user data
        var userData = {
            email: email,
            fullname: fullname,
            businessname: businessname,
            businessrole: businessrole,
            businesstype: businesstype,
            location: location,
            lastLogin: Date.now()
        }

        databaseRef.chld('users/' + user.uid).set(userData)

        alert('User created!')
    })
    .catch(function(error) {
        var errorCode = error.code
        var errorMessage = error.message
        alert(errorMessage)
    })
    
//Validate email address formatting
function validateEmail(email) {
    expression = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    if (email.value==="") {
        return false
    }
    else if (expression.test(email) == true) {
        //Correct email format
        return true
    } else {
        //Incorrect email format
        return false
    }
} //end validateEmail(email) function

//Validate password format
function validatePassword(password) {
    if (password.length < 6) {
        return false
    } else {
        return true
    }
} // end of validatePassword(password) function

//Validate fields
function validateFields() {
    if (field.value == null) {
        return false
    } if (field.value <= 0) {
        return false
    } else {
        return true
    }
} //end of validateFields() function

