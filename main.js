"use strict"
const Pokemon = require('./pokemon')
const PokemonList = require('./pokemonlist')
const fs = require('fs');

const data = fs.readFileSync('./pokemons.json', "utf8");
const pokemons = JSON.parse(data);
const objects = pokemons.map( obj => new Pokemon(obj.name, obj.level) );
const found = new PokemonList(objects.slice(0, 7));
const lost = new PokemonList(objects.slice(7));
 

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
////Осуществим перемещение
const pokemon = lost.splice(lost.indexOf(lost.filter(element => element.name == 'Metapod')[0]), 1)[0];
found.add(pokemon.name, pokemon.level);
console.log("\nПосле перемещения:");
console.log("Список found:");
found.show();
console.log("Список lost:");
lost.show();

//Выведем максимальные значения
console.log("\nМаксимальные значения");
console.log('В списке found:');
found.max().show();
console.log('В списке lost:');
lost.max().show();

//ЧАСТЬ 1
//В задании необходимо использовать возможности ES2015 по максимуму.
//— Создать класс Pokemon , конструктор которого принимает имя и уровень в качестве аргумента. Все экземпляры этого класса должны иметь общий метод show , который выводит информацию о покемоне.
// — Создать класс PokemonList , который в качестве аргументов принимает любое количество покемонов. Экземпляры этого класса должны обладать всеми функциями массива. А так же иметь метод add , который принимает в качестве аргументов имя и уровень, создает нового покемона и добавляет его в список.
//88
//ЧАСТЬ 2
//— Создать два списка покемонов и сохранить их в переменных lost и found . Имена и уровни придумайте самостоятельно.
// — Добавить несколько новых покемонов в каждый список.
// — Добавить спискам покемонов метод show , который выводит информацию о покемонах и их общее количество в списке.
// — Перевести одного из покемонов из списка lost в список found
//89
//НА ЗАЧЕТ С ОТЛИЧИЕМ
//— Добавить спискам покемонов метод max , который возвращает покемона максимального уровня.
// — Переопределите и используйте метод valueOf у покемонов, для решения этой задачи.