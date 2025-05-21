function Buy(game){
	if (sessionStorage.getItem("Inloggad") === "true"){
		if (sessionStorage.getItem("toBuy") == null){
			sessionStorage.setItem("toBuy", JSON.stringify([game]))
			alert("Item put in shopping cart.");
		}
		else{
			const games = JSON.parse(sessionStorage.getItem("toBuy"));
			const owned = JSON.parse(sessionStorage.getItem("games") || "[]");
			if (!games.includes(game) && !owned.includes(game)){
				games.unshift(game);
				sessionStorage.setItem("toBuy", JSON.stringify(games));
				alert("Item put in shopping cart.");
			}
			else if(games.includes(game)){
				alert("Item already in shopping cart.");
			}
			else{
				alert("Item already owned.");
			}
		}
	}
	else {
		alert("You have to be logged in to purchase games.");
	}
	
}