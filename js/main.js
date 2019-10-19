function clickImageHome(i) {
    if (i > 2) { // i =? 3 or 4 or 5
        if (i == 3) { // i == 3
            window.location.href = 'https://www.hashtagvoyage.fr/faire-du-motoneige-en-laponie/'
        } else if (i == 4) { // i == 4
            window.location.href = 'https://www.hashtagvoyage.fr/chien-de-traineau-laponie/'
        } // i ==5
        else {
            window.location.href = 'https://www.wlaps.com/plus-belles-randonnees-en-laponie/'
        }
    } else { // i =? 1 or 2
        if (i == 1) { // i ==1
            window.location.href = 'https://www.visitfinland.com/fr/article/la-chasse-aux-aurores-boreales/'
        } else { // i == 2
            window.location.href = 'https://magazine.trivago.fr/hotel-de-glace-ice/'
        }
    }
}

function identityGeneration() {
    $.ajax({
        url: "https://randomuser.me/api/",
        type: "GET",
        async: false, // Mode synchrone
        dataType: 'json',
        success: function(a) {
            data = a;
        }
    });
    return data;
}

function process(data, userNumber) {
    document.getElementById('name' + userNumber).innerText = (data['results']['0']['name']['first'] + " " + data['results']['0']['name']['last']); // Get name
    document.getElementById('phoneNumber' + userNumber).innerText = "Phone number :" + data['results']['0']['cell']; // Get Phone number
    document.getElementById('mail' + userNumber).innerText = "Mail :" + data['results']['0']['email']; // Get email
    document.getElementById('city' + userNumber).innerText = "City :" + data['results']['0']['location']['city']; // Get city
    document.getElementById('country' + userNumber).innerText = "Country :" + data['results']['0']['location']['country']; // Get country
    document.getElementById('postcode' + userNumber).innerText = "Post code :" + data['results']['0']['location']['postcode']; // Get postcode
    $('#picture' + userNumber).attr('src', data['results']['0']['picture']['large']); // Get picture


}

for (var i = 1; i < 7; i++) {
    process(identityGeneration(), i);
}