var Produto = "Bonés";
var Quantidade = 20;
var Unidade = 15;
var total = Quantidade * Unidade;
var desconto = 100 * 0.03;
var totalpag = total - desconto;

document.write("Produto: "+ Produto);
document.write("<br>Quantidade Adquirida : " + Quantidade );
document.write("<br>Preço por unidade : " + Unidade);
document.write("<br>Total: " + total);
document.write("<br>Desconto: " + desconto);
document.write("<br>Total a pagar pós desconto: " + totalpag);

if (quant <=5) {
	document.write("<br>Seu desconto será de 2% pela compra de "+Quantidade+" Bonés")
}else if (quant >5 && quant <=10) {
	document.write("<br>Seu desconto será de 3% pela compra de "+Quantidade+" Bonés")
}else if (quant >10){
	document.write("<br>Seu desconto será de 5% pela compra de "+Quantidade+" Bonés")
}