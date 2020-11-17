const _sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

window.onload = function()
{
  var date = new Date();
  date.setDate(date.getDate() - 1);

  var willCookie = "";
  willCookie += "CookieName=Value;";
  willCookie += "Expires=" + date.toUTCString();

  document.cookie = willCookie;
}

function BodyClick(event)
{
  pX = event.pageX - 15;
  pY = event.pageY - 15;

  var div = document.createElement('div');
  div.setAttribute('class', 'Ball');
  div.setAttribute('style',"left:" + pX +"px;top:" + pY +"px");

  document.getElementById("dock").appendChild(div);
}

async function Breed(div)
{
  if(div.classList.contains('bounce'))
  {
    div.classList.remove('bounce');
    div.offsetWidth;
    div.classList.add('bounce');
  }
  else
  {
    div.classList.add('bounce');
  }

  await _sleep(200);

  for(i = 1; i <= 9; i++)
  {
    for(j = -1; j <= 1; j+=2)
    {
      sName = "ball" + i +""+j;

      if(document.getElementById(sName) != null)
      {
        tempEle = document.getElementById(sName)
        tempEle.classList.remove('bounce');
        tempEle.offsetWidth;
        tempEle.classList.add('bounce');
        document.getElementById(sName).style.backgroundColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);
      }
      else
      {
        appearBox = document.createElement('div');
        appearBox.classList.add('container');
        appearBox.classList.add('appear');
        appearBox.style.left   = (50 + i*5*j) + "%";
        appearBox.style.bottom = div.style.bottom;
        bounceBox = document.createElement('div');
        bounceBox.classList.add('container');
        bounceBox.classList.add('bounce');
        //bounceBox.style.animationDelay = 200*i + "ms";
        ballBox = document.createElement('div');
        ballBox.id  = sName;
        ballBox.classList.add('Ball');
        ballBox.style.backgroundColor = "#" + Math.round(Math.random() * 0xffffff).toString(16);
        bounceBox.appendChild(ballBox);
        appearBox.appendChild(bounceBox);
        document.getElementById("dock").appendChild(appearBox);  
      }
    }
    await _sleep(200);
  }
}



function btn_Test_Click(msg)
{
  alert(msg);
}