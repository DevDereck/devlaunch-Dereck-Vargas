type DogColor = 'black' | 'white' | 'brown'


interface Address {
  city: string,
  state: string
}

class Person {
  
  constructor(public name : string, public address : Address) {
    this.name = name
    this.address = address 
  } 

}

class BabyDog {
  private age: number 

  constructor ( private name: string, public color: DogColor,  public owner: Person) {
    this.name = name
    this.age = 0
    this.color = color
    this.owner = owner
  }

  public setAge = (age : number) : void =>{
    this.age++
  }

  public getAge = () : number => {
    return this.age
  }

  private cry = () : void => {
    console.log(`I'm Crying, pls Help me!`)
  }

  public bark = () : void  => {
    console.log('GUAU, GUAU!!')
    this.cry()
  }

}

const p1 = new Person ('Dereck', {city: 'Heredia', state: 'Mercedes Norte' })

const bd1 = new BabyDog ('Oreo', "black", p1)
const bd2 = new BabyDog ('Macky', "white", p1)
const bd3 = new BabyDog ('Princesa', "white", p1)

bd1.bark()
bd1.setAge(1)
bd1.getAge
bd1.owner.name


