// Carne = 400gr por pessoa + de 6 horas = 650
// Cerveja = 1200ml por pessoa + de 6 horas = 2000ml
// refrigerante = 1000ml por pessoa + de 6hr = 1500ml
// crianças valem 0,5

let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');
let inputNaoBebem = document.getElementById('naobebe')
let resultado = document.getElementById('resultado');

function calcular() {
	let adultos = inputAdultos.value;
	let criancas = inputCriancas.value;
	let naoBebem = inputNaoBebem.value;
	let duracao = inputDuracao.value;

	let qtCarne = carnePerCapita(duracao) * adultos + (carnePerCapita(duracao) / 2) * criancas;
	let qtCerveja = cervejaPerCapita(duracao) * (adultos - naoBebem);
	let qtBebida = bebidaPerCapita(duracao) * adultos + (bebidaPerCapita(duracao) / 2) * criancas;

	resultado.innerHTML = `<p><strong>Carne: </strong>${qtCarne / 1000}Kg</p>`
	resultado.innerHTML += `<p><strong>Cerveja: </strong>${Math.ceil(qtCerveja / 355)} latas(355ml)</p>`
	resultado.innerHTML += `<p><strong>Bebidas: </strong>${Math.ceil(qtBebida / 2000)} Garrafas(2L)</p>`
	resultado.innerHTML += `<button onclick="fechar()">Fechar aba</button>`
}

function carnePerCapita(duracao) {
	if (duracao >= 6) {
		return 650;
	} else {
		return 400;
	}
}
function cervejaPerCapita(duracao) {
	if (duracao >= 6) {
		return 2000;
	} else {
		return 1200;
	}
}
function bebidaPerCapita(duracao) {
	if (duracao >= 6) {
		return 1500;
	} else {
		return 1000;
	}
}

function fechar() {
	resultado.innerHTML = "";
}
