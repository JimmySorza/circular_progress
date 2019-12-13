import React,  {useState}   from 'react';
import Slider from "@material-ui/core/Slider";
import {BottomData, CircularProgress, ColorIndicator} from "../../components";
import Box from "@material-ui/core/Box";
import {revenue as model } from "../../models/revenue";
import {Grid} from "@material-ui/core";

export function Revenue() {
    const svgWidth = 150;
    const arcWidth = 12;
    const [progressPercentage, setProgressPercentage] = useState(35);
    const colorIndicator = ColorIndicator(progressPercentage, 'green');
    function valueText(value) {
        return `${value}°C`;
    }
    function setProgressValue(event, value) {
        setProgressPercentage(value)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <div>
                <CircularProgress
                    style={{marginLeft: '30'}}
                    svgWidth={svgWidth}
                    arcWidth={arcWidth}
                    progressPercentage={progressPercentage}
                    colorIndicator={'green'}
                    principalText={model.name}
                    textX={'-40'}
                    textY={'-20'}
                    principalValue={model.value}
                    valueX={'-35'}
                    valueY={'0'}
                    infillColor={'blue'}
                />
              </div>
            <div>
                <Box width="100%">
               <BottomData
                    tabletPercentage={model.tablet.percentage}
                    tabletValue={model.tablet.value}
                    smartphonePercentage={model.smartphone.percentage}
                    smartphoneValue={model.smartphone.value}
               />

                    <Slider
                        defaultValue={35}
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
            </div>
        </div>
    );
}
