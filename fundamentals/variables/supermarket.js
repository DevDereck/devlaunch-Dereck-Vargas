// Voy al supermercado GreenCenter para hacer mis compras habituales y 
// planeo comprar manzanas y naranjas
// Cuando estoy allí, veo que no hay plátanos ni uvas, así que cambio un poco mi lista.
// Veo que 3 cajeros están trabajando, así que me preparo para pagar.
// Mis cosas cuestan $100 en total.
// Entrego $150 en efectivo y recibo $50 de cambio.

const superMarketName = 'GreenCenter'

const favoriteFruit1 = 'Manzana'
const favoriteFruit2 = 'Naranja'

const areBananaAvailable = false
const areGrapesAvailable = false

const actualCashiers = '3'
const total = 100
const moneyInWallet = 150
const change = moneyInWallet - total

console.log(` 
  SuperMarket Name: ${superMarketName}
  Favorites Fruits: ${favoriteFruit1}, ${favoriteFruit2}
  Working cashiers: ${actualCashiers}
  Money in Wallet: ${moneyInWallet}\n
  Total: ${total} 
  Change: ${change}
  Thanks for your purchase, have a great day!!
  `)
