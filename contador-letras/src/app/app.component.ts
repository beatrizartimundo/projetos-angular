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
       
      var inputValue = (<HTMLInputElement>document.getElementById("text")).value;
      //const abc = String.prototype.trim();     
       document.getElementById("resultado").innerHTML =
        "Sua frase tem"+  inputValue.length + "letras";
      }
      contadorTextarea(){
        //utilizando o ngModel após declarar acima é só utilizar o this. nome da propriedade para pegar a quantidade
             
        document.getElementById("resultado2").innerHTML = 
         "Sua area de texto tem  " + this.desc.length + "letras";
          
      };
      	           
  
}
