$(document).ready( () => {
    
    var line = document.getElementById('line')

    var line_data = {

    }

    var myline = new Chart( line, {
        type: 'line',
        data: line_data,
        options: {}
    })
    
    var doughnut = document.getElementById('doughnut').getContext('2d')

    var doughnut_data = {
        dataset: [{
            data: [10, 20, 30]
        }],
        labels: [
            'RED',
            'YELLOW',
            'BLUE'
        ]
    }

    var mydoughnut = new Chart( doughnut, {
        type: 'doughnut',
        data: doughnut_data,
        options: {}
    })
})