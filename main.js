'use strict'

const fs = require('fs');
const Pokemon = require('./pokemon');
const PokemonList = require('./pokemonlist');
const pokemons = JSON.parse(fs.readFileSync('./pokemons.json', "utf8"));
const objects = pokemons.map( obj => new Pokemon(obj.name, obj.level) );
const found = new PokemonList(...objects.slice(0, 7));
const lost = new PokemonList(...objects.slice(7));
 
console.log("\nИсходное состояние:");
console.log("Список found:");
found.show();
console.log("Список lost:");
lost.show();

////Добавим в список напрямую
found.add('Beedrill', 18);
lost.add('Pidgey', 91);
console.log("\nПосле добавления:");
console.log("Список found:");
found.show();
console.log("Список lost:");
lost.show();

//Осуществим перемещение
found.push(lost.splice(lost.indexOf(lost.filter(element => element.name == 'Metapod')[0]), 1)[0]);
console.log("\nПосле перемещения:");
console.log("Список found:");
found.show();
console.log("Список lost:");
lost.show();

//Выведем максимальные значения
console.log("\nМаксимальные значения");
console.log('В списке found:');
//console.log(found.max());
found.max().show();
console.log('В списке lost:');
lost.max().show();