import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircleProgressBar from "./progress-bar-circle";

const card = (
  <>
    <CardContent style={{ borderRadius: "10px" }}>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Overall JobFitScore
      </Typography>
      <Typography variant="h5" component="div">
        HighFit
      </Typography>
      <Typography variant="body2">
        Primary Recommendation
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <CircleProgressBar percentage={86} />
      <Button size="small">Fitness Metric</Button>
    </CardActions>
  </>
);

export default function OutlinedCard({ title }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
