import format from "date-fns/format";
//import es from "date-fns/locale";

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.btn').addEventListener('click', function(){
        let dia = document.getElementById("dia").value;
        let mes = parseInt(document.getElementById("mes").value) - 1;
        let anyo = document.getElementById("anyo").value;
        let fecha = format(new Date(anyo, mes, dia), 'dd/MM/yyyy');

        document.getElementById('date').innerText = fecha;
    });
});