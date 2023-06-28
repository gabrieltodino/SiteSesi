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
pontos:[0,0,0,16,8,16,10,24,8], 
colocacao:["-","-","-","2º","4º","2º","3º","1º","4º"]
},
{id:"fut_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
},
{id:"volei_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
},
{id:"fila_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
},
{id:"queima_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
},


{id:"fifa_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[10,2,6,6,10,2,0,0,0], 
colocacao:["1º","3º","2º","2º","1º","3º","-","-","-"]
},
{id:"jd_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[2,10,6,2,6,10,10,6,2], 
colocacao:["3º","1º","2º","3º","2º","1º","1º","2º","3º"]
},
{id:"pebo_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
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
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
},
{id:"fut_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[10,2,6,10,6,2,2,6,10], 
colocacao:["1º","3º","2º","1º","2º","3º","3º","2º","1º"]
},
{id:"volei_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
},
{id:"fila_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
},


{id:"geral",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC","9ºA","9ºB","9ºc","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[0,0,0,0,0,0,0,0,0,34,30,26,24,26,30,40,50,40], 
colocacao:["-","-","-","-","-","-","-","-","-","1º","2º","3º","5º","4º","3º","2º","1º","2º"]
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
    //Insert a new row element into the table element
      table.insertRow();
    //Iterate over every index(cell) in each array(row)
      for (let cell of row) {
    //While iterating over the index(cell)
    //insert a cell into the table element
        let newCell = table.rows[table.rows.length - 1].insertCell();
    //add text to the created cell element
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
      //create a Table Object
      table = document.createElement('tbody');

      //iterate over every array(row) within tableArr
      for (let row of tableArr) {
      //Insert a new row element into the table element
        table.insertRow();
      //Iterate over every index(cell) in each array(row)
        for (let cell of row) {
      //While iterating over the index(cell)
      //insert a cell into the table element
          let newCell = table.rows[table.rows.length - 1].insertCell();
      //add text to the created cell element
          newCell.textContent = cell;
        }
      }
      tableWrapper.appendChild(table);
}
