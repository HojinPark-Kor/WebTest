const _sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

var moveWay = 1;
var preWay = 0;
var RainList = [];

MakeRain();
fallRain();

function MoveRain(event)
{
  if((preWay - event.pageX) > 0) moveWay = -1;
  else moveWay = 1;

  preWay = event.pageX;
}

async function MakeRain()
{
  $dock = $("#dock");

  nCnt = 0;

  while(true)
  {
    $heart = CreateHeart(nCnt);

    nLeft = Math.round(Math.random() * 93);

    $heart.css({
      'left' : nLeft + "%",
      'top' : "0%",
    });
    
    RainList.push($heart);
    $dock.append($heart);

    await _sleep(Math.round(Math.random() * 100));
  }
}

async function fallRain()
{
  turn = 1;

  while(true)
  {
    dockHeight = $("#dock").height() - 20;
    dockWidth  = $("#dock").width();

    RainList.forEach(element=>
    {
      temp = element;

      if(dockHeight > temp.offset().top) 
      {
        temp.offset({top : temp.offset().top+1.5});
      
        if((moveWay == 1 && temp.offset().left < (dockWidth - 20)) ||
          (moveWay == -1 && temp.offset().left > 0))
          temp.offset({left : temp.offset().left+moveWay});
      }
      else
      {
        sid = temp.attr('id');

        RainList.splice(0, 1);

        $('#'+sid).remove();
      }
    });

    await _sleep(1);
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