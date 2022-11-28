import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/Produto';
import { ProdutosApiService } from 'src/app/services/produtos-api.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  produtoForm: FormGroup = new FormGroup({
    nome: new FormControl('',[ Validators.required ]),
    preco: new FormControl('',[ Validators.required ]),
    descricao: new FormControl('',[ Validators.required ]),
    foto: new FormControl('')
  })

    //injetar um objeto que permite o roteamento dentro da pagina de forma automática
  constructor(
    private produtoService: ProdutosApiService,
    private snackbar: MatSnackBar, // componente de mensagens do material
    private router: Router // objeto que permite fazer o roteamento dentro do arquivo Typescript
    ) { }

  ngOnInit(): void {
  }

  salvarProduto(){
    // recuperar os dados do formulário
    const produto: Produto = this.produtoForm.value  //retorna um objeto com as informações do FormGroup
    
    this.produtoService.criarProduto(produto)
    .subscribe(
      (prod) => {
        console.log(prod)
        this.snackbar.open('Produto salvo com sucesso','Ok',{
          duration: 5000, // tempo de duração que o snackbar aparecerá
          horizontalPosition: 'right',
          verticalPosition: 'bottom'
        }) // abrir o snackbar 
        this.router.navigateByUrl('/produtos')  // redirecionando o usuario para a pagina de produtos       
      }
    )
  }
}
