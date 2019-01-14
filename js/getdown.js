
        init();

        function init() {

            var docRef = db.collection("placedown").doc("getdown");

            docRef.get().then(function (doc) {

                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    var spotsdown = doc.data().spotsdown;
                    console.log(spotsdown);
                    var html = '';
                    for (var j = 0; j < spotsdown.length; j++) {
                        html += '<option value="' + spotsdown[j] + '">' + spotsdown[j] + '</option>'
                    }
                    console.log(html);
                    $('#getdown').html(html);
                } else {
                    // doc.data() will be undefined in this ;
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });
        }

       