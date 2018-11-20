
var s = 0;
var m  = 0;
var h = 0;
var clear;


var txt_heures = document.getElementById("txt_heures");
var txt_minutes = document.getElementById("txt_minutes");
var txt_secondes = document.getElementById("txt_secondes");

txt_heures.value = "0";
txt_minutes.value= "0";
txt_secondes.value= "0";

document.getElementById("heures").innerHTML = "0";
document.getElementById("minutes").innerHTML = "0";
document.getElementById("secondes").innerHTML = "0";



// bouton selection

document.getElementById("bouton_soumis").addEventListener("click", function () {

    h = txt_heures.value;
    m = txt_minutes.value;
    s = txt_secondes.value;

});


// lancement du decompte

 document.getElementById("play").addEventListener("click", function () {

     function decompte() {

         clearTimeout(clear);

    var heures = document.getElementById("heures").innerHTML = h;
    var minutes = document.getElementById("minutes").innerHTML = m;
    var secondes = document.getElementById("secondes").innerHTML = s;


    s--;
    secondes.innerHTML = s;

    if ( s == -1 && m != 0) {
        m--;
        s = 59;
        minutes.innerHTML = m
    }

    if ( m == 0 && h != 0 && s == -1) {
        h--;
        m = 59;
        s = 59;
        heures.innerHTML = h;
    }
    if ( h == 0 && m == 0 && s == -1 ) {
        h= 23;
        s = 59;
        m = 59;
        heures.innerHTML = 0;
    }


    clear = setTimeout(decompte,1000);
}
setTimeout(decompte,1000);

});

 // bouton Pause

document.getElementById("bouton_pause").addEventListener("click", function() {

    clearTimeout(clear);

});

// bouton reset

document.getElementById("bouton_reset").addEventListener("click", function () {

    document.getElementById("heures").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("secondes").innerHTML = "0";

   s = 0;
   m = 0;
   h = 0;

    clearTimeout(clear);
});
