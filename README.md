## Requisitos da aplicação Calendar

- Deve ser possível cadastrar usuários, sendo que deve ser validado se o formato do email e do telefone estão corretor.
  
- Deve ser validado se o email já foi cadastrado.

- Deve ser possível alterar os dados dos usuários

- Deve ser possível buscar os usuários, filtrando por nome ou email

- Deve ser possível, deletar também suas tarefas

- Deve ser possível cadastrar uma tarefa para um usuário

- Deve ser possível buscar as tarefas de um usuário

- Deve ser possível deletar as tarefas de um usuário


## Anotações Aula 4


```ts
interface CarteiraDeIdentidade {
    idade: number;
    nome: string;
    numero: string;
}

class Pessoa implements CarteiraDeIdentidade{
    
    idade: number
    nome: string
    numero: string
    
    constructor(id: CarteiraDeIdentidade) {
        this.idade = id.idade
        this.nome = id.nome
        this.numero = id.numero
    }

    andar(distanciaEmMetros?: number): string {
        if(!distanciaEmMetros)
            return 'Sair por aí, sem hora pra voltar'
        else if (distanciaEmMetros < 500)
            return 'Tá perto, bora lá'

        return 'Vamos lá andar'
    }

    falar(): void {
        console.log('Blá blá blá')
    }
}

type Nota = 1 | 2 | 3 | 4 | 5

class ParticipanteDoBBB extends Pessoa {

    notaTotal: number = 0

    constructor(id: CarteiraDeIdentidade) {
        super(id)
    }

    votar(nota: Nota): void {
        this.notaTotal++
    }
}

const pessoa = new Pessoa({ idade: 19, nome: 'Nayla', numero: 'MG34234' })
console.log(pessoa)

const participante = new ParticipanteDoBBB({ idade: 19, nome: 'Nayla', numero: 'MG34234' })
participante.votar(1)
console.log(participante)
```


**Playground Link:** [Provided](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgMJypYU4BEICSAJhOMEXCcgN4BQyDy5lEAXMiAK4C2ARtAG56jEAHtubZAGcwUUAHMhjDj2ij2MuSEW0AvrVoIANnClTkABQhnRcJtwAORiBPDn0mCNjyESZCiR0ysIMzCTsXHzQIRzikpoKMZFqGrKJwcoIoiCanAhgolAAFOTsHlg4+MSkYGEQAJQ0McpgABbAUgB0dcgAvExE3QEQzYxtHZ1iEn0Dk3GjDONdyVCiM+STqqsx+jFwIBTFRB1g+wjAcACi3ACyELKiUgD8ETz8UPWpWvJNysrAMCKAEJjjIzhdrncHlJ6gs-lB7pwoCBkAByADKcGwyAchWQcAAtwAaaQuZCtQp2Bw4ZAAN1ERlOUFRcIgRikKAByCKoNOIHOV1u91W5gAPMgAKwABilsL+8uQCLASJRqIAKgBDnHQAok3iU5BGDUsuFKlVogBqcG4j0NWv2hxZyl2yngJmKnzponIvwVWRyDIgnSMonkRVRACEjcheNHY8a5Yx9LswABPBwoAByolOMwAjMgAD7IABMReQAGZywAWcsSgzGUzmCwYWrnBz7SC4UQR3vICAAD0gB2b1iktiaSRzcDV06MryiUBmUoMmWyuXyhRKRDKra8lV8NTqjSCCqknAzxXIiYYLsY9KZRTEp3Y2dOnvpPtP8qWc1Os9OIwAGogJ2PQG3XMBtRsOx+hACAAHdLDHWwimoAYWHYPMAE4SSmSRUUzOBUxMVE8K2dQ0RuABxCtqxLOjUWQXRYX9cdnGDUMigzGDYUMSCcVbYB207FA4MQywhJE8AIG7XsIzQjDwmQHC8LidhCOI0jyIkVYNJouiGOrJiWNoDtMGE4AOxkzoHwwIo81Y9dA04sNzLbKzRPqIA)
      

## Anotações Aula 5


```ts
const users = [{ id: 1, name: 'Nayla' }, { id: 2, name: 'Matheus' }]

const buscarUsers = (id: number) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const user = users.find((u) => u.id === id)
            
            if(user)
                resolve(user)
            reject('Usuário não encontrado')

        }, 2000)
    })
}

const main = async () => {
    try {
        const user = await buscarUsers(1)
        console.log(user)
    } catch(err) {
        console.log(err)
    }
}

buscarUsers(1)
    .then((user) => console.log(user))
    .catch((err) => console.log(err))


main()
```



<details><summary><b>Output</b></summary>

```ts
"use strict";
const users = [{ id: 1, name: 'Nayla' }, { id: 2, name: 'Matheus' }];
const buscarUsers = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((u) => u.id === id);
            if (user)
                resolve(user);
            reject('Usuário não encontrado');
        }, 2000);
    });
};
const main = async () => {
    try {
        const user = await buscarUsers(1);
        console.log(user);
    }
    catch (err) {
        console.log(err);
    }
};
buscarUsers(1)
    .then((user) => console.log(user))
    .catch((err) => console.log(err));
main();

```

**Playground Link:** [Provided](https://www.typescriptlang.org/play?ssl=1&ssc=1&pln=31&pc=7#code/MYewdgzgLgBArhApgJwjAvDA2gbxgSwBMAuGARgBoYwBDAW0VIHIA5GgTwBsamYBfKniKkATFVoNmAWRpQAFogS8+AXQBQa0JFgAjBMBrIAqklQYYACmHU4dHSgCUGAHwwcamJ5jJEUOMjBqRAB3GAAFZBA6fCQLCx8IEE4AN0QqHwArRGAoJ3RXdw8vYqQoABV8BhA4KDi8gqLippgtaHhTcwQUCAA6ADN8MEI4uHr4HqIMdEwiB0bmr3mFgj6LLuQ55eWEpNS1002tz0zs2qYTOABD5HwQagBju8QwLShkGkIQJjmlrwEYEQABmBh08fDmfA0rVgdBog3MNAg7BeljG7mKb3Ybl+nmh7RQCOCcN0+kMJm6FjIoKarSSiB6nBAAHN9o55nwWrJgHILCgNtjlrTOPTGSy+dTIZC1HoIAZjKYIJTqT15M8RgcXC1wIlhQzmayNsqDFBuXFxZqhSL9eKfmpYYMLA4gA)
      