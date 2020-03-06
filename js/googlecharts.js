let gchart_graph = (d) => {
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Create and populate a data table, and draw chart
    function drawChart() {

        let data = google.visualization.arrayToDataTable([
            // Data-column headers
            ['Month', '2020', '2019 STLY', '2019 Total'],

            ['Jan', .7516, .7601, .7601],
            ['Feb', .7694, .6439, .7714],
            ['Mar', .6618, .0401, .9316],
            ['Apr', .5468, .0764, .9726],
            ['May', .6816, .1105, .9812],
            // ['Jun', .6639, .0885, .9892],
            // ['Jul', .5166, .0678, .9928],
            // ['Aug', .5666, .027, .9874],
            // ['Sep', .6121, .0299, .9335],
            // ['Oct', .6301, .0303, .9425],
            // ['Nov', .6908, .0103, .8635],
            // ['Dec', .2718, .04, .814]
        ]);

        // Set chart options
        let options = {
            chartArea: {
                width: '80%', height: '60%',
                top: 30, right: 20, bottom: 35, left: 45,
            },
            vAxis: {
                format: '#%',
                minorGridlines: {
                    count: 0
                }
            },
            colors: ['#088ec7', '#ba7002', '#469118'],
            focusTarget: 'category',
            bar: {
                groupWidth: '56%'
            },
            legend: {
                position: 'none'
                // position: 'top',
                // alignment: 'end'
            },
            // enableInteractivity: false,
            // explorer: {},  // right click to reset
        };

        // Instantiate and draw our chart, passing in some options.
        let chart = new google.visualization.ColumnChart(document.getElementById('gcharts__graph'));
        chart.draw(data, options);
    }
}