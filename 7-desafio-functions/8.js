/*
1 - 1Escreva um programa onde, você cria uma função geradora de desconto.
2 - A função aceita 4 parâmetros (Nome do cliente, valor total da compra, 
    um booleano que diz se é a primeira compra do cliente ou não, um booleando que 
    diz se o cliente vai pagar a vista ou não)
Os descontos funcionam da seguinte forma:
3 - Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 =&gt; 30% de desconto
4 - Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior 
que R$ 500 =&gt; 25% de desconto
5 - Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 =&gt; desconto de 20%
6 - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 =&gt; 20% de
desconto - 
7 - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e 
maior que R$ 500 =&gt; 15% de desconto
8 - Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 =&gt; desconto de 10%
9  - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 =&gt; 20% de desconto
10 - Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 =&gt; 15% de desconto
11 - Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 =&gt; desconto de 10%
12 - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 =&gt; 10% de desconto - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 =&gt; 5% de desconto
13 - Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 =&gt; SEM DESCONTO- A função deve imprimir na tela:
14 - Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.
15 - Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.
*/


function calculateDiscout(name, value, isFirsPurchase, isCashPayment) {

    if (isFirsPurchase && isCashPayment) {
        if (value > 1000) { }
        else if (value < 500) { }
        else { }
    }

    if (isFirsPurchase && !isCashPayment) {
        if (value > 1000) { }
        else if (value < 500) { }
        else { }

    }
    if (!isFirsPurchase && isCashPayment) {
        if (value > 1000) { }
        else if (value < 500) { }
        else { }

    }
    if (!isFirsPurchase && !isCashPayment) {
        if (value > 1000) { }
        else if (value < 500) {
        Math.random() * (20 - 10) + 10;

         }
        else { }

    }
}

calculateDiscout ()