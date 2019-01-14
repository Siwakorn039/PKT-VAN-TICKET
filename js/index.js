document.addEventListener('prechange', function (event) {
    document.querySelector('ons-toolbar .center')
        .innerHTML = event.tabItem.getAttribute('label');
});


function btnLogin() {
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            alert("Wrong Passworg");

        }
        else {
            alert(errorMessage);
        }



    });
}

function btnLogOut() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });

}

function handleSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('regispassword').value;
    var inputdisplayName = document.getElementById('name').value;
    var inputPhonenumber = document.getElementById('phoneNumber').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    // [END createwithemail]


    var user = firebase.auth().currentUser;
   
    user.updateProfile({
        displayName: inputdisplayName,
        phoneNumber: inputPhonenumber
    }).then(function () {
        // Update successful.
    }).catch(function (error) {
        // An error happened.
    });
}

function btnNext() {
 
    
    window.location.href = "booking.html";
}

