const _sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const shiftSpeed = 3.5

var moveWay = shiftSpeed;
var preWay = 0;
var RainList = [];

fallRain();

function MoveRain(event)
{
  if((preWay - event.pageX) > 0) moveWay = -shiftSpeed;
  else moveWay = shiftSpeed;

  preWay = event.pageX;
}

async function fallRain()
{
  nCnt  = 0;
  nLoop = 0;
  $dock = $("#dock");

  while(true)
  {
    if(nLoop > 10)
    {
      $heart = CreateHeart(nCnt++);

      nLeft = Math.round(Math.random() * 140);
  
      $heart.css({
        'left' : nLeft-20 + "%",
        'top' : "0%",
      });
      
      RainList.push($heart);
      $dock.append($heart);

      nLoop = 0;
    }

    dockHeight = $("#dock").height() - 20;
    dockWidth  = $("#dock").width();

    RainList.forEach(element=>
    {
      temp = element;

      if(dockHeight > temp.offset().top) 
      {
        temp.offset({top : temp.offset().top + 4.5});
      
        if((moveWay ==  shiftSpeed && temp.offset().left < (dockWidth + 20)) ||
           (moveWay == -shiftSpeed && temp.offset().left > -40))
          temp.offset({left : temp.offset().left + moveWay});
      }
      else
      {
        sid = temp.attr('id');

        RainList.splice(0, 1);

        $('#'+sid).remove();
      }
    });

    await _sleep(1);

    nLoop++;
  }
}

function CreateHeart(No)
{
  //<img class="Shake" src="Resource/heart.svg">
  $heart = $('<img>');//document.createElement('img');
  $heart.addClass('Shake');
  $heart.attr("src",'Resource/heart.svg');
  $fall = $("<div id='h"+No+"' style='position: absolute'></div>");
  //$fall.addClass('Fall');
  $fall.append($heart);

  return $fall;
}