function openHorloge()
{
    width = screen.width/2;
    height = screen.height/2 ;
    top = (screen.width/2)-(width/2);
    left = (screen.height/4)-(height/4);
    window.open('./components/horloge/horloge.html', 'test', 'width='+width+', height='+height+', top='+top+', left='+left+'');
}

function openTicTacToe()
{
    width = screen.width/2; 
    height = screen.height/2 ;
    top = (screen.width/2)-(width/2);
    left = (screen.height/4)-(height/4);
    window.open('./components/game/tictactoe.html', 'test', 'width='+width+', height='+height+', top='+top+', left='+left+'');
}

function openCalculatrice()
{
    width = screen.width/2; 
    height = screen.height/2 ;
    top = (screen.width/2)-(width/2);
    left = (screen.height/4)-(height/4);
    window.open('./components/calculatrice/calculatrice.html', 'test', 'width='+width+', height='+height+', top='+top+', left='+left+'');
}

function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    //ev.dataTransfer.setData("text/plain", ev.target.id);
    let img = new Image();
    img.src = './assets/images/png/file.png';
    ev.dataTransfer.setDragImage(img, 10, 10);
  }

window.addEventListener("DOMContentLoaded", () => {
// Get the element by id
const element = document.getElementById("p1");
const element2 = document.getElementById("folder");
const element3 = document.getElementById("file");
// Add the ondragstart event listener
element.addEventListener("dragstart", dragstart_handler);
element2.addEventListener("dragstart", dragstart_handler);
element3.addEventListener("dragstart", dragstart_handler);
});