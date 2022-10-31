import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  /**
   * Reactive Forms possui estruturas
   * para representar o formulario
   * dentro do TypeScript
   */
  /**
   * FormControl representa um elemento do seu formulário
   */
nome: FormControl = new FormControl('')
email: FormControl = new FormControl('')
senha: FormControl = new FormControl('')

/**
  * FormGroup é uma estrutura do Reactive Forms
   * que permite agruparmos forms controls dentro
   * dela, para que o acesso aos valores seja mais
   * simples, os dados podem chamados pelo grupo
   * em vez de se chamar individualmente  como no exemplo acima
   * 
   * o validators tem que ser importado
   * o validators possui todos os tipos de validação que o HTML possui
 * */
/*dadosForm: FormGroup = new FormGroup({
  nome: new FormControl('',[Validators.required, Validators.minLength(4)]),
  email: new FormControl('',[Validators.email, Validators.required]),
  senha: new FormControl(''),
  endereco:new FormGroup({
    cep:new FormControl(''),
    rua:new FormControl(''),
    complemento:new FormControl(''),
    numero:new FormControl('')
  })
})  o dadosForms acima foi substituido pelo dadosForm abaixo*/

/* 
* O método group() do formBuider é responsável por criar um novo
* Objeto do tipo FormGroup
*/
/* 
  Form Array -> é utilizado para armazenar form controls, forms groups ou
  outros form array
*/
dadosForm: FormGroup =  this.fb.group({
  nome: ['',[Validators.required, Validators.minLength(4)]],
  email:['',[Validators.email, Validators.required]],
  senha:['',[Validators.required, Validators.minLength(8)]],
  endereco: this.fb.group({
    cep:['',[Validators.required, Validators.minLength(10)]], /** [''] = new FormControl('')*/
    rua:['',[Validators.required, Validators.maxLength(30)]],
    complemento:['',[Validators.maxLength(30)]],
    numero:['',[Validators.required]]
  }),
  telefones: this.fb.array([ 
    [''] // pode utilizar new FromControl('')
   ])
})

/* // Transformar o abstract Control -> Form Array 
  tem que importar o FormArray
*/
tels = this.dadosForm.get('telefones') as FormArray
/**
 * Form Buider -> Objeto que permite criar FormControls, FormGroups ou FormArrays com
 * uma sintaxe menor
 * para usar o FormsGroups é necessário colocar no constructor() o 
 * private fb: FormBuider ('fb'pode ser qualquer nome)
 * O formbuilder precisa ser importado
 */
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  enviar() {
    /**
     * a propriedade value do formControl possui
     * o valor que foi digitado dentro do campo do 
     * formulário
     */
    console.log(this.dadosForm.value)
  }

  adicionarCampoDeTelefone() {
  this.tels.push(new FormControl(''))
}
}
