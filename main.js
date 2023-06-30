var out_select = document.querySelector('#modalidade')
var tableWrapper = document.querySelector('#table')

let modalities = [
{id:"fifa_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[10,6,2,2,6,4,10,12,8], 
colocacao:["1º","2º","3º","6º","4º","5º","2º","1º","3º"]
},
{id:"jd_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[10,6,2,2,4,8,12,10,6], 
colocacao:["1º","2º","3º","6º","5º","3º","1º","2º","4º"]
},
{id:"tm_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[12,12,12,18,6,14,10,22,14], 
colocacao:["-","-","-","2º","5º","3º","4º","1º","3º"]
},
{id:"pebo_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[2,6,10,2,10,4,8,6,12], 
colocacao:["3º","2º","1º","6º","2º","5º","3º","4º","1º"]
},
{id:"atle_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[6,10,2,4,6,2,8,10,12], 
colocacao:["2º","1º","3º","5º","4º","6º","3º","2º","1º"]
},
{id:"xadrez_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[4,16,16,16,8,16,10,24,8], 
colocacao:["3º","1º","1º","2º","4º","2º","3º","1º","4º"]
},
{id:"fut_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[20,4,12,18,6,8,18,16,16], 
colocacao:["1º","3º","2º","1º","3º","4º","1º","2º","2º"]
},
{id:"volei_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[6,10,2,8,2,4,6,12,10], 
colocacao:["2º","1º","3º","3º","6º","5º","4º","1º","2º"]
},
{id:"fila_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
},
{id:"queima_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[6,2,10,6,8,2,10,12,4], 
colocacao:["2º","3º","1º","4º","3º","6º","2º","1º","5º"]
},

{id:"fifa_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[10,2,6,6,10,2,10,2,6], 
colocacao:["1º","3º","2º","2º","1º","3º","1º","3º","2º"]
},
{id:"jd_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[2,10,6,2,6,10,10,6,2], 
colocacao:["3º","1º","2º","3º","2º","1º","1º","2º","3º"]
},
{id:"pebo_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[10,2,6,10,6,2,10,2,6], 
colocacao:["1º","3º","2º","1º","2º","3º","1º","3º","2º"]
},
{id:"atle_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[6,10,2,2,10,6,10,6,2], 
colocacao:["2º","1º","3º","3º","1º","2º","1º","2º","3º"]
},
{id:"pb_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[2,10,6,10,6,2,6,10,2],  
colocacao:["3º","1º","2º","1º","2º","3º","2º","1º","3º"]
},
{id:"queima_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[2,10,6,6,10,2,10,6,2], 
colocacao:["3º","1º","2º","2º","1º","3º","1º","2º","3º"]
},
{id:"fut_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[10,2,6,10,6,2,2,10,6], 
colocacao:["1º","3º","2º","1º","2º","3º","3º","1º","2º"]
},
{id:"volei_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[10,6,2,2,10,6,2,10,6], 
colocacao:["1º","2º","3º","3º","1º","2º","3º","1º","2º"]
},
{id:"fila_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
},


{id:"geral",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC","9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[52,52,40,48,64,32,70,62,42,76,72,78,76,56,62,92,124,90], 
colocacao:["4º","4º","8º","6º","2º","9º","1º","3º","7º","4º","6º","7º","9º","8º","5º","2º","1º","3º"]
}
];

let table;
var tableArr = [["","",""]]
let found

function Newpage() {
  found = modalities.find(element => element.id == "geral");
  table = document.createElement('tbody');
  
  for(i=0; i < found.turmas.length; i++ ){
    tableArr.push([found.turmas[i], found.colocacao[i],found.pontos[i]])
  }

  for (let row of tableArr) {
      table.insertRow();
    
      for (let cell of row) {
        let newCell = table.rows[table.rows.length - 1].insertCell();
        newCell.textContent = cell;
      }
    }
    tableWrapper.appendChild(table);
}

function changeRead (){
    found = modalities.find(element => element.id == out_select.value);
    tableArr = []

    for(i=0; i < found.turmas.length; i++ ){
        tableArr.push([found.turmas[i], found.colocacao[i],found.pontos[i]])
    }

      tableWrapper.removeChild(table);
      table = document.createElement('tbody');

      for (let row of tableArr) {
        table.insertRow();
        for (let cell of row) {
          let newCell = table.rows[table.rows.length - 1].insertCell();
          newCell.textContent = cell;
        }
      }
      tableWrapper.appendChild(table);
}
