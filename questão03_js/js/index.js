   let empregado = [ 77, 78, 79]
   let anoNasc = 1960;
   let anoAtual = 2022;
   let idade = anoAtual - anoNasc;
   let temptrabalho = idade - 38;

if(idade >= 61 && temptrabalho >=23){
 document.write("Empregado: "+ empregado[2] + "<br>Idade: " + idade + " anos. <br> Ingressou na empresa á: " + tempTrabalho + " anos <br>Requer aposentadoria")
}else if (idade >= 65 || tempTrabalho >= 30){
 document.write("Empregado: "+ empregado[2] + "<br>Idade: " + idade + " anos. <br> Ingressou na empresa á: " + tempTrabalho + " anos <br>Requer aposentadoria")
}else {
 document.write("Empregado: "+ empregado[2] + "<br>Idade:"  + idade + " anos. <br> Ingressou na empresa á: " + tempTrabalho + " anos <br>Não requer aposentadoria") 
}
