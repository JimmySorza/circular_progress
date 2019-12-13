import React,  {useState}   from 'react';
import Slider from "@material-ui/core/Slider";
import CircularProgress from "./components/CircularProgress";
import {ColorIndicator} from "./components/ColorIndicator";

function App() {
    const svgWidth = 150;
    const arcWidth = 12;
    const [progressPercentage, setProgressPercentage] = useState(50);
    const colorIndicator = ColorIndicator(progressPercentage);
    function valueText(value) {
        return `${value}°C`;
    }
    function setProgressValue(event, value) {
        setProgressPercentage(value)
    }
  
  return (
    <div className="App">
        <CircularProgress
            svgWidth={svgWidth}
            arcWidth={arcWidth}
            progressPercentage={progressPercentage}
            colorIndicator={colorIndicator}
        />
      <Slider
        defaultValue={50}
        getAriaValueText={valueText}
        aria-labelledby='discrete-slider-small-steps'
        step={10}
        marks
        min={0}
        max={100}
        valueLabelDisplay='auto'
        onChange={(event, value) => {
            setProgressValue(event, value)
        }}
      />
    </div>
  );
}

export default App;
