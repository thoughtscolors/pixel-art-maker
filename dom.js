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

  let button = document.getElementById('changeColor')

  button.addEventListener("click", function(event) {
    let canvas = document.getElementsByClassName("canvas")[0];
    let color = document.getElementsByName("button");
    console.log("this is the canvas", canvas);
    console.log(color);
    canvas.style.color = "red";
    event.target.style.background = "blue";
    let pixel = document.getElementsByClassName("divpixels")
    number = parseInt(Math.random() * 100);
    console.log(number, "loop length");
    console.log(pixel.length, "this is pixel array length");

    for (var i = 0; i < number; i++) {

      numberpixels = parseInt(Math.random() * 900);
      console.log(numberpixels, "how many pixels");
      selectedpixel = pixel[numberpixels];
      console.log(selectedpixel, "selected pixel");
      selectedpixel.style.backgroundColor = getRandomColor();

    }
    // canvas.innerHTML
  });
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

function selectColor() {

}


document.addEventListener('DOMContentLoaded', function() {
  console.log("we have started");
  started();
});

function myCreateFunction() {
  var canvas = document.getElementsByClassName("canvas")[0];
  console.log(canvas);
  for (var i = 0; i < 900; i++) {
    event.target.style.color = "red";

    var div = document.createElement("div");
    div.classList.add("divpixels");
    canvas.appendChild(div);
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
