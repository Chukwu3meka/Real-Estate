import { connect } from "react-redux";
import { useState, useEffect, useRef } from "react";

import { styles } from ".";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Paper, Typography } from "@mui/material";

const HomeContainer = () => {
  return (
    <Box className={styles.home} sx={{ flexGrow: 1 }}>
      {/* <Grid container spacing> */}
      <Grid container>
        <Grid item xs={12} md={12} id={styles.welcome}>
          <Typography component="h1" variant="h2">
            Digital Market
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} id={styles.pros}>
          <div>
            <Paper>
              <p>image</p>
              <p>title</p>
              <p>content</p>
            </Paper>
            <Paper>
              <p>image</p>
              <p>title</p>
              <p>content</p>
            </Paper>
            <Paper>
              <p>image</p>
              <p>title</p>
              <p>content</p>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => ({
    error: state.error,
  }),
  mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
