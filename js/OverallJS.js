// Model : contain all the code that saves and mananges data

let weekdaylist = ["SUNDAY","MONDAY"," TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
let intervals_Morning = ["07:00 AM","07:30 AM","08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM"];
let intervals_Afternoon = ["12:00 PM","12:30 PM","01:00 PM","01:30 PM","02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM"]


let Userlist = [
{
  userID:"123456",  //6digital to 7 digital
  fname:"Leane",
  lname:"Mcdonal",
  moblePhone:"0412345678",
  Email: "test123@gmail.com",
  location:"Golfplace Inn",
  Venue:"Simulator One",
  Player:"4",
  date:"12/05/2022",
  Duration:"60 mins",
  StartTime:"7:30 AM",
  EndTime:"8:30 AM"
}
];


//View contains all the code that manages Visuals
function renderTheList()
{
    for(let initor = 0; initor<3; initor++)
    {
      let headthree = document.createElement("h3");
      headthree.innerHTML = weekdaylist[initor];
      if(initor==1)
      {
        headthree.style.background="rgba(130,130,130,0.3)";
      }
      document.getElementById("dynmaicCalendar").appendChild(headthree);

    }
    sub_renderTheMorning();
    sub_renderTheArvo();

}

function sub_renderTheMorning()
{
  for(let row_counter_two = 0; row_counter_two<intervals_Morning.length;row_counter_two++)
  {
    for(let row_create = 0; row_create<3; row_create++)
    {
      let bodydiv= document.createElement("div");
      bodydiv.innerHTML = intervals_Morning[row_counter_two];
      if(row_create==1)
      {
        bodydiv.style.background="rgba(130,130,130,0.3)";
        bodydiv.style.borderLeft ="1px ridge";
        bodydiv.style.borderRight ="1px ridge";
      }
      bodydiv.style.borderTop ="1px ridge";
      bodydiv.style.borderBottom ="1px ridge";
      bodydiv.style.cursor ="pointer";
      bodydiv.onclick = function(){showUp()};
      document.getElementById("dynmaicCalendar").appendChild(bodydiv);

    }

  }


}

function sub_renderTheArvo()
{
  for(let row_counter_two = 0; row_counter_two<intervals_Afternoon.length;row_counter_two++)
  {
    for(let row_create = 0; row_create<3; row_create++)
    {
      let bodydiv= document.createElement("div");
      bodydiv.innerHTML = intervals_Afternoon[row_counter_two];
      if(row_create==1)
      {
        bodydiv.style.background="rgba(130,130,130,0.3)";
        bodydiv.style.borderLeft ="1px ridge";
        bodydiv.style.borderRight ="1px ridge";
      }
      bodydiv.style.borderTop ="1px ridge";
      bodydiv.style.borderBottom ="1px ridge";
      bodydiv.style.cursor ="pointer";
      document.getElementById("dynmaicCalendar").appendChild(bodydiv);
    }

  }
}

function showUp()
{
  alert("asd");
}
//Controller



renderTheList();