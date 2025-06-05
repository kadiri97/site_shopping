// LINE CHART
let exp = "Math.sin(x)";
const xValues = [];
const yValues = [];
for (let x = 0; x <= 10; x += 0.1) {
  xValues.push(x);
  yValues.push(Math.sin(x)); // Avoid eval
}

const lineData = [{ x: xValues, y: yValues, mode: "lines" }];
const lineLayout = { title: "y = sin(x)" };
Plotly.newPlot("linetest", lineData, lineLayout);
// PIE CHART
const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray = [55, 49, 44, 24, 15];

const pieData = [{ labels: xArray, values: yArray, type: "pie" }];
const pieLayout = { title: "World Wide Wine Production" };
Plotly.newPlot("pieChart", pieData, pieLayout);
