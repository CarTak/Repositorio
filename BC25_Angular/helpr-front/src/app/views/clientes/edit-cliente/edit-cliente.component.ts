import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  public cliente: Cliente = {
    nome: '',
    cpf: '',
    email:'',
    telefone:'',
    senha:''
  }

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initializeFields();
  }

  private initializeFields(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.clienteService.findById(id).subscribe(cliente => {
        this.cliente = cliente;
      });
    }
  }

  public update(formEdit: NgForm): void {
    // editar cliente e redirecionar de volta para a relação
    if(formEdit.valid){
      this.clienteService.update(this.cliente).subscribe(() => {
        alert("Cliente editado.");
        this.router.navigate(["/clientes"]);        
      });
    }
    else {
      alert("Dados inválidos");
    } 
  }
}
