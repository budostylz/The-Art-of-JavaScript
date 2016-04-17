/* jquery_ajax.js */

$(document).ready(function(){

    $("#zip").change(function(){
        $.getJSON("http://maps.googleapis.com/maps/api/geocode/json?address="+ this.value +"&sensor=false", function(data){
            $('#lat').val(data.results[0].geometry.location.lat);
            $('#lon').val(data.results[0].geometry.location.lng);
        });
    });


 /*
  *
    window.onload = function(){
        var lat = document.getElementById("lat");
        var lon = document.getElementById("lon");
        var zip = document.getElementById("zip");

        zip.addEventListener("change", getGeo);

        function getGeo(e){
            var x = new XMLHttpRequest();
            x.open("GET", "http://maps.googleapis.com/maps/api/geocode/json?address="+ this.value +"&sensor=false");
            //http://maps.googleapis.com/maps/api/geocode/json?address="+ POSTAL CODE +"&sensor=false
            x.send();

            x.addEventListener("readystatechange", function(){
                if(this.readyState == 4 && this.status == 200){
                    alert(this.response);
                    var j = JSON.parse(this.response);
                    var lt = j.results[0].geometry.location.lat;
                    var ln = j.results[0].geometry.location.lng;
                    lat.value = lt;
                    lon.value = ln;
                }

            });

        }
    }
*/
});