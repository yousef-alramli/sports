

alert("hello and welcome")
var sport = prompt("write down witch sport you like more ,, soccer, cricket or basketball, so you will find a link for it at end of the page")


function sp (){



while (sport != "soccer" && sport !="basketball" && sport !="cricket"){
  sport = prompt("not available pleas try again")
}

if (sport == "basketball" ) {
  var fsport = prompt("how mani pics you would like to see")
  for (x =0 ; x <fsport; x++) { 
    let y = (x + 1) 
    document.write("<p>" + "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Basketball_match_Greece_vs_France_on_02_September_2017_50.jpg/1280px-Basketball_match_Greece_vs_France_on_02_September_2017_50.jpg'>" + "<p>" + y )
  }
}
else if (sport == "soccer")
{


  var fsport = prompt("how mani pics you would like to see")
  for (x =0 ; x <fsport; x++) {
    let y = (x + 1) 
    document.write("<p>" + "<img src='https://image.shutterstock.com/image-photo/goalkeeper-catches-ball-on-soccer-260nw-1113319799.jpg'>" + "<p>" + y )
  }
  
   
    document.write("<p>" + "for more info. about soccer please press " + " <a href ='https://www.bundesliga.com/en/faq/all-you-need-to-know-about-soccer'> here" + "</a>" + "</p>"  );
    
}
else if (sport == "cricket"){

var fsport = prompt("how mani pics you would like to see")
  for (x =0 ; x <fsport; x++) { let y = (x + 1) 
    document.write("<p>" + "<img src='https://assets.thespinoff.co.nz/1/2020/06/Screen-Shot-2020-06-26-at-10.51.39-AM.png'>" + "<p>" + y )
  }

   
    document.write("<p>" + "for more info. about soccer please press " + " <a href ='https://www.bundesliga.com/en/faq/all-you-need-to-know-about-soccer'> here" + "</a>" + "</p>" );
    
}



else {
  alert ( "sorry we dont support this type of sport") 
  }



}


sp();
 
 
var farewell = document.write("<p class='ramos'>" + "Farewell Sergio Ramos" + "<img id='rr' src='https://editorial.uefa.com/resources/026a-128a9492b9e9-653f163f669e-1000/real_madrid_tribute_and_farewell_to_sergio_ramos.jpeg'>" + "</p>")

function sergio(){

  console .log(farewell);


}

sergio();

  var advice = confirm("if you have any advice please bress ok")
  
if (advice){ prompt ( "please write it down" )

} 
else { alert ("thank you")
}


