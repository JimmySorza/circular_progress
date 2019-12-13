import React,  {useState}   from 'react';
import Slider from "@material-ui/core/Slider";
import {CircularProgress, ColorIndicator} from "../../components";
import Box from "@material-ui/core/Box";

export function Home() {
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
        <div>
            <Box padding="3rem" justifyContent="center">
                <CircularProgress
                    svgWidth={svgWidth}
                    arcWidth={arcWidth}
                    progressPercentage={progressPercentage}
                    colorIndicator={colorIndicator}
                />
                <Box width="50%">
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
                </Box>
            </Box>
        </div>
    );
}
