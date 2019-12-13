import React from "react";
import * as d3 from "d3";

export function CircularProgress(props) {
    const {
        svgWidth,
        arcWidth,
        progressPercentage,
        colorIndicator,
        principalText,
        textX,
        textY,
        valueX,
        valueY,
        infillColor,
        max,
        visit
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
                    <path d={progress(1)} fill={infillColor} />
                </g>
                <g transform={`translate(${svgWidth / 2}, ${svgHeight / 2})`}>
                    <path d={progress(progressPercentage / max)} fill={colorIndicator} />
                    <text
                        x={textX}
                        y={textY}
                        font-family="Arial, Helvetica, sans-serif"
                        fill='gray'
                        fontSize="14px"
                    >
                        {principalText}
                    </text>
                    <text fontSize="22px" font-family="Arial, Helvetica, sans-serif" x={valueX} y={valueY} >
                        {visit ? `${progressPercentage}` : `${progressPercentage}€`}
                    </text>
                </g>
            </svg>
        </div>
    )

}
