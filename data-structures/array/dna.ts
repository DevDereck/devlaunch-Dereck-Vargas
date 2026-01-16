/*

En un entorno de laboratorio, los investigadores están implementando una funcionalidad
en línea destinada a identificar enfermedades genéticas en individuos.

Los genetistas normalmente realizan la tarea de buscar secuencias específicas dentro del
ADN de una persona para detectar mutaciones genéticas asociadas con varios trastornos.

Por ejemplo, pueden buscar secuencias de ADN distintivas que se sabe están correlacionadas
con enfermedades genéticas.

Tu objetivo es desarrollar esta funcionalidad, en la cual recibirás una secuencia y deberás
verificar su presencia dentro de la cadena de ADN proporcionada. La función debe devolver
true si la secuencia se encuentra en la cadena de ADN y false en caso contrario.

El ADN estará representado por una cadena de caracteres, donde cada carácter denota un
nucleótido (por ejemplo, "gtgggggttttatgcctttagaaacagcag").

De igual manera, la secuencia a buscar también estará representada como una cadena de
caracteres, representando una serie más corta de nucleótidos (por ejemplo, "gtt")

*/

const dna: string = "gtgggggttttatgcctttagaaacagcag";

const subsequence: string = "gtt";

const containSequenceInDNA = (dna : string, match : string) : boolean => {
  let subssequence  = '';

  for (let i = 0; i <= dna.length - match.length; i++) {
    subssequence = dna.slice(i, i + match.length);
    if (subssequence === match) return true
  }
  
  return false
}

console.log (containSequenceInDNA(dna, subsequence))