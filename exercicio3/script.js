const operacao1 = 5 > 20 && 5 < 2;
console.log("5 é maior que 20 e também é menor que 2", operacao1)

const operacao2 = 5 === 5 || 5 === "5"
console.log("5 é igual a 5 ou é igual a “5”", operacao2)

const operacao3 = !(20 > 50);
console.log("negação de (vinte é maior que cinquenta)", operacao2)

const operacao4 = !(20 > 50 || 50 > 60)
console.log("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)", operacao3)

// Parte 2 do exercício

const filhos = 2
const salario = 2000
const auxCreche = 45.50
const comissao = 0.1
const inss = 0.05
const totalAuxilioCreche = auxCreche * filhos
let vendasJan = 5784.50
let vendasFev = 3418.41
let vendasMar = 4124.10
let vendasAbr = 1874.00
let vendasMai = 7000.00
let vendasJun = 9450.00
const comissaoJan = vendasJan * comissao
const comissaoFev = vendasFev * comissao
const comissaoMar = vendasMar * comissao
const comissaoAbr = vendasAbr * comissao
const comissaoMai = vendasMai * comissao
const comissaoJun = vendasJun * comissao

// 1)
const operacaoA = salario + (auxCreche * filhos)
console.log(`O salário fixo mais o auxílio-creche é:`, operacaoA)

// 2)
const operacaoB = vendasJan * comissao
console.log(`Receberá de comissão em janeiro:`, operacaoB)

// 3)
const operacaoC = (salario + comissaoJan) * inss
console.log(operacaoC)

// 4)
const salarioJaneiro = salario + comissaoJan - inss + totalAuxilioCreche
console.log(salarioJaneiro)

const salarioFev = salario + comissaoFev - inss + totalAuxilioCreche
console.log(salarioFev)

const salarioMar = salario + comissaoMar - inss + totalAuxilioCreche
console.log(salarioMar)

const salarioAbr = salario + comissaoAbr - inss + totalAuxilioCreche
console.log(salarioAbr)

const salarioMai = salario + comissaoMai - inss + totalAuxilioCreche
console.log(salarioMai)

const salarioJun = salario + comissaoJun - inss + totalAuxilioCreche
console.log(salarioJun)

// 5)

const mediaSalarial = (salarioJaneiro + salarioFev + salarioMar + salarioAbr + salarioMai + salarioJun) / 6
console.log(mediaSalarial)
