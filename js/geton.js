
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBW3NZStD3hyZ4we7MxnatN-t75eevUW4o",
    authDomain: "pkt-van-ticket.firebaseapp.com",
    databaseURL: "https://pkt-van-ticket.firebaseio.com",
    projectId: "pkt-van-ticket",
    storageBucket: "pkt-van-ticket.appspot.com",
    messagingSenderId: "689535443331"
};
firebase.initializeApp(config);
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

 
 
 init();

function init() {
    var docRef = db.collection("place").doc("geton");

    docRef.get().then(function (doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            var spots = doc.data().spots;
            console.log(spots);
            var html = '';
            for (var i = 0; i < spots.length; i++) {
                html += '<option value="' + spots[i] + '">' + spots[i] + '</option>'
            }
            console.log(html);
            $('#geton').html(html);
        } else {
            // doc.data() will be undefined in this ;
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}

