// // // // // // arrow function
// // // // // const calAge3 = (birthyear) => 2023 - birthyear;
// // // // // const ageOfPerson3 = calAge3(1950);
// // // // // console.log(ageOfPerson3);

// // // // // d3.json(url2)


// const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// // // // //method one to get data
// // // // const data = d3.json(url);
// // // // console.log(data);

// // selDataset is id for dropdown menu for the html
// d3.selectAll("#selDataset").on("change", getData);

// // Define the getData function to update the charts and metadata
// function getData() {
 
//        // Retrieve the selected sample ID from the dropdown
//        const selectedSampleId = d3.select("#selDataset").property("value");

//        // Call functions to update charts and metadata with the selected sample id
//        updateCharts(selectedSampleId);
//        updateMetadata(selectedSampleId);
// }





function buildMetadata(sample) {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    let metadata = data.metadata;
   
    let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    let result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    let PANEL = d3.select("#sample-metadata");

    for (key in result){
      PANEL.append("h6").text(`${key.toUpperCase()}: ${result[key]}`);
    };

  
   // buildGauge(result.wfreq);
  });
}

function buildCharts(sample) {
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
   let samples = data.samples;
  let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
  let sampleData = resultArray[0];
  
  //     let otu_ids = result.otu_ids;
  //     let otu_labels = result.otu_labels;
  //     let sample_values = result.sample_values;

  //sampleArray = data.samples[0];

  //grabs data and inputs first instance of id into a array
  titleArray = data.samples[0].id;


  // creates parts for the skeleton of the bar chart
  let labels = sampleData.otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
  let barValues = sampleData.sample_values.slice(0, 10).reverse();
  let hovertext = sampleData.otu_labels.slice(0, 10).reverse();
 
//   let hovertext = data.samples[0].otu_labels.slice(0, 10).reverse();

  // Creates the skeleton of the bar chart
  let barTrace = {
    type: 'bar',
    orientation: 'h',
    x: barValues,
    y: labels,
    text: hovertext
  };

  // Creates data array for the plot
  let barData = [barTrace];

  // Creates a title
  let barLayout = {
    title: `Top 10 OTUs for Sample ${titleArray}`,
  };

  // Plots the bar chart
  Plotly.newPlot('bar', barData, barLayout);

  // creates parts for the skeleton of the bubble chart
  let values = sampleData.sample_values;
  let otuIds = sampleData.otu_ids;
  let otuLabels = sampleData.otu_labels;

//   // Creates the skeleton of the bubble chart
//   // using Hover Text on Bubble Charts from https://plotly.com/javascript/bubble-charts/
  var bubbleTrace = 
  {
    x: otuIds,
    y: values,
    text: otuLabels,
    mode: 'markers',
    marker: 
      {
        color: otuIds,
        size: values        
      }
    };
  
  // Creates data array for the bubble plot
  var bubbleData = [bubbleTrace];

  // Creates a title
  var bubbleLayout = {
    title: `OTU IDS`,
    showlegend: true,
    height: 600,
    width: 1400
  };

  // Plots the bubble chart
  Plotly.newPlot('bubble', bubbleData, bubbleLayout);

});
}

  // init function here provides us a default value to show to the users
  function init() {
   
    let selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
      let sampleNames = data.names;
  
      for (let i = 0; i < sampleNames.length; i++){
        selector
          .append("option")
          .text(sampleNames[i])
          .property("value", sampleNames[i]);
      };
  
      // Use the first sample from the list to build the initial plots
      let firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildCharts(newSample);
    buildMetadata(newSample);
  }
  
  // Initialize the dashboard
  init();
  

