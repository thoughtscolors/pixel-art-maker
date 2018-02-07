document.addEventListener('DOMContentLoaded', function(event) {
  console.log("DOM loaded OK");
});
//   var newDiv = document.createElement("div");
//   var currentDiv = document.getElementById('main-container');
//   console.log(newDiv);
//   console.log(currentDiv);
//   currentDiv.append(newDiv);
//   console.log(currentDiv);
// });



// function generate_table() {
//   // var elements = document.getElementsByName('elements');
//   var tbody = document.getElementById("tbody");
//   var row = tbody.insertRow();
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   var cell3 = row.insertCell(2);
//   var cells = Object.keys(elements[0]);
//   cell1.innerHTML = elements[0].number;
//   cell2.innerHTML = elements[0].symbol;
//   cell3.innerHTML = elements[0].name;
// }



function started() {

  let paintButtons = document.querySelectorAll(".paintButton")
  paintButtons.forEach(function(button) {
    // add an event listener to each button
    button.addEventListener('click', selectColor)
  })

  let button = document.getElementById('changeColor')

  let test = document.getElementsByClassName("test")[0]
  test.addEventListener("click", colorChange);

  let randomColorButton = document.getElementById("randomColor");
  randomColorButton.addEventListener("click", randomColor)


  button.addEventListener("click", function(event) {
    let canvas = document.getElementsByClassName("canvas")[0];
    let color = document.getElementsByName("button");

    console.log("this is the canvas", canvas);
    console.log(color);
    canvas.style.color = "red";
    event.target.style.color = "blue";
    let pixel = document.getElementsByClassName("divpixels")
    number = parseInt(Math.random() * 200);
    console.log(number, "loop length");
    console.log(pixel.length, "this is pixel array length");

    for (var i = 0; i < number; i++) {

      numberpixels = parseInt(Math.random() * 900);
      console.log(numberpixels, "how many pixels");
      selectedpixel = pixel[numberpixels];
      console.log(selectedpixel, "selected pixel");
      selectedpixel.style.backgroundColor = getRandomColor();

    }
  });

}

function colorChange () {
  event.target.style.backgroundColor = getRandomColor();
}

function randomColor (event) {
  currentColor = getRandomColor();
  var updateCurrentColorButton = document.getElementById("current");
  updateCurrentColorButton.style.backgroundColor = currentColor;
}


var myVar;

function myFunction() {
  myVar = setInterval(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var currentColor;

function selectColor(event) {
  currentColor = window.getComputedStyle(event.target).getPropertyValue("background-color");
  var updateCurrentColorButton = document.getElementById("current");
  updateCurrentColorButton.style.backgroundColor = currentColor;
}

function changeColor () {
  event.target.style.backgroundColor = currentColor;
}




document.addEventListener('DOMContentLoaded', function() {
  console.log("we have started");
  started();
});

// createAllPixels
function myCreateFunction() {
  var canvas = document.getElementsByClassName("canvas")[0];
  console.log(canvas);
  for (var i = 0; i < 900; i++) {
    setTimeout(function() {
      // could be its own function called createSinglePixel
      var div = document.createElement("div");
      div.classList.add("divpixels");
      div.addEventListener("click", changeColor);
      canvas.appendChild(div);
    }, 2  * i)
  }
}

// document.addEventListener('DOMContentLoaded', function() {
//   var elements = [{
//       name: 'Hydrogen',
//       number: 1,
//       symbol: 'H'
//     },
//     {
//       name: 'Mercury',
//       number: 80,
//       symbol: 'Hg'
//     },
//     {
//       name: 'Lead',
//       number: 82,
//       symbol: 'Pb'
//     },
//     {
//       name: 'Bismuth',
//       number: 83,
//       symbol: 'Bi'
//     },
//     {
//       name: 'Neon',
//       number: 10,
//       symbol: 'Ne'
//     }
//   ];
//   console.log(elements[0].name);
//
//   function generate_table() {
//     var elements = document.getElementsByName('elements');
//     var tbody = document.getElementById("tbody");
//     var row = tbody.insertRow();
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cells = Object.keys(elements[0]);
//     console.log(elements[0].length);
//     for (var i = 0; i < cells; i++) {
//       tbody.innerHTML = tbody.insertRow();
//       cell1.innerHTML = elements[i].number;
//       cell1.innerHTML = elements[i].symbol;
//       cell1.innerHTML = elements[i].name;
//     }
//   }
// });


// function generate_table() {
//   // var elements = document.getElementsByName('elements');
//   var tbody = document.getElementById("tbody");
//   var row = tbody.insertRow();
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   var cell3 = row.insertCell(2);
//   var cells = Object.keys(elements[0]);
//   console.log(elements[0].length);
//   for (var i = 0; i < cells; i++) {
//     tbody.innerHTML = row;
//     cell1.innerHTML = elements[i].number;
//     cell1.innerHTML = elements[i].symbol;
//     cell1.innerHTML = elements[i].name;
//     console.log(row);
//     console.log(cell1, cell2, cell3);
//   }
// }
// function generate_table() {
//   var elements = document.getElementsByName('elements');
//   var tbody = document.getElementById("tbody");
//   var row = tbody.insertRow(0);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   var cell3 = row.insertCell(2);
//   var cells = Object.keys(elements[0]);
//   console.log(elements[0].length);
//   for (var i = 0; i < cells; i++) {
//   cell1.innerHTML = elements[i].number;
//   cell1.innerHTML = elements[i].symbol;
//   cell1.innerHTML = elements[i].name;
//   }
// }



// document.addEventListener('DOMContentLoaded', function() {
//   var elements = [{
//       name: 'Hydrogen',
//       number: 1,
//       symbol: 'H'
//     },
//     {
//       name: 'Mercury',
//       number: 80,
//       symbol: 'Hg'
//     },
//     {
//       name: 'Lead',
//       number: 82,
//       symbol: 'Pb'
//     },
//     {
//       name: 'Bismuth',
//       number: 83,
//       symbol: 'Bi'
//     },
//     {
//       name: 'Neon',
//       number: 10,
//       symbol: 'Ne'
//     }
//   ];
//   var tbody = document.getElementById("tbody");
//   var cells = [];
//   var tr = [];
//   cells = Object.keys(elements[0]);
//   for (i = 0; i < elements.length; i++) {
//     tr.unshift("<tr>");
//
//     // var row = tbody.insertRow(i);
//     for (var key in elements[i]) {
//       // var cell = row.insertCell(j);
//       tr.unshift("<td>" + elements[i][key] + "</td>");
//
//     }
//
//
//   }
//   tr.push("</tr>");
//   tr.unshift("<tr>");
//   console.log(tr);
//   console.log(tr.join("\n"));
//   document.getElementById("tbody").innerHTML = tr;
// });
