window.onload = function()
{
  document.body.onclick = BodyClick;
}

function BodyClick(e)
{
  document.body.innerHTML += "<div class='Ball'></div>";
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



//-----------------------------------
AddEvent();