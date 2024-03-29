function current_day(date){
    let current_date= new Date(date);
    var weekday = new Array("Sunday","Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday");
let current_day1 = weekday[current_date.getDay()];
return current_day1;

}
 function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      alert("not found");
    }
  }
  
  function showPosition(position) {
    let lati=position.coords.latitude;
    let longi=position.coords.longitude;
    const iconElement=document.querySelector(".icon");
    const Http = new XMLHttpRequest();
    const url='https:/api.openweathermap.org/data/2.5/weather?lat='+lati+'&lon='+longi+'&APPID=6cfb00bd8fc705d673be0522ef4efdfe';
             Http.open("GET", url,true);
            Http.send();
            Http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            let result =JSON.parse(Http.responseText);
            weatherIcon=result.weather[0].icon;
            iconElement.innerHTML=`<img src='icons/${weatherIcon}.png'/>`;
            document.getElementById("highest_temp").innerHTML=(result.main.temp_max-273.15).toPrecision(2) +"&degC";
            document.getElementById("lowest_temp").innerHTML=(result.main.temp_min-273.15).toPrecision(2)+ "&degC";
                }
            };
            const weeks_api = new XMLHttpRequest();
            const forecast_url='https:/api.openweathermap.org/data/2.5/forecast?lat='+lati+'&lon='+longi+'&APPID=6cfb00bd8fc705d673be0522ef4efdfe';
            weeks_api.open("GET", forecast_url,true);
            weeks_api.send();
            weeks_api.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            let result =JSON.parse(weeks_api.responseText);
            let api_date=result.list[0].dt_txt;
            let current_date= new Date(api_date);
            let just_date=current_date.getFullYear()+'-'+(current_date.getMonth()+1)+'-'+current_date.getDate();
            var day=current_day(api_date);
            document.getElementById("week_day").innerHTML = day;
            document.getElementById("city_name").innerHTML=result.city.name;
            let test=result.list.map(curr=> curr);
            let  filtered_days = test.filter(item => {
           let test=new Date(item.dt_txt);
           let date1 = test.getFullYear()+'-'+(test.getMonth()+1)+'-'+test.getDate();
           return date1!=just_date;      
           });
          //  filter
           let test_date1=new Date(filtered_days[0].dt_txt);
           let status=test_date1.toLocaleTimeString('it-IT');
            //status
            let date= new Date();
           const time = date.getHours();
            console.log(time);



if(time<12){
 document.getElementById("status").innerHTML="GOOD MORNING";
 document.getElementById("city_name_container").style.backgroundImage= "url('morning.jfif')";
 document.getElementById("city_name_container").style.backgroundSize='cover';

}
 else if (time>=12 || time<=17) {
  document.getElementById("status").innerHTML="GOOD AFTERNOON";
  document.getElementById("city_name_container").style.backgroundImage= "url('afternoon.jfif')";
  document.getElementById("city_name_container").style.backgroundSize='cover';
}
else  {
  document.getElementById("status").innerHTML="GOOD EVENING";
  document.getElementById("city_name_container").style.backgroundImage= "url('evning.jfif')";
  document.getElementById("city_name_container").style.backgroundSize='cover';
}

        var d1=current_day(test_date1);
        document.getElementById("day1").innerHTML = d1;
        let just_date1=test_date1.getFullYear()+'-'+(test_date1.getMonth()+1)+'-'+test_date1.getDate();
        let test_date2=new Date(filtered_days[8].dt_txt);
        var d2=current_day(test_date2);
        document.getElementById("day2").innerHTML = d2;
        let just_date2=test_date2.getFullYear()+'-'+(test_date2.getMonth()+1)+'-'+test_date2.getDate();
        
        let test_date3=new Date(filtered_days[16].dt_txt);
        var d3=current_day(test_date3);
        document.getElementById("day3").innerHTML = d3;
        let just_date3=test_date3.getFullYear()+'-'+(test_date3.getMonth()+1)+'-'+test_date3.getDate();
        let test_date4=new Date(filtered_days[24].dt_txt);
        var d4=current_day(test_date4);
        document.getElementById("day4").innerHTML = d4;
        let just_date4=test_date4.getFullYear()+'-'+(test_date4.getMonth()+1)+'-'+test_date4.getDate();
        let test_date5=new Date(filtered_days[filtered_days.length-1].dt_txt);
        var d5=current_day(test_date5);
        let just_date5=test_date5.getFullYear()+'-'+(test_date5.getMonth()+1)+'-'+test_date5.getDate();
        
        
    //date1
let day2= filtered_days.filter(item=>{
let day2_date=new Date(item.dt_txt);
let individual_date = day2_date.getFullYear()+'-'+(day2_date.getMonth()+1)+'-'+day2_date.getDate();
return individual_date==just_date1;
});
console.log("day2",day2);
let day3= filtered_days.filter(item=>{
    let day3_date=new Date(item.dt_txt);
    let individual_date = day3_date.getFullYear()+'-'+(day3_date.getMonth()+1)+'-'+day3_date.getDate();
    return individual_date==just_date2;
    });
    console.log("day3",day3);
    let day4= filtered_days.filter(item=>{
        let day4_date=new Date(item.dt_txt);
        let individual_date = day4_date.getFullYear()+'-'+(day4_date.getMonth()+1)+'-'+day4_date.getDate();
        return individual_date==just_date3;
        });
        console.log("day4",day4);
        let day5= filtered_days.filter(item=>{
            let day5_date=new Date(item.dt_txt);
            let individual_date = day5_date.getFullYear()+'-'+(day5_date.getMonth()+1)+'-'+day5_date.getDate();
            return individual_date==just_date4;
            });
            console.log("day5",day5);
            let day6= filtered_days.filter(item=>{
                let day6_date=new Date(item.dt_txt);
                let individual_date = day6_date.getFullYear()+'-'+(day6_date.getMonth()+1)+'-'+day6_date.getDate();
                return individual_date==just_date5;
                });
                console.log("day6",day6);

                display(day2,day3,day4,day5,day6);
          }              
 };
   }

   function avg_temp_max(data) {

    return  avg_max_temp = Math.max.apply(Math, data.map(function(value) { 
      return value.main.temp_max; 
    }));
    
     }
     function avg_temp_min(data)
      {
    
    return  avg_max_temp = Math.min.apply(Math, data.map(function(value) { 
      return value.main.temp_min;
     }));
    }


  function display(day2,day3,day4,day5,day6) {
    let icon2=day2[0].weather[0].icon;
    document.querySelector(".icon1").innerHTML=`<img src='icons/${icon2}.png'/>`;
    let icon3=day3[0].weather[0].icon;
   document.querySelector(".icon2").innerHTML=`<img src='icons/${icon3}.png'/>`;
   let icon4=day4[0].weather[0].icon;
   document.querySelector(".icon3").innerHTML=`<img src='icons/${icon4}.png'/>`;
   let icon5=day5[0].weather[0].icon;
   document.querySelector(".icon4").innerHTML=`<img src='icons/${icon5}.png'/>`;
   let icon6=day6[0].weather[0].icon;
    const max1=avg_temp_max(day2);
    const b1=max1-273;
   document.getElementById("max_temp_2").innerHTML=b1.toPrecision(2)+ "&degC";
   const min1=avg_temp_min(day2);
   const a_m_t1=min1-273;
   
  document.getElementById("min_temp_2").innerHTML= a_m_t1.toPrecision(3)+"&degC";
    const max2=avg_temp_max(day3);
    const b2=max2-273;
    document.getElementById("max_temp_3").innerHTML=b2.toPrecision(2)+"&degC";
    const min2=avg_temp_min(day3);
    const a_m_t2=min2-273;
   document.getElementById("min_temp_3").innerHTML= a_m_t2.toPrecision(3)+"&degC";
    const max3=avg_temp_max(day4);
    const b3=max3-273;
    document.getElementById("max_temp_4").innerHTML=b3.toPrecision(2) +"&degC";
    const min3=avg_temp_min(day4);
    const a_m_t3=min3-273;
   document.getElementById("min_temp_4").innerHTML= a_m_t3.toPrecision(3)+ "&degC";
    const max4=avg_temp_max(day5);
    const b4=max4-273;
    document.getElementById("max_temp_5").innerHTML=b4.toPrecision(2)+ "&degC";
    const min4=avg_temp_min(day5);
    const a_m_t4=min3-273;
   document.getElementById("min_temp_5").innerHTML= a_m_t4.toPrecision(2)+"&degC";

  }
  
