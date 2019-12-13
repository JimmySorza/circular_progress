import React from 'react';
import { Impressions, Revenue, Visits } from '../../controllers'
import {Box, Grid} from "@material-ui/core";

export function Home() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Box padding="1rem" justifyContent="center" width="70%">
                        <Revenue />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box padding="1rem" justifyContent="center" width="70%">
                        <Impressions />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box padding="1rem" justifyContent="center" width="70%">
                        <Visits />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}
