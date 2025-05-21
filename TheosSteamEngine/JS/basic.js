window.addEventListener("DOMContentLoaded", () => {
	if (sessionStorage.getItem("Inloggad") === "true"){
		document.getElementById("account").innerHTML = sessionStorage.getItem("user");
		/*alert(sessionStorage.getItem("Användare"));
		alert("Account element:" + document.getElementById("account").innerHTML);*/
	}
});