//data
//chart const
//add rect to chart
//colors  .range(['#ff0000', '#3ab266']);
//tooltip style
//tooltip mouseover transition/duration
//tooltip html/ style

const data = [5, 110, 18, 35, 100, 1000]
    height = 300;

const colors = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range(['#ff0000', '#3ab266']);

const tooltip = d3.select('body')
    .append('div')
    .style('background', '#FFFFFF')
    .style('color', '#000000')
    .style('font-family', 'Arial, sans-serif')
    .style('padding', '2px 10px')
    .style('position', 'absolute');

const chart = d3.select('#content')
    .append('svg')
    .attr('height', height);

chart.selectAll('rect')
    .data(data)
    .enter().append('rect')
    .attr('height', function(d, i) { return d; })
    .attr('width', 50)
    .attr('x', function(d, i) { return i * 60; })
    .attr('y', function(d, i) { return height - d; })
    .attr('fill', function(d) { return colors(d); })
    
    .on('mouseover', function(d) {
        tooltip.transition().duration(200)
        tooltip.html(d)
                .style('left', d3.event.layerX + 'px')
                .style('top', d3.event.layerY-20 + 'px');
        console.log(d3.event.layerX)
        d3.select(this)
            .transition()
            .duration(1000)
            .style('opacity', .5) 
    })
    
    .on('mouseout', function(d) {
        tooltip.transition().duration(500)
        d3.select(this)
        .style('opacity', 1)
    });