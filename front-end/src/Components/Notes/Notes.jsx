import React from "react";
import { styled } from "@mui/material/styles";

import {
  Box,
  Typography,
  Paper,
  Grid,
  Avatar,
  Rating,
} from "@mui/material";

import person1 from "../images/1.jpg";
import person2 from "../images/2.jpg";
import person3 from "../images/3.jpg";


export default function Notes() {
  const StyledPaper = styled(Paper)(function () {
    return {
      backgroundColor: "#fff",
      maxWidth: 400,
    };
  });
  return (
    <section id="Notes">
      <Typography variant="h5" className="home-title">
          Avaliações
        </Typography>
      <Box className="container-page" sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
        <StyledPaper
          sx={{
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy" src={person1} />
            </Grid>
            <Grid item xs>
              <Typography>
                norum et Malorum (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, Lorem ipsum dolor sit amet., comes from a line in
                section 1.10.32.
              </Typography>
              <Rating name="read-only" value="5" readOnly />
            </Grid>
          </Grid>
        </StyledPaper>
        <StyledPaper
          sx={{
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Mica" src={person2} />
            </Grid>
            <Grid item xs>
              <Typography>
                norum et Malorum (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise
              </Typography>
              <Rating name="read-only" value="4" readOnly />
            </Grid>
          </Grid>
        </StyledPaper>
        <StyledPaper
          sx={{
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Ted" src={person3} />
            </Grid>
            <Grid item xs>
              <Typography>
                norum et Malorum (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance.
              </Typography>
              <Rating name="read-only" value="5" readOnly />
            </Grid>
          </Grid>
        </StyledPaper>
      </Box>
    </section>
  );
}
