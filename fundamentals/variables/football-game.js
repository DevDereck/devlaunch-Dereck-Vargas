// el evento es parte de las Eliminitaorias Sudamericanas para la copa del mundo.
// en un partido celebrado el 22/11/23 a las 20:30, el equipo local de Argentina se enfrentó al equipo visitante Brasil. 
// El resultado final fue de 1-0, indicando a Argentina como el equipo ganador.

// football-game

const eventName = 'Eliminatorias Sudamericanas';

const day = 22
const month = 11
const year = 23

const date = `${day}/${month}/${year}`

const hour = 20
const minutes = 30

const time = `${hour}:${minutes}`   

const formatHour = hour-12
const formatTime = `${formatHour}:${minutes}PM`  



const localTeam = 'Argentina'
const awayTeam = 'Brasil'

const localTeamScore = '1'
const awayTeamScore = '0'
const score = `${localTeamScore}-${awayTeamScore}`  

console.log(` 
  Tournament: ${eventName} - ${formatTime}\n
  Match: ${localTeam} VS ${awayTeam} \n
  Score: ${score}

`)
