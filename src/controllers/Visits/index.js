import React,  {useState}   from 'react';
import Slider from "@material-ui/core/Slider";
import {BottomData, CircularProgress} from "../../components";
import Box from "@material-ui/core/Box";
import {visits as model } from "../../models";

export function Visits() {
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
                    colorIndicator={'#ba4d27'}
                    principalText={model.name}
                    textX={'-25'}
                    textY={'-15'}
                    principalValue={model.value}
                    valueX={'-55'}
                    valueY={'10'}
                    infillColor={'#edbd43'}
                    max={4800000000}
                    visit
                />
            </div>
            <div style={{marginTop: 5}}>
                <Box width="100%">
                    <BottomData
                        tabletPercentage={model.tablet.percentage}
                        tabletValue={model.tablet.value}
                        smartphonePercentage={model.smartphone.percentage}
                        smartphoneValue={model.smartphone.value}
                        colorTablet={'#edbd43'}
                        colorSmartphone={'#ba4d27'}
                    />

                    <Slider
                        defaultValue={model.value}
                        getAriaValueText={valueText}
                        aria-labelledby='discrete-slider-medium-steps'
                        step={600000000}
                        marks
                        min={0}
                        max={4800000000}
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
