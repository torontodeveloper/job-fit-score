"use client";

import Image from "next/image";
import styles from "./page.module.css";
import LeftSidePanel from "./components/leftsidepanel";
import RightSidePanel from "./components/rightsidepanel";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Item>
            <LeftSidePanel />
          </Item>
        </Grid>
        <Grid size={8}>
          <Item>
            <RightSidePanel />
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
