

alert("hello and welcome")
var sport = prompt("write down witch sport you like more ,, soccer, cricket or basketball, so you will find a link for it at end of the page")
if (sport == "basketball" ) {
   
    document.write("<p>" + "for more info. about basketball please press " + " <a href ='https://www.breakthroughbasketball.com/basics/basics.html'> here" + "</a>" + "</p>" );
    
}
else if (sport == "soccer"){
   
    document.write("<p>" + "for more info. about soccer please press " + " <a href ='https://www.bundesliga.com/en/faq/all-you-need-to-know-about-soccer'> here" + "</a>" + "</p>" );
    
}
else if (sport == "cricket"){
   
    document.write("<p>" + "for more info. about cricket please press " + " <a href ='https://www.britannica.com/sports/cricket-sport" + "</a>" + "</p>" );
    
}
else {
  alert ( "sorry we dont support this type of sport") 
  }

  var proceed = confirm("if you have any advice please bress ok");
if (proceed) { prompt ( "please write it down" )

 
} else { alert ("thank you")
  
}