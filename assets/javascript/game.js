$(document).ready(function () {

var CHP = 100;
var JHP = 120;
var SHP = 100;
var THP = 150;
var userHP = 0;
var enemyHP = 0;
var userCharacter = "";
var enemyCharacter = "";
var isUserPlayerSelected = false;
var isEnemyPlayerSelected = false;

var players= [
carmela ={ 
    name: "Carmela",
    HP: 100,
},
junior = {
    name:"Junior",
    HP: 120,
},
silvio = {
    name:"Silvio",
    HP: 100,
},
tony = {
    name: "Tony",
    HP: 150,
}
]


// $(".carButton").on("click", function(){

//     if(isUserPlayerSelected){
//         enemyCharacter= $(this).val();
//         console.log("enemy Character: " + enemyCharacter);
//         isUserPlayerSelected= true;
//     }

//     else{
//         userCharacter = $(this).val();
//         console.log("User Character: " + userCharacter);
//     }

// });
$("#carButton").click(function(){
    if(!isUserPlayerSelected){
    $("#carButton").animate({right: '550px'});
    // $("#silButton").hide();
    userHP = CHP;
    userCharacter = carmela;
    // userCharacter = "Carmila";
    // console.log(userCharacter);
    console.log("User Character: ", userCharacter);
    isUserPlayerSelected= true;
    }
    else{
        enemyCharacter = carmela;
        console.log("Enemy Character: ", enemyCharacter);
        isEnemyPlayerSelected = true;
    }
});

$("#junButton").click(function(){
    $("#junButton").animate({right: '550px'});
    userCharacter = junior;
    console.log(userCharacter);
    console.log(userHP);
});
$("#silButton").click(function(){
    $("#silButton").animate({right: '550px'});
    userCharacter = silvio;
    console.log(userCharacter);
    console.log(userHP);
});
$("#tonyButton").click(function(){
    $("#tonyButton").animate({right: '550px'});
    userCharacter = tony;
    console.log(userCharacter);
    console.log(userHP);
});

// $("#restart").on("click", function(){
//     $("#camButton").animate({left: '550px'});
//     $("#junButton").animate({left: '550px'});
//     $("#silButton").animate({left: '550px'});
//     $("#tonyButton").animate({left: '550px'});
// });
});