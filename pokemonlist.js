'use strict'
const Pokemon = require('./pokemon');
module.exports = class PokemonList extends Array {

	show() {
		console.log('Количество покемонов: ' + this.length);
		this.forEach((item) => item.show());
	}
	
	add(name, level) {
		this.push(new Pokemon(name, level));
	}
	
	max() {
		return this.sort(((a, b) => {return a-b})).pop();
	}
};





