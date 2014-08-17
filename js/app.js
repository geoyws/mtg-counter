var mtgCounter = {
    resetHealth: function () {
        localStorage.myHP = 20;
        localStorage.oppHP = 20;
        mtgCounter.updateHP();
    },
    updateHP: function () {
        $("#myHP").text(localStorage.myHP);
        $("#oppHP").text(localStorage.oppHP);
    },
    alterHP: function (event, amount) {
        //alert(amount);

        var newHP;
        if ($(event.target).closest(".box")[0].id == "myBox") {
            //alert(1);
            newHP = parseInt(localStorage.myHP) + amount;
            localStorage.myHP = newHP;
            mtgCounter.updateHP();

        } else if ($(event.target).closest(".box")[0].id == "oppBox") {
            //alert(2);
            newHP = parseInt(localStorage.oppHP) + amount;
            localStorage.oppHP = newHP;
            mtgCounter.updateHP();
        }
    }
};

$(function () {
    if (!localStorage.myHP) {
        $("#myHP, #oppHP").text("20");
    }
    mtgCounter.updateHP();
});
