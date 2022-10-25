import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {
  transform(value: string): string {
    //123.123.123-12
    // ([0-9]{3}) ele vai selecionar 3 números de 0-9
    // Expressão Regular
    // $1 se refere ao primeiro grupo e assim por diante
    const cpfFormatado = value.replace(/([0-9]{3}) ([0-9]{3}) ([0-9]{3}) ([0-9]{2})/, '$1.$2.$3-$4')
    return cpfFormatado
  }

}
