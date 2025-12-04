/*

 🔸 El objetivo es crear una clase Airport que modele las características y operaciones de un aeropuerto
    de forma más avanzada.

 Cada aeropuerto tiene:

   • Un nombre.
   • Una ubicación.
   • Una pista de aterrizaje (runway).
   • Un nivel de tráfico aéreo (bajo, medio, alto).

 🔸 La clase debe incluir:

   • Un método changeTrafficLevel que permita cambiar el nivel de tráfico aéreo.
   • Un método emergencyLanding que cierre la pista de aterrizaje y marque el nivel de tráfico como alto.
   • Un método displayInfo que muestre el nombre del aeropuerto, la ubicación y el estado actual de la
     pista y el nivel de tráfico.

 Crea una instancia de la clase Airport y demuestra el uso de estos métodos con distintos valores.

*/

type TrafficLevel = 'low' | 'middle' | 'high'

class Airport {
  private _name:string 
  private _location: string 
  private _runwayStatus: boolean 
  private _trafficLevel : TrafficLevel

  constructor (name:string, location: string ){
    this._name = name
    this._location = location
    this._runwayStatus = true
    this._trafficLevel = "low"

  }

  get runwayStatus () : boolean{
    return this._runwayStatus
  }

  set runwayStatus (status : boolean) {
    this._runwayStatus = status
  }

  get trafficLevel () : TrafficLevel {
    return this._trafficLevel
  }

  set trafficLevel (level : TrafficLevel) {
    this._trafficLevel = level
  } 

  changeTrafficLevel (level : TrafficLevel) : void {
    this.trafficLevel = level
    console.log(`Se ha cambiado el nivel del tráfico a: ${level}, en el aeropuerto: ${this._name}`)
  }
  
  emergencyLanding () : void{
    this._runwayStatus = false
    this._trafficLevel = "high"
    console.log(`Aterrizaje de emergencia en el aeropuerto: ${this._name}. La pista está cerrada y el tráfico es: ${this._trafficLevel}`)
  }

  displayInfo () : void {
    console.log(`Name:  ${this._name}`)
    console.log(`Location: ${this._location}`)
    console.log(`Runway Status: ${this._runwayStatus}`)
    console.log(`Air Traffic Level: ${this._trafficLevel}`)

  }

}


const ap1 = new Airport ('SJO Santa María', 'CRC')

ap1.displayInfo()
ap1.changeTrafficLevel("middle")
ap1.displayInfo()
ap1.emergencyLanding ()
ap1.displayInfo()