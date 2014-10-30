TP-JS-EventEmitter
==================

//Tests de l'EventEmitter :

em.on("event",console.log.bind(console)); 
em.emit("event",2); 

//Test du once :

em.once("event1", function(){console.log("Should only be printed once");}) 
em.emit("event1",2);
em.emit("event1",3);

//Test du times :
em.times("event2",4,console.log.bind(console)); 
em.emit("event2","1"); 
em.emit("event2","2"); 
em.emit("event2","3"); 
em.emit("event2","4"); 
em.emit("event2","5");
