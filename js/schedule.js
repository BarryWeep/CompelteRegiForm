// Model : contain all the code that saves and mananges data

  
let weekdaylist = ["SUNDAY","MONDAY"," TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
let intervals_Time = ["07:00 AM","07:30 AM","08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM"];
let AddclassList = ["col-1","col-2","col-3"];




///// calculating duration
let inputStartEndValue = [];
let compaireTwoValue = [];
let startEndCounter = 0;


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
    sub_renderTheTime();

}

function sub_renderTheTime()
{
  for(let row_counter_two = 0; row_counter_two<intervals_Time.length;row_counter_two++)
  {
    for(let row_create = 0; row_create<3; row_create++)
    {
      let bodydiv= document.createElement("div");
      bodydiv.innerHTML = intervals_Time[row_counter_two];
      if(row_create==1)
      {
        bodydiv.style.background="rgba(130,130,130,0.3)";
        bodydiv.style.borderLeft ="1px ridge";
        bodydiv.style.borderRight ="1px ridge";
      }
      bodydiv.style.borderTop ="1px ridge";
      bodydiv.style.borderBottom ="1px ridge";
      bodydiv.style.cursor ="pointer";
      bodydiv.classList.add(AddclassList[row_create]);
      //bodydiv.onclick = function(){showUp()};
      document.getElementById("dynmaicCalendar").appendChild(bodydiv);

    }

  }


}


/// change the start time and end time display 

const theTimeTable = document.querySelector(".dynamicCalender");

theTimeTable.addEventListener('click', e=> {

  if(e.target.matches('div'))
  {
      if(startEndCounter==0)
      {
          document.getElementById("StartTime").value=e.target.innerHTML;
          inputStartEndValue[0] = e.target.innerHTML;
          startEndCounter++;
      }
      else if(startEndCounter==1)
      {
        document.getElementById("EndTime").value=e.target.innerHTML;
        startEndCounter++;
        inputStartEndValue[1] = e.target.innerHTML;
        startEndCounter=0;

        // get duration value;
        for(let durationInital = 0; durationInital<29; durationInital++)
        {
          if(compaireTwoValue.length<2)
          {
             if(inputStartEndValue[0]==intervals_Time[durationInital])
             {
               compaireTwoValue[0] = durationInital;
             }
             else if (inputStartEndValue[1]==intervals_Time[durationInital])
             {
               compaireTwoValue[1] = durationInital;
             }
          }
          else
          { 
              let durationValue = (compaireTwoValue[1]-compaireTwoValue[0])*30;
              let Stringvalue =  durationValue.toString() + " mins";
              document.getElementById("duration").value = Stringvalue;
              compaireTwoValue=[];
          }
        }
      }
      else{
        startEndCounter=0;
      }
  }


});



//Controller



renderTheList();

