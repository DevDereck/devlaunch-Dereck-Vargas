/*Pokémon Battle Simulator
Design a turn-based battle between two Pokémon where each one has three unique abilities.

Rules:
Base Class: Create an abstract class Pokemon with:
name: string
health: number (default 100)
Method attack(opponent: Pokemon, move: string, turn: number): void
Method isAlive(): boolean

Pokémon Defined:
Pikachu
Thunder Shock: Deals 20 damage
Quick Attack: Deals 10 damage (always available)
Heal Spark: Heals 20 health (can only be used once)

Charizard
Flamethrower: Deals 30 damage (can only be used every 2 turns)
Scratch: Deals 15 damage
Fire Breath: Heals 10 health and burns the opponent (adds 10 damage on the next turn)
*/

abstract class Pokemon {
  constructor(public name: string, public health: number = 100) {
    this.name = name
    this.health = health
  }

  attack(opponent: Pokemon, move: string, turn: number): void {}

  isAlive(): boolean {
    return this.health > 0
  }

  public receiveDamage(damage: number): void {
    if (this.health - damage < 0) {
      this.health = 0
    } else {
      this.health -= damage
    }
  }
}

class Pikachu extends Pokemon {
  constructor() {
    super("Pikachu")
  }

  thunderShock(opponent: Pokemon): void {
    if (this.isAlive() && opponent.isAlive()) {
      opponent.receiveDamage(20)
    }
  }

  quickAttack(opponent: Pokemon): void {
    if (this.isAlive() && opponent.isAlive()) {
      opponent.receiveDamage(10)
    }
  }

  healSpark(): void {
    if (this.isAlive()) {
      this.health += 20
    }
  }
}

class Charizard extends Pokemon {
  constructor() {
    super("Charizard")
  }

  Flamethrower(opponent: Pokemon, turn: number): void {
    if (this.isAlive() && opponent.isAlive() && turn % 2 === 0) {
      opponent.receiveDamage(30)
    }
  }

  Scratch(opponent: Pokemon): void {
    if (this.isAlive() && opponent.isAlive()) {
      opponent.receiveDamage(15)
    }
  }

  FireBreath(opponent: Pokemon): void {
    if (this.isAlive() && opponent.isAlive()) {
      this.health += 10
      opponent.receiveDamage(10)
    }
  }
}

// Pruebas
const pikachu1 = new Pikachu()
const charizard1 = new Charizard()

console.log(pikachu1.name)
console.log(charizard1.name)

charizard1.Flamethrower(pikachu1, 2)
charizard1.Flamethrower(pikachu1, 2)
charizard1.Flamethrower(pikachu1, 2)
pikachu1.thunderShock(charizard1)
charizard1.Flamethrower(pikachu1, 2)


console.log(pikachu1.health)    
console.log(charizard1.health)  





