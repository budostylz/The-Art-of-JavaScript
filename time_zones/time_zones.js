var time_zones = function(){

    'use strict' 


    //get local time and current user offset
    var user_dtg = new Date();
    var user_hour = user_dtg.getHours();


    //set real word representation of UTC offset

    var utcOffset = function(userDtg){
        var userOffset =  userDtg.getTimezoneOffset() / 60;
    
        //reverse JavaScript representation of UTC offset
        if(userOffset < 0)
            return userOffset * -1;
        else
            return userOffset * -1;
         
        
    };

    var utc_offset =  utcOffset(user_dtg);



    var compute_utc = function(offset){
        
        var present = new Date();
        var present_hours = present.getHours();
    
        if( offset < 0 ){//shift time to the right
        
            offset *= -1;
            var utc_date = new Date(present.getFullYear(), present.getMonth(),present.getDate(),( present_hours + (offset) ), present.getMinutes(),
                        present.getSeconds());
                        return utc_date;
        }
        else{//shift time to the left
            var utc_date = new Date(present.getFullYear(), present.getMonth(),present.getDate(),( present_hours - (offset) ), present.getMinutes(),
                        present.getSeconds());
                        return utc_date;
        }

    };

    //get utc base on user offset
    var utc = compute_utc(utc_offset);
    
    
    //get wime zones based on
    var calculate_time_zones = function(utc_dtg){

        //set parameters
        var utc_year = utc_dtg.getFullYear();
        var utc_month = utc_dtg.getMonth();
        var utc_date = utc_dtg.getDate();
        var utc_hour = utc_dtg.getHours();
        var utc_minutes = utc_dtg.getMinutes();
        var utc_seconds = utc_dtg.getSeconds();

        var new_york_time =  new Date(utc_year,utc_month,utc_date,(utc_hour - 4),utc_minutes,utc_seconds);
        var london_time = new Date(utc_year,utc_month,utc_date,(utc_hour + 1),utc_minutes,utc_seconds);
        var berlin_time = new Date(utc_year,utc_month,utc_date,(utc_hour + 2),utc_minutes,utc_seconds);
        var dubai_time = new Date(utc_year,utc_month,utc_date,(utc_hour + 4),utc_minutes,utc_seconds);
        var tokyo_time = new Date(utc_year,utc_month,utc_date,(utc_hour + 9),utc_minutes,utc_seconds);
        var honolulu_time = new Date(utc_year,utc_month,utc_date,(utc_hour - 10),utc_minutes,utc_seconds);
        var la_time = new Date(utc_year,utc_month,utc_date,(utc_hour - 7),utc_minutes,utc_seconds);
        var denver_time = new Date(utc_year,utc_month,utc_date,(utc_hour - 6),utc_minutes,utc_seconds);
        var chicago_time = new Date(utc_year,utc_month,utc_date,(utc_hour - 5),utc_minutes,utc_seconds);

        
  
        alert('Testing Time Zones. Press Ok To Vanish Message.' + '\n' +
              'New York: ' + new_york_time + '\n' +
              'London: ' + london_time + '\n' +
              'Berlin: ' + berlin_time + '\n' +
              'Dubai: ' + dubai_time + '\n' +
              'Tokyo: ' + tokyo_time + '\n' +
              'Honolulu: ' + honolulu_time + '\n' +
              'Los Angeles:  ' + la_time  + '\n' +
              'Denver: ' + denver_time + '\n' +
              'Chicago: ' + chicago_time + '\n' 






        );

    };
   
        
    
    var get_time_zones = calculate_time_zones(utc);
        



};

window.onload = time_zones;



