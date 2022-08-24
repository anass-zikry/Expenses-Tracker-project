import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const targetMaxArr = props.dataPoints.map((dataPoint) => dataPoint.value);
  const targetMax = Math.max(...targetMaxArr);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={targetMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
