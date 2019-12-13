import React from "react";
import * as d3 from "d3";
import graphic from '../../img/revenue.png'

export function CircularProgress(props) {
    const {
        svgWidth,
        arcWidth,
        progressPercentage,
        colorIndicator,
        principalText,
        textX,
        textY,
        principalValue,
        valueX,
        valueY,
        infillColor
        } = props;
    const svgHeight = svgWidth;
    const arcOuterRadius = svgWidth / 2;
    const arcInnerRadius = svgWidth / 2 - arcWidth;

    const generator = d3
        .arc()
        .innerRadius(arcInnerRadius)
        .outerRadius(arcOuterRadius)
        .startAngle(0)
        .cornerRadius(5);
    const progress = value => generator({endAngle: 2 * Math.PI * value});

    return(
        <div style={{marginLeft: 40}}>
            <svg height={svgHeight} width={svgWidth}>
                <g  transform={`translate(${svgWidth / 2}, ${svgHeight / 2})`}>
                    <path d={progress(1)} opacity='0.2' fill={infillColor} />
                </g>
                <g transform={`translate(${svgWidth / 2}, ${svgHeight / 2})`}>
                    <path d={progress(progressPercentage / 100)} fill={colorIndicator} />
                    <text x={textX} y={textY} >
                        {principalText}
                    </text>
                    <text x={valueX} y={valueY} >{`${principalValue}$`}</text>
                </g>
            </svg>
        </div>
    )

}
