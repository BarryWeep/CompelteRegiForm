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
    var storedNames = JSON.parse(localStorage.getItem("sx$qwes42"));
    Userlist = storedNames;

  
  }

  function submit()
  {
    Userlist[0].fname = document.getElementById('fname').value;
    Userlist[0].lname = document.getElementById('lname').value;
    Userlist[0].moblePhone = document.getElementById('Phone').value;
    Userlist[0].Email = document.getElementById('Email').value;
    localStorage.removeItem("sx$qwes42");
    alert("Success!! Your Reservation has been received");
    window.location.href = "./index.html";

  }

  locationStorageAdd();