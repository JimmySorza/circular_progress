import React,  {useState}   from 'react';
import Slider from "@material-ui/core/Slider";
import {BottomData, CircularProgress} from "../../components";
import Box from "@material-ui/core/Box";
import {revenue as model } from "../../models/revenue";

export function Revenue() {
    const svgWidth = 150;
    const arcWidth = 12;
    const [progressPercentage, setProgressPercentage] = useState(200000);
    function valueText(value) {
        return `${value}`;
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
                    colorIndicator={'#2e5e20'}
                    principalText={model.name}
                    textX={'-35'}
                    textY={'-15'}
                    principalValue={model.value}
                    valueX={'-45'}
                    valueY={'10'}
                    infillColor={'#73cc49'}
                    max={600000}
                />
              </div>
            <div style={{marginTop: 5}}>
                <Box width="100%">
               <BottomData
                    tabletPercentage={model.tablet.percentage}
                    tabletValue={model.tablet.value}
                    smartphonePercentage={model.smartphone.percentage}
                    smartphoneValue={model.smartphone.value}
                    colorTablet={'#73cc49'}
                    colorSmartphone={'#2e5e20'}
               />

                    <Slider
                        defaultValue={200000}
                        getAriaValueText={valueText}
                        aria-labelledby='discrete-slider-small-steps'
                        step={150000}
                        marks
                        min={0}
                        max={600000}
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
