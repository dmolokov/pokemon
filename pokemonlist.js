"use strict"
const Pokemon = require('./pokemon')
module.exports = class PokemonList extends Array
{
	constructor(pokemons_array)
	{
		super();
		pokemons_array.forEach((item) => this.push(item));
	}
	show()
	{
		console.log('Количество покемонов: ' + this.length);
		this.forEach((item) => item.show());
	}
	add(name, level)
	{
		this.push(new Pokemon(name, level));
	}

	max()
	{
		let maximum_in_list = this[0].valueOf();
		for(var i in this)
		{
			if(this[i].valueOf() > maximum_in_list) maximum_in_list = this[i].valueOf();
		}
		const pokemons_array = this.filter(element => element.valueOf() == maximum_in_list);
		return pokemons_array[0];
	}
};





