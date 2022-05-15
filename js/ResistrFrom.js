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

  function submit_theReservation()
  {
   let testOne = document.getElementById('fname');
   let testTwo = document.getElementById('lname');
   let testThree =document.getElementById('Phone');
   let testfour =document.getElementById('Email');
   
   if(testOne&&testOne.value&&testTwo&&testTwo.value&&testThree&&testThree.value&&testfour&&testfour.value)
	{
		alert("Success!! Your Reservation has been received");
 
	}
	else
	{
		return;
	}

  }

  locationStorageAdd();