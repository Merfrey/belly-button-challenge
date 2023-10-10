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

// //method two to get data
// d3.json(url).then(function (data) {

//     console.log(data); 

// //grabs data and inputs sample_values into a array for function manipulation
// //sampleValueArray = data.samples.sample_values;

//  // creates function to test grab the data we are 
//  // planning to put into a plot
//   function popular(varR){
//     return varR.sample_values.slice(0, 10).reverse();
//   }

//   // calls the popular function to run said function
//   let topResults = popular(data.samples[0]);

//  // checks to see if function is working correctlly
//   console.log(topResults);

//  //grabs data and inputs first instance of sample_values into a array
//   sampleArray = data.samples[0].id;

//   // creates parts for the skeleton of the bar chart
//   const values = data.samples[0].sample_values.slice(0, 10).reverse();
//   const labels = data.samples[0].otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
//   const hovertext = data.samples[0].otu_labels.slice(0, 10).reverse();

//   // Creates the skeleton of the bar chart
//   const trace = {
//     type: 'bar',
//     orientation: 'h',
//     x: values,
//     y: labels,
//     text: hovertext
//   };

//   // Creates data array for the plot
//   const data2 = [trace];

//   // Creates a title
//   const layout = {
//     title: `Top 10 OTUs for Sample ${sampleArray}`,
//   };

//   // Plots the bar chart
//   Plotly.newPlot('bar', data2, layout);


// });



d3.json(url).then(function (data) {

    console.log(data); 

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

 //grabs data and inputs first instance of sample_values into a array
  sampleArray = data.samples[0].id;

  // creates parts for the skeleton of the bubble chart
  const values = data.samples[0].sample_values;
  const labels = data.samples[0].otu_ids.map(id => `OTU ${id}`);
  const hovertext = data.samples[0].otu_labels;

  // Creates the skeleton of the bubble chart
  const trace = {
    type: 'bubble',
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
  Plotly.newPlot('bubble', data2, layout);


});