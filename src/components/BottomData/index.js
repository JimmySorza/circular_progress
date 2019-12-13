import React from "react";
import {Grid} from "@material-ui/core";

export function BottomData(props) {
    const {
        tabletPercentage,
        tabletValue,
        smartphonePercentage,
        smartphoneValue
    } = props;

    return(
        <Grid container spacing={1}>
            <Grid item xs={6}>
                Tablet
            </Grid>
            <Grid item xs={6}>
                Smartphone
            </Grid>
            <Grid item xs={3}>
               {tabletPercentage}
            </Grid>
            <Grid item xs={3}>
                {tabletValue}
            </Grid>
            <Grid item xs={3}>
               {smartphonePercentage}
            </Grid>
            <Grid item xs={3}>
                {smartphoneValue}
            </Grid>
        </Grid>
    )

}
