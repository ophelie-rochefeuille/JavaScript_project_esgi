/*export let test = "hello";
//export function test2() {
  //  return "JE suis Hello"
}
//export let horloge = "/components/horloge/horloge.html";
//export let calculatrice = "/components/calculatrice/calculatrice.html";
//export let ticTacToe = "/components/tictactoe/tictactoe.html";
//export let parametre = "/components/parametres/parametre.html";
// export {test, test2};*/

let pwd = "javascript"
let pwdEnter = document.querySelector('.password').value
function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.classList.add('jw-modal-open');
}

openModal("1")
// close currently open modal
function closeModal() {
    if(document.querySelector('.password').value == pwd){
        document.querySelector('.jw-modal.open').classList.remove('open');
        document.body.classList.remove('jw-modal-open');
    }

}

window.addEventListener('load', function() {

    document.addEventListener('click', event => {
        if (event.target.classList.contains('jw-modal')) {
            console.log(document.querySelector('.password').value)
            closeModal();
        }
    });
});

