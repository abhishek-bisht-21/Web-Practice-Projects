const url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";

const request = require("request");
const cheerio = require("cheerio");

console.log("Before");
request(url, cb);
function cb(err, response, html) {
  if (err) {
    console.log(err);
  } else {
    extractHTML(html);
  }
}

function extractHTML(html) {
  let $ = cheerio.load(html);
  let teamsArr = $(".match-info.match-info-MATCH .team");
  let wTeamName;
  let lTeamName;
  for (let i = 0; i < teamsArr.length; i++) {
    let hasclass = $(teamsArr[i]).hasClass("team-gray"); // team-gray is the lossing team
    if (hasclass == false) {
      // find
      let teamNameElem = $(teamsArr[i]).find(".name"); // to search in a specific tag find is used.
      wTeamName = teamNameElem.text().trim(); 
    }else{
	let teamNameElem = $(teamsArr[i]).find(".name");
	lTeamName = teamNameElem.text().trim();
    }
  }


     // segregate 
    // shorter form html
    let innigsArr = $(".card.content-block.match-scorecard-table>.Collapsible");

    for(let i=0;i<innigsArr.length;i++){
	    //Team Names
	    
	   let teamNameElement =  $(innigsArr[i]).find(".header-title.label") // Will give us both teams
	   let teamName = teamNameElement.text(); // Now we wanted only the text
	   teamName = teamName.split("INNINGS")[0]; // It will return an array, and at 0th index will have team names.
	   teamName = teamName.trim();
	//    console.log(teamName)
	    
	     	let hwtName = "";
        	let hwt = 0;	

	    // Team Table
	    if(lTeamName == teamName){
		// console.log(teamName); 
		let tableElem = $(innigsArr[i]).find(".table.bowler");
            	let allBowlers = $(tableElem).find("tr"); // All bowlers rows is here.
		
		for(let j = 0;j<allBowlers.length;j++){
			// Now one by one picking up each player in the bowling list and comapring their wickets taken
			let allColsOfPlayer = $(allBowlers[j]).find("td");
			let playerName = $(allColsOfPlayer[0]).text();
               	        let wickets = $(allColsOfPlayer[4]).text();
			 // After comparisons set the highest wickets and wicket taker name      
               		 if (wickets >= hwt) {
                  		hwt = wickets;
                		hwtName = playerName;
                	}
		}
		 console.log(`Winning Team ${wTeamName} highest wicket Taker playerName: ${hwtName} and wickets Taken are: ${hwt}`)
	    }
    }


}
