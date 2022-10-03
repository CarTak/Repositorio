/*
8. Sabendo que latão é constituído de 70% de cobre e 30% de zinco, indique a quantidade de
cada um desses componentes para se obter uma certa quantidade de latão (requerida pelo
usuário).
*/
let qtd = parseFloat(prompt('Informe a quantidade de latão que você deseja'))
document.write(`Para a quantidade de ${qtd}kg de latão você vai precisar de ${qtd*0.7}kg de cobre e ${qtd*0.3}kg de zinco`)