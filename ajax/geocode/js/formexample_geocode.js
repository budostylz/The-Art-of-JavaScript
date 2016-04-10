/* formexample.js */

    window.onload = function(){

        var lat = document.getElementById("lat");
        var lon = document.getElementById("lon");
        var zip = document.getElementById("zip");

        zip.addEventListener("change", getGeo);

        function getGeo(e){

            // make an send an XmlHttpRequest
            var x = new XMLHttpRequest();
            x.open("GET","http://maps.googleapis.com/maps/api/geocode/json?address="+this.value,true);
            x.send();

            // set up a listener for the response
            x.onreadystatechange=function(){
                if (this.readyState==4 && this.status==200){
                    //alert(this.response);
                    var o = this.response;
                    document.getElementById("output").innerHTML = o;
                    var l = JSON.parse(this.response).results[0].geometry.location;
                    if (l.lat) {
                        lat.value = l.lat;
                    }
                    if (l.lng) {
                        lon.value = l.lng;
                    }

                }
            }


        }

    }