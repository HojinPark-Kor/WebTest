window.onload = function()
{
  //document.getElementById("ball1").addEventListener("click", BodyClick);
  //document.body.addEventListener('click', BodyClick);
}

function BodyClick(event)
{
  pX = event.pageX - 15;
  pY = event.pageY - 15;

  sTemp = "<div class='Ball' style='left:" + pX +"px;top:" + pY +"px'></div>";
  document.getElementById("dock").innerHTML = sTemp;
}

function Breed()
{
  Cnt = document.body.getElementsByTagName("div").length;

  document.body.innerHTML += "<div class='Ball' onclick='ChangePosition()'></div>";
  document.body.innerHTML += "<div class='Ball' onclick='ChangePosition()'></div>";
}

function btn_Test_Click(msg)
{
  alert(msg);
}

function ChangePosition()
{
    Breed();

    //element = document.getElementById('ball1');

    //element.classList.remove("bounce");

    //element.offsetWidth = element.offsetWidth;

    //element.classList.add("bounce");
}