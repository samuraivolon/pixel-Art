//Funciones onload
$(document).ready(paletaDinamica);
$(document).ready(crearGrilla);
$(document).ready(seleccionarColor);


///
var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
//variables globales
var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
var pixel = document.getElementsByClassName("pixel");


// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function() {
    // Se guarda el color de la rueda en colorActual
  colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
  $("#indicador-de-color").css("background-color", colorActual);
  colorSeleccionado = colorActual;

  })
);

//Funcion que recorre toda la lista de colores y los agrega a la paleta, creandola dinamicamente
function paletaDinamica(){
  for (var i = 0; i <= nombreColores.length; i++){
    var color = nombreColores[i];
    var divPaleta = document.createElement("div");
    divPaleta.style.backgroundColor = color;
    divPaleta.classList.add("color-paleta");
    paleta.appendChild(divPaleta);
  }
}

//Funcion que crea la grilla sobre la cual vamos a poder jugar
//Esta grilla sera de 1750 pixeles
var divPixel ;
function crearGrilla(){
  for (var  i = 0; i <= 1750; i++){
    var divPixel = document.createElement("div");
    divPixel.setAttribute("class","pixel")
    grillaPixeles.appendChild(divPixel);
  }
}
//Funcion utilizada para poder seleccionar un color de la paleta de colores
var colorSeleccionado ;
function seleccionarColor(){
  $(".color-paleta").click(function () {
  colorSeleccionado = $(this).css("background-color");
  $("#indicador-de-color").css("background-color",colorSeleccionado);
  });
}

//Funcion que permitie al usuario poder pintar clickeando en los pixeles con el mouse
grillaPixeles.addEventListener('mousedown', function(e){
  e.target.style.backgroundColor = colorSeleccionado;
});


//Funcion con la cual detectamos si el mouse se encuentra apretado o no

function mouseStatus (){
  var mouseDown = false;
  grillaPixeles.addEventListener('mouseout', function(e){
    if(mouseDown){
      console.log("mouse apretado");
      e.target.style.backgroundColor = colorSeleccionado;
    }
    else
    {
      console.log("mouse no apretado");
    }
  });
  grillaPixeles.mouseDown(function(){
    mouseDown = true;
  })
  grillaPixeles.mouseup(function(){
    mouseDown = false;
  })
}