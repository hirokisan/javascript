/* 1. Put your name
   2. Refresh your name

   error
   1. If you dont use window.onload, may cause error such as "Uncaught TypeError: Cannot read property 'addEventListener' of null"
*/
window.onload = function()
{
	var para = document.querySelector('p');

	para.addEventListener('click', updateName);

	function updateName() {
		var name = prompt('Enter a new name');
		para.textContent = 'Player 1: ' + name;
	}
};

