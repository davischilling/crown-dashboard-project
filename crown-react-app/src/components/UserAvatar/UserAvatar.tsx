import React from "react";
import { useTheme } from "@material-ui/styles";

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers/Wrappers";

export default function UserAvatar({ color = "primary", ...props }) {
  var classes: any = useStyles();
  var theme: any = useTheme();

  var letters = props.name
    .split(" ")
    .map((word: any) => word[0])
    .join("");

  return (
    <div
      className={classes.avatar}
      style={{ backgroundColor: theme.palette[color].main }}
    >
      <Typography className={classes.text}>{letters}</Typography>
    </div>
  );
}
