//Consumir API Dólar

fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta => {
    return resposta.json()
}).then(economia => {
console.log(economia)
document.getElementById('valorDolar').innerHTML ="R$ " + economia.USDBRL.bid
})

async function buscarCotacao() {
    const url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL';

    try {
        const response = await fetch(url);
        const data = await response.json();

        // O objeto tem a chave "USDBRL"
        const dolar = data.USDBRL;

        // Valores máximo e mínimo do dia
        const maximo = dolar.high;
        const minimo = dolar.low;

        document.getElementById('maximo').textContent = `R$ ${parseFloat(maximo).toFixed(2)}`;
        document.getElementById('minimo').textContent = `R$ ${parseFloat(minimo).toFixed(2)}`;

    } catch (error) {
        console.error('Erro ao buscar cotação:', error);
        document.getElementById('maximo').textContent = 'Erro ao carregar';
        document.getElementById('minimo').textContent = 'Erro ao carregar';
    }
}

buscarCotacao();