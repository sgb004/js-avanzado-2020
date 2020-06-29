function greeter(name){
	return function(){
		console.log('hola', name);
	}
}

var greetToMiguel = greeter('Miguel');
greetToMiguel();
greetToMiguel();
greetToMiguel();

console.log( greetToMiguel );