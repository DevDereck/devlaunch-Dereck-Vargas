function austria() {
  const train: string[] = ['🚃', '🚃', '🚃']

  switzerland(train)
}

function switzerland(train: string[]) {
  train.push('🌲', '🏔️')

  frenchAlps(train)
}

function frenchAlps(train: string[]) {
  console.log('French Alps', train)
}

austria()
