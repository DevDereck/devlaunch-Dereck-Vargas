// Eres responsable de diseñar un sistema sencillo de gestión de vehículos para una empresa de transporte.

// El sistema debe representar diferentes tipos de vehículos y sus comportamientos utilizando una estructura orientada a objetos.

// Todos los vehículos tienen un emoji, marca, modelo y año de fabricación.

// Los vehículos deben poder arrancar y mostrar su información.

// Los coches tienen un número específico de puertas y deben poder encender el aire acondicionado.

// Las motocicletas pueden tener un sidecar y deben poder hacer una acrobacia en una rueda (wheelie).


class Vehicle {
  constructor(
    public emoji: string,
    public brand: string,
    public model: string,
    public year: number
    
  ) {
    this.emoji = emoji
    this.brand = brand
    this.model = model
    this.year = year
  } 

  start() : string {
    return `${this.emoji} el vehículo ${this.brand} ${this.model} ha arrancado.`
  } 
  
  getVehicleInfo(): string {
    return `${this.emoji}
    Brand: ${this.brand}\n
    Model: ${this.model}\n
    Year: ${this.year}`
  }
}

class Car extends Vehicle {
  private isAirOn: boolean = false
  constructor(
    brand: string,
    model: string,
    year: number,
    private numberOfDoors: number = 4,
  ){
    super('🚗', brand, model, year)
    this.isAirOn = false
  }
}

class Motorcycle extends Vehicle {
  constructor(
    brand: string, 
    model: string, 
    year: number
  ) {
    super('🏍️', brand, model, year)
  }

  doWheelie(): string {
    return `${this.emoji} la motocicleta ${this.brand} ${this.model} está haciendo la acrobacia wheelie.`
}

}

const car1 = new Car ('Toyota', 'Corolla', 2020, 4)
const m1 = new Motorcycle ('Harley-Davidson', 'Street 750', 2019)

console.log(car1.start())
console.log(m1.start())
console.log(m1.doWheelie())
console.log(car1.getVehicleInfo())
console.log(m1.getVehicleInfo())