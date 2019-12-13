import React from "react";
import {Grid} from "@material-ui/core";
import { Typography } from '@material-ui/core';

export function BottomData(props) {
    const {
        tabletPercentage,
        tabletValue,
        smartphonePercentage,
        smartphoneValue,
        colorTablet,
        colorSmartphone
    } = props;

    return(
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <Typography style={{color: '#73cc49'}}>
                 Tablet
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography style={{color: '#2e5e20', fontStyle: 'bold'}}>
                    Smartphone
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography style={{color: '#01060d'}}>
                    {tabletPercentage}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography style={{color: '#bbbfb7'}}>
                    {tabletValue}
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography style={{color: '#01060d'}}>
                    {smartphonePercentage}
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography style={{color: '#bbbfb7'}}>
                    {smartphoneValue}
                </Typography>
            </Grid>
        </Grid>
    )

}
