// script for practice area navigation, show and hide buttons
// the idea is to store all variables needed (div IDs) into arrays
// loop through the arrays in each function to easily toggle hide and show


// practice area content div, small
var practiceAreaNames =
["#adoption_practice", "#domestic_practice", "#veterans_practice"];

// practice area content div, large
var largePracticeAreaNames =
["#adoption_practice_large", "#domestic_practice_large", "#veterans_practice_large"];

// practice area button div, SHOW
var practiceAreaButtons =
["#adoptionBtn", "#domesticBtn", "#veteransBtn"];

// practice area button div, HIDE
var practiceAreaButtonsHide =
["#adoptionBtnHide", "#domesticBtnHide", "#veteransBtnHide"];

$(document).ready(function(){

  // when document loads, hide elements in practice area
  for (i=0;i<practiceAreaNames.length;i++) {
    $(practiceAreaNames[i]).hide();
    $(largePracticeAreaNames[i]).hide();
    $(practiceAreaButtonsHide[i]).hide();
  }


  // takes index from clicked button
  // hides all others and shows itself
  function showButtonSmall(id){
    $(practiceAreaButtons[id]).click(function(){
      for (i=0;i<practiceAreaNames.length;i++){
        $(practiceAreaNames[i]).hide();
        $(practiceAreaButtonsHide[i]).hide();
        $(practiceAreaButtons[i]).show();
      }
      $(practiceAreaButtons[id]).hide();
      $(practiceAreaButtonsHide[id]).show();
      $(practiceAreaNames[id]).show();
    });
  }

  function showButtonLarge(id){
    $(practiceAreaButtons[id]).click(function(){
      for (i=0;i<practiceAreaNames.length;i++){
        $(largePracticeAreaNames[i]).hide();
        $(practiceAreaButtonsHide[i]).hide();
        $(practiceAreaButtons[i]).show();
      }
      $(practiceAreaButtons[id]).hide();
      $(practiceAreaButtonsHide[id]).show();
      $(largePracticeAreaNames[id]).show();
    });
  }

  // takes index from clicked button
  // hides content and shows read more buttons
  function hideButton(id){
    $(practiceAreaButtonsHide[id]).click(function(){
      for (i=0;i<practiceAreaNames.length;i++){
        $(practiceAreaNames[i]).hide();
        $(largePracticeAreaNames[i]).hide();
        $(practiceAreaButtonsHide[i]).hide();
        $(practiceAreaButtons[i]).show();
      }
    });
  }
  /*Small Screen Funtion*/
  if($(window).width() <= 980){

    /* Show functions */
    $("#adoptionBtn").click(showButtonSmall(0));
    $("#domesticBtn").click(showButtonSmall(1));
    $("#veteransBtn").click(showButtonSmall(2));

    /* Hide Functions */
    $("#adoptionBtnHide").click(hideButton(0));
    $("#domesticBtnHide").click(hideButton(1));
    $("#veteransBtnHide").click(hideButton(2));
  }
  else {

    /*Large Screen Funtion*/
    /* Show functions */
    $("#adoptionBtn").click(showButtonLarge(0));
    $("#domesticBtn").click(showButtonLarge(1));
    $("#veteransBtn").click(showButtonLarge(2));


    /* Hide Functions */
    $("#adoptionBtnHide").click(hideButton(0));
    $("#domesticBtnHide").click(hideButton(1));
    $("#veteransBtnHide").click(hideButton(2));
  }

});
