import React,  {useState}   from 'react';
import Slider from "@material-ui/core/Slider";
import {BottomData, CircularProgress, ColorIndicator} from "../../components";
import Box from "@material-ui/core/Box";
import {impresions as model } from "../../models/impresions";

export function Impressions() {
    const svgWidth = 150;
    const arcWidth = 12;
    const [progressPercentage, setProgressPercentage] = useState(50000000);
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
                    colorIndicator={'#335464'}
                    principalText={model.name}
                    textX={'-45'}
                    textY={'-20'}
                    principalValue={model.value}
                    valueX={'-45'}
                    valueY={'5'}
                    infillColor={'#60c3dc'}
                    max={120000000}
                />
            </div>
            <div style={{marginTop: 5}}>
                <Box width="100%">
                    <BottomData
                        tabletPercentage={model.tablet.percentage}
                        tabletValue={model.tablet.value}
                        smartphonePercentage={model.smartphone.percentage}
                        smartphoneValue={model.smartphone.value}
                        colorTablet={}
                        colorSmartphone={}
                    />

                    <Slider
                        defaultValue={50000000}
                        getAriaValueText={valueText}
                        aria-labelledby='discrete-slider-small-steps'
                        step={30000000}
                        marks
                        min={0}
                        max={120000000}
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
