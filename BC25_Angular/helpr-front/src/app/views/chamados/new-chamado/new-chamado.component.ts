import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Chamado } from 'src/app/models/chamado';
import { Cliente } from 'src/app/models/cliente';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-new-chamado',
  templateUrl: './new-chamado.component.html',
  styleUrls: ['./new-chamado.component.css']
})
export class NewChamadoComponent implements OnInit {

  public formChamado: FormGroup;

  public clientes: Cliente[] = [];

  constructor(
    formBuider: FormBuilder,
    private clienteService: ClienteService,
    private chamadoService: ChamadoService,
    private router: Router
    ) { 
    this.formChamado = formBuider.group({
      titulo:["",[Validators.required]],
      descricao:["",[Validators.required]],
      cliente:["",[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.initializerFieldClient();
  }

  private initializerFieldClient(): void {
    this.clienteService.findAll().subscribe(clientes => {
      this.clientes = clientes;
  })
  }

  public create(): void {
    if(this.formChamado.valid) {
      const chamado: Chamado = this.formChamado.value;
      this.chamadoService.create(chamado).subscribe(() => {
        alert("Chamado cadastrado.");
        this.router.navigate(["/chamados"]);
      });
    }
    else {
      alert("Dados inválidos.");
    }
  }

}
