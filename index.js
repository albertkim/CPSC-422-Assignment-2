console.log('Initializing javascript...')

console.log(smallArray)
console.log(bigArray)

const array = smallArray

const calculatedArray = []

array.forEach(number => {

})

$(document).ready(function(){
  renderChart()
})

function renderChart() {
  const ctx = $('#myChart')

  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: new Array(array.length),
      datasets: [{
        label: '# of Votes',
        data: array,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1
      }]
    },
    options: {

    }
  })
}
