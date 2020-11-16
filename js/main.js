function btn_Test_Click(msg)
{
  alert(msg);
}

function ChangePosition()
{
    element = document.getElementById('ball1');

    cnt = document.styleSheets[0];

    element.classList.remove("bounce");

    element.offsetWidth = element.offsetWidth;

    element.classList.add("bounce");
}