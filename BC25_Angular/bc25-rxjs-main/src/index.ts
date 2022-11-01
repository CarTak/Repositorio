import path from 'path'
import { filter, first, last, map, Observable, take } from 'rxjs'
import fs from 'fs'
import { TestScheduler } from 'rxjs/testing'

const filePaths: string[] = [
  path.join(__dirname, 'files', 'app_1.txt'),
  path.join(__dirname, 'files', 'app_2.txt'),
  path.join(__dirname, 'files', 'app_3.txt'),
  path.join(__dirname, 'files', 'app_4.txt'),
  path.join(__dirname, 'files', 'estilo_1.css'),
  path.join(__dirname, 'files', 'estilo_2.css'),
  path.join(__dirname, 'files', 'estilo_3.css'),
  path.join(__dirname, 'files', 'estilo_4.css'),
  path.join(__dirname, 'files', 'estrutura_1.html'),
  path.join(__dirname, 'files', 'estrutura_2.html'),
  path.join(__dirname, 'files', 'estrutura_3.html'),
  path.join(__dirname, 'files', 'estrutura_4.html')
]

const isCSS =  /^((.|#|:){0,1}(\w+-{0,1})+\s*{(\s*(\w+-{0,1})+:\s*(\w+\s*)+;\s*)+\s*}\s*)/i
const isHTML = /^<!DOCTYPE html>/i

function lerArquivos(arquivos: string[]) {
  /***
   * Observables são fontes de dados que enviam dados/informações de forma continua
   */
  /* *
    A classe Observable recebe como parametro uma função responsável pela
    geração dos dados que o Observable enviará
   */
  /***
   * subscriber é uma referência de dependente da informação
   */
  const leitor = new Observable<string>((subscriber) => {
    /***
     * o método forEach (paraCada) Serva para fazer um laço de repetição
     * dentro de um array
     */
    arquivos.forEach((arquivo) => {
      /***
       * readFileSync fará a leitura de um arquivo a partir do caminho desse
       * arquivo no seu computador
       * 
       * fs é um método que deve ser importado
       */

      try {
        const conteudo = fs.readFileSync(arquivo, {encoding: 'utf-8'})
        subscriber.next(conteudo)
      } catch (error){
        subscriber.error(`Não foi possível ler o arquivo que está no caminho ${arquivo}`)
      }
      
      // resposavel por mandar a mensagem de sucesso
      // subscriber.error() // responsavel por mandar a mensagem de erro
      // subscriber.complete() // responsavel por mandar a mensagem de completo

      /***
       *  --> Envio de dados do Observable
       * 
       * 3 Estágios
       *  -> Sucesso: O Observable sonseguiu realizar seu trabalho sem nenhum problema
       *             e enviou os dados com sucesso.
       * 
       *  --> Erro: O Observable teve algum problema durante a sua execução e não conseguiu
       *            realizar sua tarefa de maneira satisfatória e não conseguiu enviar os dados.
       *            Quando um Observable passa pelo estágio de erro, sua execução para automaticamente.
       * 
       *  --> Completo: O Observable realizou TODAs as suas tarefas com sucesso e não possui
       *                mais nenhum dado para poder enviar.
       * 
       */      
    })  

    subscriber.complete()
  })
  return leitor
}

let obs = lerArquivos(filePaths)

/***
 * o metodo subscribe() dos Observables te permite acessar os valores
 * que o Observable te envia de forma continua
 */

/***
 * 1) -> Sucesso
 * 2) -> Erro
 * 3) -> Completo
 */

/***
 * Operadores -> Funções que servem para manipular os dados
 *                que os observables enviam
 */
/***
 * Utilizando algum operador do RXJS, vamos extrair a primeira palavra
 * de cada arquivo
 */
/***
 * A função pipe serve para você passar os operadores do RXJS que modificarão
 * os dados que o Observable retorna para vocÊ!
 */
/***
 * o operador map serve para pegar odado que é enviado pelo Observable
 * e manipulá-lo de alguma forma para que você acesse esse dado modificado
 */

obs
.pipe(
   /** texto.split(' ')[0] o split transforma o arquivo num array onde cada elemento foi separadp
 * pelo espaço (' ') e onde o primeiro elemento é [0]
 */
  /* map((texto) => {
    return texto.split(' ')[0]
  }),
  map((palavra) => {
    return palavra.length
  }) */

  /***
   * filter() serve para filtrar determinadas informações enviadas pelo Observable
   */
  /* filter((txt) => { */
    /**
     * a função test() vai testar o conteudo do arquivo e compara com a condição
     * isCSS que está definido no começo deste arquivo.
     */
    /* return isCSS.test(txt) */
    /* return isHTML.test(txt) */
    /* return isHTML.test(txt) == false && isCSS.test(txt) == false */
    /** as expressões acima e a debaixo são equivalentes */
    /* return !isHTML.test(txt) && !isCSS.test(txt)
        }) */
    /* 
    o operador take() serve para pegar uma quantiadade determinado que
    o Observable envia   */    
    // take(4)
    // o operador first() retorna o primeiro arquivo encontrado
    //first()
    //first() abaixo irá pegar o primeiro arquivo HTML que ele encontrar
    /* first((txt) => {
      return isHTML.test(txt)
    }) */
    // last() retorna o último arquivo pesquisado
    //last()
    last((txt) => {
      return isCSS.test(txt)
    })
  )
.subscribe(
  (conteudoLido) => {
    console.log('---------- ARQUIVO LIDO COM SUCESSO ----------')
    console.log(conteudoLido)
    console.log('----------------------------------------------\n\n')
  },
  (erro) => {
    console.log('OCORREU UM ERRO NA EXECUÇÃO DO OBSERVABLE')
    console.log(erro)
  },
  () => {
    console.log('TODOS OS ARQUIVOS FORAM LIDOS COM SUCESSO')
  }
)


/* obs.subscribe(
  (conteudoLido) => {
    console.log(`Este arquivo possui ${conteudoLido.length} caracteres`)
  },
  (erro) => {
    console.log('OCORREU UM ERRO NA EXECUÇÃO DO OBSERVABLE')
    console.log(erro)
  },
  () => {
    console.log('TODOS OS ARQUIVOS FORAM LIDOS COM SUCESSO')
  }
) */