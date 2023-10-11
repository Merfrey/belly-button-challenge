// // // // arrow function
// // // const calAge3 = (birthyear) => 2023 - birthyear;
// // // const ageOfPerson3 = calAge3(1950);
// // // console.log(ageOfPerson3);


// // // //lesson 15 method
// // // let url2 = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// // // d3.json(url2)


const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// // //method one to get data
// // const data = d3.json(url);
// // console.log(data);

//method two to get data
d3.json(url).then(function (data) {

    console.log(data); 


//grabs data and inputs sample_values into a array for function manipulation
//sampleValueArray = data.samples.sample_values;

 // creates function to test grab the data we are 
 // planning to put into a plot
  function popular(varR){
    return varR.sample_values.slice(0, 10).reverse();
  }

  // calls the popular function to run said function
  let topResults = popular(data.samples[0]);

 // checks to see if function is working correctlly
  console.log(topResults);

 //grabs data and inputs first instance of sample_values into a array
  sampleArray = data.samples[0].id;

  // creates parts for the skeleton of the bar chart
  const values = data.samples[0].sample_values.slice(0, 10).reverse();
  const labels = data.samples[0].otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
  const hovertext = data.samples[0].otu_labels.slice(0, 10).reverse();

  // Creates the skeleton of the bar chart
  const trace = {
    type: 'bar',
    orientation: 'h',
    x: values,
    y: labels,
    text: hovertext
  };

  // Creates data array for the plot
  const data2 = [trace];

  // Creates a title
  const layout = {
    title: `Top 10 OTUs for Sample ${sampleArray}`,
  };

  // Plots the bar chart
  Plotly.newPlot('bar', data2, layout);


});

//const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


d3.json(url).then(function (data) {

    console.log(data); 
    

    console.log("------data----------this will create a visible linebreak in the console between console.log(data) and the below code" );

 //grabs data and inputs sample_values into a array for function manipulation
  otu_idsArray = data.samples.otu_ids;
  sampleValueArray = data.samples.sample_values;

 // creates function to test grab the data we are 
 // planning to put into a plot
  function popularX(varX)
    {

    return varX.otu_ids,
    varX.sample_values,
    varX.otu_labels;

    // if (varX !== undefined || varX !== null)
    //  {
    //     iHateErrors = console.log("varX is not null and defined.");
    //     return iHateErrors;
    //   }
    //         else if (varX == undefined && varX !== null)
    //         {
    //          itIsUndefinedCode = console.log ("varX is undefined, not null.");
    //          return itIsUndefinedCode;
    //          }
    //                  else (varX ==! undefined && varX == null)
    //                   {
    //                  iHateErrors = console.log("varX is not defined, its null, and a pain in the ass.");
    //                  return iHateErrors;
    //                  }

    }; //function popular ending bracket

  // calls the popular function to run said function
  let topResults = popularX(data.samples[0]);

 // checks to see if function is working correctlly
  console.log(topResults);

 //
 console.log("----------------this will create a visible linebreak in the console between console.log topResults and the below code" );

 //grabs data and inputs first instance of sample_values into a array
  sampleArray = data.samples[0].id;

  // creates parts for the skeleton of the bubble chart
  const values = data.samples[0].sample_values;
  const otuIds = data.samples[0].otu_ids;
  //const otuIds = data.samples[0].otu_ids.map(id => `OTU ${id}`);
  const otuLabels = data.samples[0].otu_labels;

  // Creates the skeleton of the bubble chart
  // using Hover Text on Bubble Charts from https://plotly.com/javascript/bubble-charts/
  var trace = 
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
  

  // Creates data array for the plot
  var data3 = [trace];

  // Creates a title
  var layout = {
    title: `OTU IDS`,
    showlegend: true,
    height: 600,
    width: 1400
  };

  // Plots the bubble chart
  Plotly.newPlot('bubble', data3, layout);


});


// sampleDataZero = Object.values(data.samples[0].id)

// d3.json(url).then(function (data) {

//   console.log(data); 

//   sampleArray = data.samples[0].id;

//   // creates parts for the skeleton of the dempgraphic info chart
//   let IdNum = Object.keys(samples[0].otu_ids);
 
// });

// let table = d3.select("panel-body");

// let tbody = d3.select("sample-metadata");

// let grades = [ ["Juliana", 98], ["Devin", 88], ["Nestor", 92], ["Jack", 90], ["Chris", 89]];

// for (let i =0; i < grades.length; i++ ){
    
//     let sampleGrabber = grades[i]

//     let row = tbody.append("tr")

//     row.append("td").text(sampleGrabber[0])// name of the student
//     row.append("td").text(sampleGrabber[1]) // grade of the student
    
// }