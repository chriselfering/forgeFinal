function onLoad () {
  var ctx1 = document.getElementById("myChart1");
  var myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ["Deadlift", "Squats", "Bench", "Overhead Press", "Bent Over Row"],
      datasets: [{
        label: 'Weightlifting',
        data: [350, 250, 200, 95, 135],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });

  var ctx2 = document.getElementById("myChart2");
  var myChart2 = new Chart(ctx2, {
    type: 'polarArea',
    data: {
        datasets: [{
            data: [
                15,
                16,
                12,
                3,
                14
            ],
            backgroundColor: [
                "#FF6384",
                "#4BC0C0",
                "#FFCE56",
                "#E7E9ED",
                "#36A2EB"
            ],
            label: 'Habits' // for legend
        }],
        labels: [
            "Meditate",
            "No Sugar",
            "No Spend",
            "Fresh Vegetables",
            "No Gluten"
        ]
    },
  });

var ctx3 = document.getElementById("myLineChart");
var myLineChart = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ["12 am", "1 am", "2 am", "3 am", "4 am", "5 am", "6 am", "7 am", "8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm", "7 pm", "8 pm", "9 pm", "10 pm", "11 pm"],
        datasets: [
            {
                label: "Homicides",
                fill: false,
                lineTension: 0.01,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80],
                spanGaps: false,
            }
        ]
    }
});
}
