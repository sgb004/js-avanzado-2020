import {validateEmail as isValidateEmail, emailReg} from './modules/validate-email.js';
import tresMeses from './modules/meses.js';
console.log(tresMeses);

var validateEmail = true;

document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('email').addEventListener('input', function(){
		let msg = isValidateEmail(this.value) ? 'El email es válido' : 'Eso no es un email';
		document.getElementById('msg').innerText = msg;
	});
})