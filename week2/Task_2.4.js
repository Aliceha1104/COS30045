document.addEventListener("DOMContentLoaded", function() {
        // Load the CSV file and call drawBarChart function
        d3.csv("Task_2.4_data.csv").then(function(data) {
            console.log(data);
            drawBarChart(data);
        });
    
        function drawBarChart(data) {
            var w = 500;
            var h = 100;
            var padding = 1;
    
            var svg = d3.select("#chart")
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);
    
            svg.selectAll("rect")
               .data(data)
               .enter()
               .append("rect")
               .attr("x", function(d, i) {
                    return i * (w / data.length);
               })
               .attr("y", function(d) {
                    return h - (d.wombats * 4);
               })
               .attr("width", function() {
                    return (w / data.length) - padding;
               })
               .attr("height", function(d) {
                    return d.wombats * 4;
               })
               .style("fill", function(d) {
                    if (d.wombats < 10) {
                        return "red"; // Change color for values less than 10
                    } else if (d.wombats < 20) {
                        return "orange"; // Change color for values between 10 and 20
                    } else {
                        return "LightSlateGray";
                    }
               });
        }
    })

window.onload = init;