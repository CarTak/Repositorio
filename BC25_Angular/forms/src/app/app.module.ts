import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
/**
   * colocar MaterialModule  para importar o material.module.ts 
   * para nosso projeto
     * é necessário importar o FormsModule para poder usar os Forms
   * do Angular
   */
@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  /**
   * colocar MaterialModule para importar o material.module.ts 
   * para nosso projeto
   * é necessário importar o FormsModule para poder usar os Forms
   * do Angular
   */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
