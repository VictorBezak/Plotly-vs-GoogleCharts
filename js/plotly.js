const plotly_graph = () => {
    // **********************************************************************************************
    // PARENT / CHILD

    const div = document.getElementById('plotly__graph');

    // **********************************************************************************************
    // DATA

    // const x_axis = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const x_axis = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

    let trace1 = {
        name: 'A',
        type: 'bar',
        x: x_axis,
        // y: [75.16, 76.94, 66.18, 54.68, 68.16, 66.39, 51.66, 56.66, 61.21, 63.01, 69.08, 27.18],
        y: [75.16, 76.94, 66.18, 54.68, 68.16],
        marker: {
            color: 'rgb(8, 142, 199)'
        }
    };

    let trace2 = {
        name: 'B',
        type: 'bar',
        x: x_axis,
        // y: [76.01, 64.39, 4.01, 7.64, 11.05, 8.85, 6.78, 2.7, 2.99, 3.03, 1.03, 0.4],
        y: [76.01, 64.39, 4.01, 7.64, 11.05],
        marker: {
            color: 'rgb(186, 112, 2)'
        }
    };

    let trace3 = {
        name: 'C',
        type: 'bar',
        x: x_axis,
        // y: [76.01, 77.14, 93.16, 97.26, 98.12, 98.92, 99.28, 98.74, 93.35, 94.25, 86.35, 81.4],
        y: [76.01, 77.14, 93.16, 97.26, 98.12],
        marker: {
            color: 'rgb(70, 145, 24)'
        }
    };

    let data = [trace1, trace2, trace3];

    // **********************************************************************************************
    // LAYOUT

    let layout = {
        // autoresize: true,
        // height: 300,
        // width: 600,
        // paper_bgcolor: '#ee',
        // plot_bgcolor: '#eee',
        margin: {
            t: 0, r: 20, b: 35, l: 45,
            pad: 4
        },
        barmode: 'group',
        bargap: 0.4,
        bargroupgap: 0.2,
        dragmode: false,
        // showlegend: false,
        legend: {
            orientation: 'h',
            x: 0.7,
            y: 1.05
        },
        yaxis: {
            ticksuffix: "%"
        }
    }

    // **********************************************************************************************
    // CONFIG

    const config = {
        responsive: true,
        displaylogo: false,
        displayModeBar: false,
        // modeBarButtonsToRemove: [
        //     'toggleSpikelines',
        //     'toImage',
        //     'hoverClosestCartesian',
        //     'hoverCompareCartesian',
        //     'pan2d',
        //     'zoom2d',
        //     'zoomOut2d',
        //     'zoomIn2d',
        //     'autoScale2d',
        //     'resetScale2d',
        //     'select2d',
        //     'lasso2d'
        // ]
    }

    // **********************************************************************************************
    // CREATE AND APPEND

    const plotlyComponent = Plotly.newPlot( div, data, layout, config );
};
