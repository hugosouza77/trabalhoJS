let codigoDoProd = 102;
let quantidade = 10;
let precoDoProd = 2.40;
let valorTotal = precoDoProd * quantidade;

switch ( codigoDoProd ) {

    case 100:             
        document.write( "código do produto : " + codigoDoProd + " <br> quantidades de produtos : " + quantidade 
        + " <br> valor total : " + valorTotal )

        break;

    case 102:             
        document.write( "código do produto : " + codigoDoProd + " <br> quantidades de produtos : " + quantidade 
        + " <br> valor total : " + valorTotal )

        break;

    case 103:             
        document.write( "código do produto :  " + codigoDoProd + " <br> quantidades de produtos :  " + quantidade 
        + " <br> valor total : " + valorTotal + "<br>" )

        break;

    case 104:             
        document.write( "código do produto :  " + codigoDoProd + " <br> quantidades de produtos : " + quantidade 
        + " <br> valor total : " + valorTotal )

        break;

   case 105:             
        document.write( "código do produto : " + codigoDoProd + " <br> quantidades de produtos : " + quantidade 
        + " <br> valor total : " + valorTotal )

        break;

   default: 
        document.write( "informe o código do produto : " + codigoDoProd );
}

   document.write ( " <b> tem mais algum produto que voce deseja levar? rs");