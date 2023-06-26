var out_select = document.querySelector('#modalidade')
var tableWrapper = document.querySelector('#table')
let modalities = [
{id:"fifa_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[0,0,0,2,6,4,10,12,8], 
colocacao:["-","-","-","6º","4º","5º","2º","1º","3º"]
},
{id:"jd_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
},
{id:"tm_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
},
{id:"pebo_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
},
{id:"atle_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
},
{id:"xadrez_manha",
turmas:[ "9ºA","9ºB","9ºC","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
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
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
},
{id:"jd_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
},
{id:"pebo_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
},
{id:"atle_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
},
{id:"pb_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[0,0,0,0,0,0,0,0,0],  
colocacao:["-","-","-","-","-","-","-","-","-"]
},
{id:"queima_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
},
{id:"fut_tarde",
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC"] ,
pontos:[0,0,0,0,0,0,0,0,0], 
colocacao:["-","-","-","-","-","-","-","-","-"]
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
turmas:[ "6ºA","6ºB","6ºC","7ºA","7ºB","7ºC","8ºA","8ºB","8ºC","9ºA","9ºB","1ºA","1ºB","2ºA","2ºB","3ºA","3ºB"] ,
pontos:[0,0,0,0,0,0,0,0,0,0,0,2,6,4,10,12,8], 
colocacao:["-","-","-","-","-","-","-","-","-","-","-","6º","4º","5º","2º","1º","3º"]
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
