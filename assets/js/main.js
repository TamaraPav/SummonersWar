$(document).ready(function () {
    navigacija();
    navigacijaFut();
    izbor();
    $("#welcome").fadeIn(3000);
    $("#log").on("click", log);
    $("#reg").on("click", reg);
    $("#gore").on("click", gore);
    $("#dark").on("click", darkMonster);
    $("#light").on("click", lightMonster);
    $("#wind").on("click", windMonster);
    $("#fire").on("click", fireMonster);
    $("#water").on("click", waterMonster);
    $("#top").on("click", topMonsters);
    $('.jc-slider').jcSlider({
        animationIn: 'fadeInLeft',
        animationOut: 'fadeOutRight',
        stopOnHover: true
    });
    $(".demo1").animatext({
        mode: "words"
      });

});


var meni = [["", "Summoners War"],["gameplay","Gameplay"],["monsters","Monsters"],["dungeons","Dungeons"],["arena","Arena"],["member","Join Us"],["author","Author"]];

function navigacija() {
    var ispis = "";
    var menu = document.getElementById("nav");
	for (let i = 0; i < meni.length; i++) {
        ispis += "<li><a href='#" + meni[i][0] + "'>" + meni[i][1] + "</a></li>";        
    }
    menu.innerHTML = ispis;
	
}

function navigacijaFut() {
    var ispis = "";
    var menu = document.getElementById("navFut");
	for (let i = 0; i < meni.length; i++) {
        ispis += "<li><a href='#" + meni[i][0] + "'>" + meni[i][1] + "</a></li>";        
    }
    menu.innerHTML = ispis;
	
}
var izborMonstera = [["dark","Dark"],["light","Light"],["wind","Wind"],["fire","Fire"],["water","Water"],["top","Top 5"]];

function izbor() {
    var ispis = "";
    var biraj = document.getElementById("izbor");
	for (let i = 0; i < izborMonstera.length; i++) {
        ispis += "<li id='" + izborMonstera[i][0] + "'>" + izborMonstera[i][1] + "</li>";        
    }
    biraj.innerHTML = ispis;
	
}
var darkMonsteri = [
    ["1","Alexandra"],
    ["2","Nicki"],
    ["3","Monte"],
    ["4","Liebli"],
    ["5","Lydia"]
];
var lightMonsteri = [
    ["1","Artamiel"],
    ["2","Deva"],
    ["3","Akroma"],
    ["4","Fellerla"],
    ["5","Homunculus"]
];
var windMonsteri = [
    ["1","Feng Yan"],
    ["2","Lagmaron"],
    ["3","Skogul"],
    ["4","Acasis"],
    ["5","Lushen"]
];
var fireMonsteri = [
    ["1","Mei Hou Wang"],
    ["2","Maruna"],
    ["3","Shaina"],
    ["4","Hwahee"],
    ["5","Baretta"]
];
var waterMonsteri = [
    ["1","Verad"],
    ["2","Tyron"],
    ["3","Tractor"],
    ["4","Sera"],
    ["5","Lapis"]
];

function darkMonster() {
    var monsters = document.getElementById("monsteri");
    monsters.innerHTML = "";
	for (let i = 0; i < darkMonsteri.length; i++) {
		let ispis = "";
		let div = document.createElement("div");
		div.className = "mon";
        ispis += "<img class='monster' src='images/dark" + darkMonsteri[i][0] + ".jpg' alt='" + darkMonsteri[i][1] + "'/><h4>&#8275; " + darkMonsteri[i][1] + " &#8275;</h4>"; 
		div.innerHTML = ispis;
		monsters.appendChild(div);
	}
}
function lightMonster() {
    var monsters = document.getElementById("monsteri");
    monsters.innerHTML = "";
	for (let i = 0; i < lightMonsteri.length; i++) {
		let ispis = "";
		let div = document.createElement("div");
		div.className = "mon";
        ispis += "<img class='monster' src='images/light" + lightMonsteri[i][0] + ".jpg' alt='" + lightMonsteri[i][1] + "'/><h4>&#8275; " + lightMonsteri[i][1] + " &#8275;</h4>"; 
		div.innerHTML = ispis;
		monsters.appendChild(div);
	}
}
function fireMonster() {
    var monsters = document.getElementById("monsteri");
    monsters.innerHTML = "";
	for (let i = 0; i < fireMonsteri.length; i++) {
		let ispis = "";
		let div = document.createElement("div");
		div.className = "mon";
        ispis += "<img class='monster' src='images/fire" + fireMonsteri[i][0] + ".jpg' alt='" + fireMonsteri[i][1] + "'/><h4>&#8275; " + fireMonsteri[i][1] + " &#8275;</h4>"; 
		div.innerHTML = ispis;
		monsters.appendChild(div);
	}
}
function windMonster() {
    var monsters = document.getElementById("monsteri");
    monsters.innerHTML = "";
	for (let i = 0; i < windMonsteri.length; i++) {
		let ispis = "";
		let div = document.createElement("div");
		div.className = "mon";
        ispis += "<img class='monster' src='images/wind" + windMonsteri[i][0] + ".jpg' alt='" + windMonsteri[i][1] + "'/><h4>&#8275; " + windMonsteri[i][1] + " &#8275;</h4>"; 
		div.innerHTML = ispis;
		monsters.appendChild(div);
	}
}
function waterMonster() {
    var monsters = document.getElementById("monsteri");
    monsters.innerHTML = "";
	for (let i = 0; i < waterMonsteri.length; i++) {
		let ispis = "";
		let div = document.createElement("div");
		div.className = "mon";
        ispis += "<img class='monster' src='images/water" + waterMonsteri[i][0] + ".jpg' alt='" + waterMonsteri[i][1] + "'/><h4>&#8275; " + waterMonsteri[i][1] + " &#8275;</h4>"; 
		div.innerHTML = ispis;
		monsters.appendChild(div);
	}
}
function topMonsters() {
    var monsters = document.getElementById("monsteri");
    monsters.innerHTML = "";
    let ispis = "<div><img class='monster' src='images/water" + waterMonsteri[0][0] + ".jpg' alt='" + waterMonsteri[0][1] + "'/><h4>&#8275; " + waterMonsteri[0][1] + " &#8275;</h4></div>" + 
    "<div><img class='monster' src='images/fire" + fireMonsteri[0][0] + ".jpg' alt='" + fireMonsteri[0][1] + "'/><h4>&#8275; " + fireMonsteri[0][1] + " &#8275;</h4></div>" + 
    "<div><img class='monster' src='images/wind" + windMonsteri[0][0] + ".jpg' alt='" + windMonsteri[0][1] + "'/><h4>&#8275; " + windMonsteri[0][1] + " &#8275;</h4></div>" + 
    "<div><img class='monster' src='images/dark" + darkMonsteri[0][0] + ".jpg' alt='" + darkMonsteri[0][1] + "'/><h4>&#8275; " + darkMonsteri[0][1] + " &#8275;</h4></div>" + 
    "<div><img class='monster' src='images/light" + lightMonsteri[0][0] + ".jpg' alt='" + lightMonsteri[0][1] + "'/><h4>&#8275; " + lightMonsteri[0][1] + " &#8275;</h4></div>"; 
	monsters.innerHTML = ispis;
}
function selectDungeon (n) {
    $(".content-switcher").hide();
    $("#content"+n).show();
    $(".item-number").removeClass("underline");
    $("#item"+n).addClass("underline");
}

function log (){
    document.querySelector("#mailIn").focus();
}

function reg (){
    document.querySelector("#name").focus();
}
function gore() {
	$("html").animate({ scrollTop: 0 }, 350);
}