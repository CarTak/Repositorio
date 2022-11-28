import { Component } from '@angular/core';
import { Livro } from 'src/app/models/livro';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {
  

  displayedColumns = ['titulo', 'categoria', 'capa', 'autor', 'isbn'];
  dataSource = livros;
}

const livros: Livro [] = [
  {
    titulo: "Harry Potter",
    categoria: "Fantasia",
    capa: "https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg",
    autor: "JK",
    isbn: "124143413514132"
  }
]