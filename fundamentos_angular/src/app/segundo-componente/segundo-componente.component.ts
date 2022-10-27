import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "João";
  dataNascimento = "1992-01-01";
  urlImagem = "/assets/img1.jpg"
  mostrarDataNascimento() {
    alert(`a data de nascimento de joao é: ${this.dataNascimento}`)
  }
}
