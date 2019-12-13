import React,  {useState}   from 'react';
import Slider from "@material-ui/core/Slider";
import {BottomData, CircularProgress} from "../../components";
import Box from "@material-ui/core/Box";
import {impressions as model } from "../../models";

export function Impressions() {
    const svgWidth = 150;
    const arcWidth = 12;
    const [progressPercentage, setProgressPercentage] = useState(model.value);
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
                    colorIndicator={'#335464'}
                    principalText={model.name}
                    textX={'-45'}
                    textY={'-15'}
                    principalValue={model.value}
                    valueX={'-55'}
                    valueY={'10'}
                    infillColor={'#60c3dc'}
                    max={80000000}
                />
            </div>
            <div style={{marginTop: 5}}>
                <Box width="100%">
                    <BottomData
                        tabletPercentage={model.tablet.percentage}
                        tabletValue={model.tablet.value}
                        smartphonePercentage={model.smartphone.percentage}
                        smartphoneValue={model.smartphone.value}
                        colorTablet={'#60c3dc'}
                        colorSmartphone={'#335464'}
                    />

                    <Slider
                        defaultValue={model.value}
                        getAriaValueText={valueText}
                        aria-labelledby='discrete-slider-medium-steps'
                        step={10000000}
                        marks
                        min={0}
                        max={80000000}
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
