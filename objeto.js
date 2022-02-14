let personagem = {
    nome: 'Goku',
    idade: 50,
    melhoramigo: 'Kuririn'
}

console.log(personagem)
console.log(personagem.nome)
console.log(personagem.idade)
console.log(personagem.melhoramigo)

personagem.rival = 'Vegeta'

console.log(personagem)
console.log(personagem.rival)

personagem.habilidades = ['Kamerameha, Kaioken, Teletransporte']

personagem.adjetivos = ['Persistente', 'Engraçado', 'Forte']

let per02 = {
    msg(name) {
        return `Olá ${name}`
    }
}

console.log(per02.msg('Vegeta'))

let cor = 'Azul'
let idade = 50
let nome = 'Vegeta'

let sayajiin = {
    nome,
    cor,
    idade
}

console.log(sayajiin)

let adjetivos = {
    habilidades: ['Galikio', 'Finalflash', 'Big Bang']
}

let adj02 = {
    personalidade: ['Esquentadinho', 'Pai responsável', 'Orgulhoso']
}

//let Vegeta = Object.assign( {}, adjetivos, adj02)

//console.log(Vegeta)

let Vegeta02 = {
     ...adjetivos,
     ...adj02,
     altura: '1,65 m',
     peso: '56 kg'
    
}

console.log(Vegeta02)

let amigo = 'Figurante'

let goku = {
    [amigo]: 'Kuririn'
}

console.log(goku)

let vilões = [
    {
        nome: 'Freeza',
        título: 'Imperador do Universo'
    },

    {
        nome: 'Cell',
        título: 'Ser perfeito'
    },

    {
        nome: 'Majiin Boo',
        título: 'Apelão'
    }
]

console.log(vilões[1].nome)
  