/*

	Author: Binard Camille

*/

function EventEmitter(){
	//HashMap[ event -> [fn1, fn2, ...]]
	this.callbacks = {};
}

EventEmitter.prototype =
{
	// ajout d'un event avec sa fonction associée
	on: function(event, fn)
	{
		if(!this.callbacks.hasOwnProperty(event))
		{
			this.callbacks[event] = [];
		}
		this.callbacks[event].push(fn);
		return this;
	},

	// retrait de toutes les fonctions d’un event
	off: function(event)
	{
		this.callbacks = []; 
		return this; 
	},
	
	// on lance les fonctions de l'event
	emit: function(event /*, args */)
	{	if(typeof event === "undefined"){
			this.callbacks = {};
		}
		var args = Array.prototype.slice.call(arguments);
		if(this.callbacks.hasOwnProperty(event))
		{
			this.callbacks[event].forEach(function(f)
		{
		f.apply(this, args);
		});
		return this;
		}
	},

	// permet de lancer une fontion une seule et unique fois --> on apelle la fonction times
	once: function(event, fn)
	{
		this.time(event, 1, fn);
		return this;
	},

	// permet de lancer une fontion num fois 
	times: function(event, num, fn)
	{
		var n=0;
		if(!this.callbacks.hasOwnProperty(event))
		{
			this.callbacks[event]=[];
		}
		this.callbacks[event].push({"fn" : fn,"num" : num});
		return this;
	}
}
};
