$(document).ready(function() {
  //Know when your DOM isloaded!
  console.log("Loaded and running!!");
});

//Function show change will calculate the amount of change needed
//and then break the amount down in dollars, quarters
//dimes, nickels and pennies from heaven.

function showChange() {
  //Calculate the difference
  var changeVal = $("#cashInput").val() - $("#salesTotal").val();
  //If we have a change amount, break the currency down.
  if (changeVal >= 0.0) {
    //Dollars calculation, just strip the decimal portion.
    var dollars = Math.floor(changeVal);
    //Now calculate the change remainder.
    var changeTotal = parseInt(Math.round((changeVal - dollars) * 100.));
    //See how many quarters can needed.
    var quarters = parseInt(changeTotal / 25);
    //adjust the remianing chnage amount by taking the number of quarters
    //needed and multiply by 25.  (.25 cents);
    changeTotal -= quarters * 25;
    //The same for dimes.
    var dimes = parseInt(changeTotal / 10);
    changeTotal -= dimes * 10;
    //The same for nickels.
    var nickels = parseInt(changeTotal / 5);
    changeTotal -= nickels * 5;
    //which leaves us pennies.
    var pennies = changeTotal;
    //Display everything.
    $("#dollarId").html(dollars);
    $("#quarterId").html(quarters);
    $("#dimeId").html(dimes);
    $("#nickelId").html(nickels);
    $("#pennyId").html(pennies);
  }
}

//Button change fire the the button is pressed.
//Also plays a silly coin sound.
$("#btnChange").click(function(){
  showChange();
   $.playSound('sounds/coins');
});
