//init();

function initTime() {
    $('#cartime').empty();
    console.log($('#getdown').val());
    var dest = ''
    if ($('#getdown').val() == 'นครศรีธรรมราช') {
        dest = 'nakorn'
    }
    if ($('#getdown').val() == 'สุราษฎ์ธานี') {
        dest = 'surat'
    }

    
    var docRef = db.collection("time").doc(dest);

    docRef.get().then(function (doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            var rounds = doc.data().rounds;
            console.log(rounds);
            var html = '';
            for (var p = 0; p < rounds.length; p++) {
                html += '<option value="' + rounds[p] + '">' + rounds[p].time + rounds[p].carno + rounds[p].passenger + '</option>'
            }
            console.log(html);
            $('#cartime').html(html);
        } else {
            
        }

    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}


