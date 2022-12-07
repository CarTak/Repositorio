import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamadosRoutingModule } from './chamados-routing.module';
import { ChamadosComponent } from './chamados/chamados.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { NewChamadoComponent } from './new-chamado/new-chamado.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditChamadoComponent } from './edit-chamado/edit-chamado.component';

@NgModule({
  declarations: [
    ChamadosComponent,
    NewChamadoComponent,
    EditChamadoComponent
  ],
  imports: [
    CommonModule,
    ChamadosRoutingModule,
    ComponentsModule,
    MaterialModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ChamadosModule { }
