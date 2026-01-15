interface Receipt {
  name: string,
  amount: number,
  taxes: number,
  total: number
}

const receipts: Receipt[] = [
  { name: "Haircut", amount: 8, taxes: 2.5, total: 100 },
  { name: "Olive Garden Restaurant", amount: 4, taxes: 4.5, total: 120 },
  { name: "Hoja De Plátano Restaurant", amount: 4, taxes: 4.5, total: 155 },
  { name: "Denny's Restaurant", amount: 4, taxes: 4.5, total: 160 },
  { name: "Walmart", amount: 5, taxes: 5, total: 150 }
]

const incomes : number[] = [
  3000, // salary, position 0
  300, // pasive income, position 1
  1200 // sold computer, position 2
]



let totalIncome: number = 0;

for (let i = 0; i < incomes.length; i++){
  totalIncome += incomes[i]
}

console.log('Total Income:', totalIncome)

let totalExpenses: number = 0;

receipts.forEach((receipt) => { // método forEach
  totalExpenses += receipt.total
})

console.log('Total Expenses:', totalExpenses)


const expensiveReceipt = receipts.find ((receipt) => { // método find
  return receipt.total === 150
})

console.log('Expensive receipt: ', expensiveReceipt?.total )

let totalRestaurantExpenses: number = 0;

const restaurantReceipts = receipts
.filter (receipt => receipt.name.includes('Restaurant')) // método filter (si le quito brackets y return funciona igual)
.forEach (({total}) => totalRestaurantExpenses += total)


console.log (totalRestaurantExpenses)

const totalsExpenses = receipts.map(receipt => ({
  ...receipt, 
  percentage: ((receipt.total / totalIncome)  * 100).toFixed(2)
})) 
console.log (totalsExpenses )


const totalExpensives2 = receipts.reduce ((total, receipt) => total + receipt.total, 0) // método reduce

console.log ('Total expenses with reduce:', totalExpensives2)