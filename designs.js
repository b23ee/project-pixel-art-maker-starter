
console.log("running global js");

// define parent element the <table id="pixelCanvas">
let gridParent = document.querySelector('#pixelCanvas');
console.log(gridParent);
// Create variable for color input
let gridColor = document.querySelector('#colorPicker');

// Create variables for size inputs
let gridHeight;
let gridWidth;

// When size is submitted by the user, call makeGrid()
function makeGrid() {
	//clears out the existing grid
	while (gridParent.firstChild) {
		gridParent.firstChild.remove();
	}
	//defines the current value of height and width size inputs
	gridHeight = document.querySelector('#inputHeight').value;
	gridWidth = document.querySelector('#inputWidth').value;
	//checks that things are being called properly
	console.log('function makeGrid called ' + gridHeight + ' ' + gridWidth);
	//creates the row in the first for loop, then adds cells in the nested for loop
	for(let i = 1; i <= gridHeight; i++) {
		//define the child element to be created <tr>
		const newRow = document.createElement('tr');
		gridParent.appendChild(newRow);
		for(let i=1; i <= gridWidth; i++) {
			//define the child element to be created <td>
			const newCell = document.createElement('td');
			newCell.setAttribute('class', 'paintMe');
			newRow.appendChild(newCell);
			newCell.addEventListener('click', function(evt) {
				console.log('listen to ' + newCell, gridColor.value);
				newCell.style.backgroundColor = gridColor.value;
			});
		};
	};
};

//event listener for size changes, while preventing default form submit action to reload the page
document.querySelector('#sizePicker').addEventListener('submit', function(evt) {
	evt.preventDefault();
	makeGrid();
});

//event listener for selected background color in <td>
document.querySelector('#colorPicker').addEventListener('click', function(evt) {
	//gridColor.setAttribute('value');
	console.log('the value = ' + gridColor.value);
});






