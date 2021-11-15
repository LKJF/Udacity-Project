// Select color input by getting element from HTML

let inputColor = document.getElementById('colorPicker');

// Select table element from HTML

let myTable = document.getElementById('pixelCanvas');

// Select size input by getting elements from HTML

let cellHeight = document.getElementById('inputHeight');

let cellWidth = document.getElementById('inputWidth');

let picker = document.getElementById('sizePicker');

//define makeGrid function to create grid
function makeGrid(cellHeight, cellWidth) {
  myTable.innerHTML = "";
for (var i = 0; i <= (cellHeight.value - 1); i++) {
  var gridColumn = document.createElement("tr");
  for (var j = 0; j <= (cellWidth.value -1); j++) {
  var gridCell = document.createElement("td");
  gridColumn.appendChild(gridCell);

};
myTable.appendChild(gridColumn);

//event listner to add color
gridColumn.addEventListener('click', function (color) {
  if (color.target.style.backgroundColor){
    color.target.removeAttribute('style');
  } else {
    color.target.style.backgroundColor = inputColor.value;
  };
});
};
};

// when size is submitted by the user, call makeGrid()
picker.addEventListener('submit', function (event) {
// prevent default submitting
event.preventDefault();
makeGrid(cellHeight, cellWidth);
});
