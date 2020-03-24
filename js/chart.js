$(document).ready( () => {

    var line = document.getElementById('myline')

    var line_data = {
        labels: ['1학년1학기', '1학년2학기', '2학년1학기', '2학년2학기', '3학년1학기', '3학년2학기', '4학년1학기', '4학년2학기'],
        datasets: [{
            label: '전공학점',
            backgroundColor: 'rgba(255, 99, 132, 0.1)',
            borderWidth: 0,
            pointRadius: 0,
            data: [ 0, 0, 3.6, 3.7, 3.5, 3.5, 3.5, 3.5]
        }
        ,
        {
            label: '전체학점',
            backgroundColor: 'rgba(22, 0, 132, 0.1)',
            borderWidth: 0,
            pointRadius: 0,
            data: [4.0, 3, 3, 4, 3, 4, 4, 4.5]
        }]
    }

    var line_option = {

    }

    var myline = new Chart( line, {
        type: 'line',
        data: line_data,
        options: {
            maintainAspectRatio: false
        }
    })


    var doughnut = document.getElementById('mydoughnut').getContext('2d')

    var doughnut_data = {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
            ]
        }],
    
        labels: [
            '전공',
            '교양',
            '미이수'
        ],

    }


    var mydoughnut = new Chart( doughnut, {
        type: 'doughnut',
        data: doughnut_data,
        options: {
            maintainAspectRatio: false
        }
    })
})