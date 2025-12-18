type InstrumentType =  'cuerda' | 'viento' | 'percusion';

abstract class Instrument {
  constructor (public type: InstrumentType){}

  play() {} 
}

class Guitar extends Instrument {
  constructor() {
    super('cuerda')
  }

  play(): string {
    return 'Strum Strum Strum'
  }

}


class Flute extends Instrument {
  constructor (){
    super('viento')
  }

  play(): string {
    return 'Toot Toot Toot'
  }
}

class Drums extends Instrument {
  constructor (){
    super('percusion')
  }

  play(): string {
    return 'Bom Bom Bam'
  }
}


class Artist{
  constructor(){}

  playInstrument(instrument: Instrument) {
    return instrument.play()
  }
}

const fla1 = new Flute()
const g1 = new Guitar()
const artist1 = new Artist()
const drum1 = new Drums()


console.log(fla1.type)
console.log(g1.type)


console.log(artist1.playInstrument(g1))
console.log(artist1.playInstrument(fla1))
console.log(artist1.playInstrument(drum1))

