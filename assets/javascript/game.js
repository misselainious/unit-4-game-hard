$(document).ready(function () {

    //Establish variables for game

    var userCharacter = "";
    var enemyCharacter = "";
    var isUserPlayerSelected = false;
    var isEnemyPlayerSelected = false;
    var wins = 0;

    //Players array

    var players = [
        carmela = {
            name: "Carmela",
            HP: 100,
            userPower: 5,
            enemyPower: 6,
        },
        junior = {
            name: "Junior",
            HP: 120,
            userPower: 5,
            enemyPower: 6,
        },
        silvio = {
            name: "Silvio",
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

    //Choosing Characters and Enemies

    $("#carButton").click(function () {
        if (!isUserPlayerSelected) {
            userCharacter = carmela;
            console.log("User Character: ", userCharacter);
            isUserPlayerSelected = true;
            $("#directions").text("");
            $("#directions2").text("Now choose an opponent.");
            $("#carButton").appendTo($("#userFightArea"))
        } else {
            enemyCharacter = carmela;
            console.log("Enemy Character: ", enemyCharacter);
            isEnemyPlayerSelected = true;
            $("#directions2").text("");
            $("#carButton").appendTo($("#enemyFightArea"))
        }
    });

    $("#junButton").click(function () {
        if (!isUserPlayerSelected) {
            userCharacter = junior;
            console.log("User Character: ", userCharacter);
            isUserPlayerSelected = true;
            $("#directions").text("");
            $("#directions2").text("Now choose an opponent.");
            $("#junButton").appendTo($("#userFightArea"))
        } else {
            enemyCharacter = junior;
            console.log("Enemy Character:", enemyCharacter);
            isEnemyPlayerSelected = true;
            $("#directions2").text("");
            $("#junButton").appendTo($("#enemyFightArea"))
        }
    });

    $("#silButton").click(function () {
        if (!isUserPlayerSelected) {
            userCharacter = silvio;
            console.log("User Character: ", userCharacter);
            isUserPlayerSelected = true;
            $("#directions").text("");
            $("#directions2").text("Now choose an opponent.");
            $("#silButton").appendTo($("#userFightArea"))
        } else {
            enemyCharacter = silvio;
            console.log("Enemy Character:", enemyCharacter);
            isEnemyPlayerSelected = true;
            $("#directions2").text("");
            $("#silButton").appendTo($("#enemyFightArea"))
        }
    });
    $("#tonyButton").click(function () {
        if (!isUserPlayerSelected) {
            userCharacter = tony;
            console.log("User Character: ", userCharacter);
            isUserPlayerSelected = true;
            $("#directions").text("");
            $("#directions2").text("Now choose an opponent.");
            $("#tonyButton").appendTo($("#userFightArea"))
        } else {
            enemyCharacter = tony;
            console.log("Enemy Character:", enemyCharacter);
            isEnemyPlayerSelected = true;
            $("#tonyButton").appendTo($("#enemyFightArea"))
        }

    });

    //Fight function

    $("#popEm").click(function () {

        if ((isUserPlayerSelected) && (isEnemyPlayerSelected)) {
            userCharacter.HP = userCharacter.HP - enemyCharacter.enemyPower;
            enemyCharacter.HP = enemyCharacter.HP - userCharacter.userPower;
            userCharacter.userPower++;
            enemyCharacter.userPower--;
            $(".currentHP").text(userCharacter.HP);
            $(".enemyHP").text(enemyCharacter.HP);

            function reset() {
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

            //Winning and losing

            if (userCharacter.HP < 1) {
                alert("You got whacked!");
                reset();
            } else if (enemyCharacter.HP < 1) {
                wins++;
                $(".currentHP").text("");
                $(".enemyHP").text("");
                $("#enemyHP").empty();
                if (wins < 3) {
                    alert("You're moving up in the family.")
                }
                $("#enemyFightArea").empty();
                carmela.HP = 100;
                junior.HP = 120;
                silvio.HP = 100;
                tony.HP = 150;

            }
        }

        //safety for having both character and opponent selected
        else {
            alert("Please choose an identity and an opponent.")
        }

        if (wins > 2) {
            alert("You're the new Mob Boss!");
        }

    });

});