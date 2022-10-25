import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comprimento'
})
export class ComprimentoPipe implements PipeTransform {
  /**
   * Pegar um array qualquer e retornar a quantidade de elementos
   * dentro dele
   * 
   * value: parâmetro responsável por pegar o valor que  será transformado
   * any[] é um array que pode receber qualquer valor
   * args: 
   * 
   * o parâmetro 'value' no método tranform é obrigatório
   * 
   * Mas caso queira passar outros parametros, isso é possivel
   */
  transform(value: any[]): number {
    return value.length
  }
}
