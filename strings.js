// Delimitação de Strings

const aspasSimples = 'Olá, mundo'
console.log(aspasSimples)

// caracteres de escapa

const aspasDuplas = "Ola eu sou o \nJavascript. Eu sou melhor que o \nPython"
console.log(aspasDuplas)

const textoComCrase = `Ola eu sou o Javascript. Eu sou melhor que o Python`
console.log(textoComCrase)

// Metodos das strings
const texto = 'O Javascript foi criado alguns anos após o Python. No entanto, o Javascript é bem mais bacana.'

console.log(texto)
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.concat(' A Linguagem C é a mãe de todes as linguagens'))
console.log(texto[2])//J
console.log(texto.substring(1,12))//Javascript
//case sensitive (diferência maiuscula de minuscula)
console.log(texto.replace('Javascript','Rust'))//substitui a primeira ocorrencia da pesquisa
console.log(texto.replaceAll('Javascript','Kotlin'))//substitui todas as ocorrências
console.log(texto.replace(/Javascript/g, 'PHP'))//substitui todas as ocorrências
console.log(texto.replace(/Javascript/gi, 'PHP'))//substitui todas as ocorrências (ignora diferenças entre maiuscula e minusculas)

const html = '<!DOCTYPE html>\n <html></html>'
console.log(html.startsWith('<!DOCTYPE html>')) //true ele retorna valor booleano
console.log(html.startsWith('Batata'))

console.log(html.endsWith<'</body>')

const mensagem = '                                               Olá, mundo                         '
console.log(mensagem)
console.log(mensagem.trim())

let senha = 'sonic'
console.log(senha.length)
console.log(senha.length >= 8)