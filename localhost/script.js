var btnElement = document.getElementById("menu-btn-1");
btnElement.className += " active";
function changeMenu(menuNumber) {
    var imgElement = document.getElementById("menu-img");
    var btnElement = document.getElementById("menu-btn-" + menuNumber);
    switch (menuNumber) {
      case 1:
        imgElement.src = "img/menu1.png";
        break;
      case 2:
        imgElement.src = "img/menu2.png";
        break;
      case 3:
        imgElement.src = "img/menu3.png";
        break;
      default:
        break;
    }
    
    // Установка активной кнопки
    var activeBtn = document.getElementsByClassName(" active");
    if (activeBtn.length > 0) {
      activeBtn[0].className = activeBtn[0].className.replace(" active", "");
    }
    btnElement.className += " active";
  }