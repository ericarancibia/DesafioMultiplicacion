let valorNum = 0;

let inputNumero = () => {
    valorNum = parseInt(prompt('Ingrese un número entre 1 y 20.'));
     if (valorNum > 0 && valorNum <= 20) {
        return true;
    } else {
        return false;
    }
}

if (inputNumero()) {

    for (let i = 1; i <= valorNum; i++) {
        let resultado = i * valorNum;
        console.log(`${i} x ${valorNum} = ${resultado}`);
    }

    for (let i = 1; i <= valorNum; i++) {
        let res = 1;
        for (let j = 1; j <= i; j++) {

            res *= j;
        }
        console.log(`El factorial de ${i} es: ${res} `);
    }

}

else {
    alert("Número fuera de rango.");
}