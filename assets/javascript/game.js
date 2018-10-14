$(document).ready(function () {


var userCharacter = "";
var enemyCharacter = "";
var isUserPlayerSelected = false;
var isEnemyPlayerSelected = false;
var wins = 0;


var players= [
carmela ={ 
    name: "Carmela",
    HP: 100,
    userPower: 5,
    enemyPower: 6,
},
junior = {
    name:"Junior",
    HP: 120,
    userPower: 5,
    enemyPower: 6,
},
silvio = {
    name:"Silvio",
    HP: 100,
    userPower: 5,
    enemyPower: 6,
},
tony = {
    name: "Tony",
    HP: 150,
    userPower: 5,
    enemyPower: 6,
}
]
// $("#currentHP").text(this.HP);


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

//Choosing Characters and Enemies
$("#carButton").click(function(){
    if(!isUserPlayerSelected){
    userCharacter = carmela;
    console.log("User Character: ", userCharacter);
    isUserPlayerSelected= true;
    $("#directions").text("");
    $("#directions2").text("Now choose an opponent.");
    $("#carButton").appendTo($("#userFightArea"))
    }
    else{
        enemyCharacter = carmela;
        // $("#carButton").animate({right: '550px'});
        console.log("Enemy Character: ", enemyCharacter);
        isEnemyPlayerSelected = true;
        $("#directions2").text("");
        $("#carButton").appendTo($("#enemyFightArea"))
    }
});

$("#junButton").click(function(){
    if(!isUserPlayerSelected){
    // $("#junButton").animate({right: '550px'});
    userCharacter = junior;
    console.log("User Character: ", userCharacter);
    isUserPlayerSelected= true;
    $("#directions").text("");
    $("#directions2").text("Now choose an opponent.");
    $("#junButton").appendTo($("#userFightArea"))
    }
    else{
        enemyCharacter=junior;
        // $("#junButton").animate({right: '550px'});
        console.log("Enemy Character:", enemyCharacter);
        isEnemyPlayerSelected=true;
        $("#directions2").text("");
        $("#junButton").appendTo($("#enemyFightArea"))
    }
});

$("#silButton").click(function(){
    if(!isUserPlayerSelected){
    // $("#silButton").animate({right: '550px'});
    userCharacter = silvio;
    console.log("User Character: ", userCharacter);
    isUserPlayerSelected= true;
    $("#directions").text("");
    $("#directions2").text("Now choose an opponent.");
    $("#silButton").appendTo($("#userFightArea"))
    }
    else{
        enemyCharacter=silvio;
        // $("#silButton").animate({right: '550px'});
        console.log("Enemy Character:", enemyCharacter);
        isEnemyPlayerSelected=true;
        $("#directions2").text("");
        $("#silButton").appendTo($("#enemyFightArea"))
    }
});
$("#tonyButton").click(function(){
    if(!isUserPlayerSelected){
    // $("#tonyButton").animate({right: '550px'});
    userCharacter = tony;
    console.log("User Character: ", userCharacter);
    isUserPlayerSelected= true;
    $("#directions").text("");
    $("#directions2").text("Now choose an opponent.");

    $("#tonyButton").appendTo($("#userFightArea"))
    }
    else{
        enemyCharacter= tony;
        // $("#tonyButton").animate({right: '550px'});
        console.log("Enemy Character:", enemyCharacter);
        isEnemyPlayerSelected=true;
        $("#directions2").text("");
        $("#tonyButton").appendTo($("#enemyFightArea"))
    }
    
});

$("#popEm").click(function(){

    if((isUserPlayerSelected) && (isEnemyPlayerSelected)){
        console.log("fighting");
        console.log(userCharacter.HP);
        userCharacter.HP= userCharacter.HP - enemyCharacter.enemyPower;
        enemyCharacter.HP = enemyCharacter.HP - userCharacter.userPower;
        userCharacter.userPower++;
        enemyCharacter.userPower--;
        $(".currentHP").text(userCharacter.HP);
        $(".enemyHP").text(enemyCharacter.HP);


        // if(userCharacter = carmela){
        //     $(".currentHP").text(userCharacter.HP);
        // }
        // else if (enemyCharacter = carmela){
        // $(".currentHP").text(enemyCharacter.HP);
        // }
        // else if ((!enemyCharacter === carmela) || (!userCharacter === carmela)){
        //     userHP =100;
        // }

        // if(userCharacter = Junior){
        //     $(".currentHP").text(userCharacter.HP);
        // }
        // else if (enemyCharacter = junior){
        // $(".enemyHP").text(enemyCharacter.HP);
        // }

        function reset(){
            $("#carButton").show();
            $("#junButton").show();
            $("#silButton").show();
            $("#tonyButton").show();
            $("#carButton").appendTo($("#characterContainer"))
            $("#junButton").appendTo($("#characterContainer"))
            $("#silButton").appendTo($("#characterContainer"))
            $("#tonyButton").appendTo($("#characterContainer"))
            carmela.HP = 100;
            junior.HP = 120;
            silvio.HP = 100;
            tony.HP = 150;
            
        }
    
       
        if(userCharacter.HP < 1){
            console.log("LOSER");
            alert("You got whacked!");
            reset();
        }
        else if(enemyCharacter.HP <1){
            wins++;
            $(".currentHP").text("");
            $(".enemyHP").text("");
            $("#enemyHP").empty();
            // $("#statArea").empty();
            if(wins<3){
            alert("You're moving up in the family.")}
            $("#enemyFightArea").empty();
            carmela.HP = 100;
            junior.HP = 120;
            silvio.HP = 100;
            tony.HP = 150;
            // $("#currentHP").empty();
            // $("#enemyHP").empty();
        }
    }
   
    else{
        alert("Please choose an identity and an opponent.")
    }

    if(wins>2){
        alert("You're the new Mob Boss!");
    }

});

// $("#restart").on("click", function(){
//     $("#camButton").animate({left: '550px'});
//     $("#junButton").animate({left: '550px'});
//     $("#silButton").animate({left: '550px'});
//     $("#tonyButton").animate({left: '550px'});
// });

});