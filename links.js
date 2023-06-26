var out_select = document.querySelector('#modalidade')
var imageWrapper = document.querySelector('.imageWrapper')
let modalities = [
{id:"fifa_manha",
image:"./images/chave/fifa_manha.png"
},
{id:"jd_manha",
image: "./images/chave/justdance_manha.png"
},
{id:"tm_manha",
image: "./images/chave/tm_manha.png"
},
{id:"pebo_manha",
image: "./images/chave/pebo_manha.png"
},
{id:"atle_manha",
image: "./images/chave/atle_manha.png"
},
{id:"xadrez_manha",
image: "./images/chave/xadrez_manha.png"
},
{id:"fut_manha",
image: "./images/chave/fut_manha.png"
},
{id:"volei_manha",
image: "./images/chave/volei_manha.png"
},
{id:"fila_manha",
image: "./images/chave/fila.png"
},
{id:"queima_manha",
image: "./images/chave/queima_manha.png"
},


{id:"fifa_tarde",
image: "./images/chave/fifa_tarde.png"
},
{id:"jd_tarde",
image: "./images/chave/justdance_tarde.png"
},
{id:"pebo_tarde",
image: "./images/chave/pebo_tarde.png"
},
{id:"atle_tarde",
image: "./images/chave/atle_tarde.png"
},
{id:"pb_tarde",
image: "./images/chave/pique_bandeira.png"
},
{id:"queima_tarde",
image: "./images/chave/queima_tarde.png"
},
{id:"fut_tarde",
image: "./images/chave/fut_tarde.png"
},
{id:"volei_tarde",
image: "./images/chave/volei_tarde.png"
},
{id:"fila_tarde",
image: "./images/chave/fila.png"
}
];

let found
let image

function Newpage() {
  image = document.createElement('p');
  imageWrapper.appendChild(image);
}

function changeRead (){
    found = modalities.find(element => element.id == out_select.value);

    imageWrapper.removeChild(image);
    image = document.createElement('img');
    image.src = found.image

    imageWrapper.appendChild(image);
}