console.log('Initializing javascript...')

const array = bigArray

const calculatedArray = []
let numberOfOnesUpToCurrent = 0
let numberOfAcceptedSamples = 0
for (let i=1; i<array.length; i++) {
  if (array[i] !== -1) {
    numberOfAcceptedSamples ++
  }
  if (array[i] === 1) {
    numberOfOnesUpToCurrent ++
  }
  calculatedArray.push(numberOfOnesUpToCurrent/numberOfAcceptedSamples)
}

// Print the final value
console.log('Final value: ' + calculatedArray[calculatedArray.length-1])

const calculatedXYArray = []
for (let i=1; i<calculatedArray.length; i++) {
  calculatedXYArray.push({
    x: i,
    y: calculatedArray[i]
  })
}

$(document).ready(function(){
  renderChart()
})

function renderChart() {
  const ctx = $('#myChart')

  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: new Array(calculatedArray.length),
      datasets: [{
        label: '# of samples',
        data: calculatedXYArray,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        xAxes: [{
          type: 'logarithmic',
          position: 'bottom'
        }]
      }
    }
  })
}
