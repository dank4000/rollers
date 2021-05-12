$(function(){
  const $portfolio = $('.portfolio');
  const $contactDetails = $('.contactDetails');


  $(".intro").typed({
    strings: [">",">","> Hello, I'm Dan <br> > I'm a web developer, project manager and keen cyclist <br>"],
    typeSpeed: 0,
    callback: menu,
    showCursor:false
  }
);
var option = "";
$("body").keydown(function(e) {
  e.preventDefault();
  keyPress(event.key)
});

function cycleOptions(opt,direction) {
  if (opt === "") {opt = 0};
  opt = parseInt(opt);
  if (direction === "up") {
    if (opt === 1) {return "3";}
    else return (opt-1).toString();
  }
  if (direction === "down") {
    if (opt === 3) {return "1";}
    else return (opt+1).toString();
  }
}


function menu() {
  const $menu =  $(".menu");
  $menu.toggle();
}

function hideAll() {
  $(".selection").removeClass("selected");
  $('.portfolio').hide();
  $('.contactDetails').hide();
}




function showItem(item) {
  item.fadeIn(200);
}

$("#one").click(() => {
  hideAll();
  launch("1");
})

$("#two").click(() => {
  hideAll();
  launch("2");
})

$("#three").click(() => {
  hideAll();
  window.open("https://github.com/dank4000");
})



function keyPress(pressedKey) {
  $(".pressEnter").fadeIn(500).fadeOut(500)
  hideAll();
  switch(pressedKey) {
    case "1":
    $("#one").addClass("selected")
    option = "1";
    break;
    case "2":
    $("#two").addClass("selected")
    option = "2";
    break;
    case "3":
    $("#three").addClass("selected")
    option = "3";
    break;
    case "Enter":
    keyPress(option);
    launch(option);
    break;
    case "ArrowUp":
    keyPress(cycleOptions(option,"up"));
    break;
    case "ArrowDown":
    keyPress(cycleOptions(option,"down"));
    break;
    default:
    $("body").fadeOut(100).fadeIn(100);
    break;
  }
}

function launch(option) {
  switch(option) {
    case "1":
    console.log('hi')
    showItem($portfolio);
    break
    case "2":
    showItem($contactDetails);
    break
    case "3":
    window.open("https://github.com/dank4000");
    break
  }

}

});
