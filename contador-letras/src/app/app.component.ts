import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Contador';
  desc: "";

  constructor(){  }

  ngOnInit(){}

     contador(){
       
      var inputValue = ((<HTMLInputElement>document.getElementById("text")).value);
      //primeiro remove os espaços da string para depois ver o tamanho
      const abc = inputValue.replace(/\s/g, '')   

       document.getElementById("resultado").innerHTML =
        "Sua frase tem " +  abc.length + " letras";
      }
      contadorAngular(){
        //utilizando o ngModel após declarar acima é só utilizar o this. nome da propriedade para pegar a quantidade
            var textAngular = this.desc.length 
            var newAngular = ""
            for( var i = 0; i < textAngular; i++ ) {
                
              if( this.desc.charAt(i) != " " ) {
              
                  newAngular += this.desc.charAt(i);
                      
              }
          }
         document.getElementById("resultado2").innerHTML = 
         "Sua frase tem  " + newAngular.length + " letras";
          
      };
      	           
  
}
