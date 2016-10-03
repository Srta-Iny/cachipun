//cachipun.js
/*necesito una jugada y el valor de esa jugada va a ser piedra papel o tijera*/
var jugadaUser;
var jugadaCpu;

var jugadaUser = prompt("¿piedra, papel o tijera?", "elije una opcion");
console.log(jugadaUser);
/* numero random para la seleccion de cpu*/
var numRandom = Math.random()*2;
var numRedondo = Math.round(numRandom);
console.log(numRedondo);

/* 0:piedra/ 1: tijera / 2:papel */

if (numRedondo == 0){
	jugadaCpu = "piedra";
}else if ( numRedondo == 1){
	jugadaCpu = "tijera";
}else{
	jugadaCpu ="papel";
}
alert("ahora le toca a la cpu elegir");
console.log(jugadaCpu);
alert(" El computador a elgido: "+jugadaCpu)

/* resultado quien gana?*/

if (jugadaUser === "piedra"){
	if(jugadaCpu=="piedra"){
		alert("oh! hubo un empate");
	}else if (jugadaCpu == "tijera"){
		alert("Ganaste ^^!!");
	}else{
		alert("lo siento haz perdido u.u");
	}
}else if (jugadaUser === "tijera"){
	if(jugadaCpu== "tijera"){
		alert("oh! hubo un empate");
	}else if (jugadaCpu == "papel"){
		alert("Ganaste ^^!!");
	}else{
		alert("lo siento haz perdido u.u");
	}
}else if (jugadaUser== "papel"){
	if(jugadaCpu== "papel"){
		alert("oh! hubo un empate");
	}else if (jugadaCpu == "piedra"){
		alert("Ganaste ^^!!");
	}else{
		alert("lo siento haz perdido u.u");
	}
}else{
	alert("debes elegir una opcion")
}