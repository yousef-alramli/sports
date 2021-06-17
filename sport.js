

alert("hello and welcome")
var sport = prompt("write down witch sport you like more ,, soccer, cricket or basketball, so you will find a link for it at end of the page")

while (sport != "soccer" && sport !="basketball" && sport !="cricket"){
  sport = prompt("not available pleas try again")
}

if (sport == "basketball" ) {
  var fsport = prompt("how mani pics you would like to see")
  for (x =0 ; x <fsport; x++) { 
    let y = (x + 1) 
    document.write("<p>" + "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Basketball_match_Greece_vs_France_on_02_September_2017_50.jpg/1280px-Basketball_match_Greece_vs_France_on_02_September_2017_50.jpg'>" + "<p>" + y )
  }
   
    document.write("<p>" + "for more info. about basketball please press " + " <a href ='https://www.breakthroughbasketball.com/basics/basics.html'> here" + "</a>" + "</p>" );
    
}
else if (sport == "soccer"){

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
   
    document.write("<p>" + "for more info. about cricket please press " + " <a href ='https://www.britannica.com/sports/cricket-sport" + "</a>" + "</p>" );
    
}


  var advice = confirm("if you have any advice please bress ok")
  
if (advice){ prompt ( "please write it down" )

} 
else { alert ("thank you")
}

