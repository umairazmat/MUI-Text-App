import React from "react";
import "./Textform.css";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
export default function MinHeightTextarea(props) {
  const classes = useStyles();
  // Upper Case
  const handleUpClick = () => {
    console.log("Upper Case was Clicked " + " " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  //   Lower case
  const handleLowerClick = () => {
    console.log("Lower Case was Clicked " + " " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  // Reset Text
  const handleResetClick = () => {
    // console.log("Reset Text Case was Clicked " + " " + text);
    let newText = "";
    setText(newText);
  };

  //   Change value when User satrt writting
  const handleOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  };

  //   Use State
  const [text, setText] = useState("");
  return (
    <div>
      {/* Heading */}
      <Typography id="form-heading" variant="h4" gutterBottom>
        {props.heading}
      </Typography>
      {/* Text Area */}
      <TextareaAutosize
        style={{
          marginLeft: "200px",
          marginTop: "30px",
          width: "1000px",
        }}
        value={text}
        aria-label="minimum height"
        minRows={12}
        placeholder="Enter text here"
        onChange={handleOnChange}
      />
      <br />
      {/* Buttons */}
      <div
        className={classes.root}
        style={{
          marginLeft: "190px",
          marginTop: "20px",
          width: "1000px",
        }}
      >
        <Button variant="outlined" color="deafult" onClick={handleUpClick}>
          Convert Upper Case
        </Button>
        <Button variant="outlined" color="primary" onClick={handleLowerClick}>
          Convert lower case
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleResetClick}>
          Rest text
        </Button>
      </div>
    </div>
  );
}
