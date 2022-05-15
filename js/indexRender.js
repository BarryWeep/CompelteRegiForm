//Model:
let Userlist = [
  {
    userID:"",  //6digital to 7 digital 123456
    fname:"", //Leane
    lname:"",//Mcdonal
    moblePhone:"",//412345678
    Email: "",//test123@gmail.com
    location:"",//Golfplace Inn
    Venue:"",//Simulator One
    Player:"",//4
    date:"",//2022-05-05
    Duration:"",//60 mins
    StartTime:"",//7:30 AM
    EndTime:""//8:30 AM
  }
  ];

  function locationStorageAdd()
  {
    let VenueValue = document.getElementById("VENUE").value;



    if(VenueValue==1)
    {
        Userlist[0].location="Golfplace Inn";
        Userlist[0].Venue="Simulator One";
    }
    else
    {
      Userlist[0].location="Golfplace Inn";
      Userlist[0].Venue="Simulator Two";
    }

    Userlist[0].Player = document.getElementById("player").value;
    Userlist[0].Duration= document.getElementById("DURATION").value;
    Userlist[0].date = document.getElementById("Pick_a_date").value;



    localStorage.removeItem("sx$qwes42");
    localStorage.setItem("sx$qwes42", JSON.stringify(Userlist));

  }
  
//view

function initalDate()
{
  let today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  if (month <10) month = "0" + month;
  if (day <10) day = "0" + day;

  let trslate = year + "-" + month + "-" + day;       

  document.getElementById('Pick_a_date').value=trslate;
  document.getElementById('Pick_a_date').min = trslate;
  CalenderValueUpdate()
}




//control 
function CalenderValueUpdate()
{
    Userlist[0].date = document.getElementById('Pick_a_date').value;
    console.log(Userlist[0].date);
}


//run
initalDate();