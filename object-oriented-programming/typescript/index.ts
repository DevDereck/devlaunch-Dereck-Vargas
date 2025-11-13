let message : string = 'Hola Dereck'


console.log('Hello World!!')


function grades (a:number, b: number) : number {
  return (a+b)
}

interface Account {
  id: string | number
  name: string
  balance: number
}

const createAccount = (id: string | number, name: string, balance: number = 0) : Account => {
  return {
    id, 
    name,
    balance
  }
}

const acc1 =  createAccount(1, 'Dereck', 0)
acc1.balance

import promptSync from 'prompt-sync'

const prompt = promptSync ();

const result = prompt ('message: ') 
console.log(result)