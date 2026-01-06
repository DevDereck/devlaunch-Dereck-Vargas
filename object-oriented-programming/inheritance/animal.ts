/*
Un zoológico necesita un sistema para gestionar los animales y sus comportamientos.

Debes modelar un conjunto de clases que representen distintos tipos de animales y sus características.

Todos los animales tienen un nombre, especie y edad. Además, todos deben poder emitir un sonido y mostrar su información básica.

Algunos animales, como los leones, pueden rugir y tienen una melena. Los elefantes pueden hacer sonar su trompa y tienen un tamaño específico (por ejemplo, 'pequeño', 'mediano' o 'grande').

Crea una clase base Animal con las propiedades y métodos necesarios.

Extender la clase Animal para crear clases específicas como Leon y Elefante que tengan comportamientos y propiedades particulares.
*/

class Animal {
  constructor(
    public name: string,
    public species: string,
    public age: number
  ) {}

  makeSound(): string {
    return '';
  }

  getInfo(): string{
    return `Name: ${this.name}, Species: ${this.species}, Age: ${this.age}`
  }

}

class Lion extends Animal {
  constructor(
    name: string,
    age: number
  ) {
    super(name, 'Lion', age);
  }

  makeSound (): string {
    return 'Roar!!'
  }

  hasMane(): boolean {
    return true;
  }

  getInfo(): string {
    return `${super.getInfo()}, Has Mane: ${this.hasMane()}`
  }
}

const l1 = new Lion ('Simba', 5)
console.log (l1.makeSound())
console.log (l1.getInfo())

type ElephantType = 'small' | 'medium' | 'large';

class Elephant extends Animal {
  constructor( 
    name: string,
    age: number,
    public size: ElephantType) {
      super(name,'Elephant', age)
    }

    makeSound(): string {
        return 'Toot!!'
    }


    getInfo () : string {
      return `${super.getInfo()}, Size: ${this.size}`
    }

}

const el1 = new Elephant ('Dumbo', 10, 'large')
console.log (el1.makeSound())
console.log (el1.getInfo())