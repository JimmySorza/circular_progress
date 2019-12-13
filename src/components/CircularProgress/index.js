import React from "react";
import * as d3 from "d3";

function CircularProgress(props) {
    const { svgWidth, arcWidth, progressPercentage, colorIndicator } = props;
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
        <div>
            <svg height={svgHeight} width={svgWidth}>
                <g  transform={`translate(${svgWidth / 2}, ${svgHeight / 2})`}>
                    <path d={progress(1)} opacity='0.2' fill='gray' />
                </g>
                <g transform={`translate(${svgWidth / 2}, ${svgHeight / 2})`}>
                    <path d={progress(progressPercentage / 100)} fill={colorIndicator} />
                    <text x='0' y='0' >
                        {`${progressPercentage}%`}
                    </text>
                </g>
            </svg>
        </div>
    )

}

export default CircularProgress;