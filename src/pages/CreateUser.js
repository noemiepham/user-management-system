import React, { useState } from "react";
import { Typography, Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles(() => ({
  btn: {
    marginTop: 20,
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: 20,
  },
  field: {
    marginBottom: 20,
    marginTop: 10,
  },
}));

export default function CreateUser() {
  const classes = useStyles();
  const [title, setTile] = useState("");
  const [details, setDetail] = useState("");
  const [titleErrors, setTileErros] = useState(false);
  const [detailsErros, setDetailErros] = useState(false);
  const [value, setValue] = useState("female");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    setDetailErros(false);
    setTileErros(false);
    e.preventDefault();
    if (title === "") {
      setTileErros(true);
    }
    if (details === "") {
      setDetailErros(true);
    }

    if (title && details) {
      console.log(title, details);
    }
  };
  return (
    <Container maxWidth="sm">
      <Typography
        className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New User
      </Typography>

      <form
        className={classes.field}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          className={classes.field}
          onChange={(e) => setTile(e.target.value)}
          id="standard-basic"
          label="User Name"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleErrors}
        />
        <TextField
          className={classes.field}
          onChange={(e) => setTile(e.target.value)}
          id="standard-basic"
          label="emails"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleErrors}
        />
        <TextField
          className={classes.field}
          onChange={(e) => setTile(e.target.value)}
          id="standard-basic"
          label="phone numbers"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleErrors}
        />
        <TextField
          className={classes.field}
          onChange={(e) => setTile(e.target.value)}
          id="standard-basic"
          label="address"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleErrors}
        />
        <TextField
          onChange={(e) => setDetail(e.target.value)}
          id="standard-basic"
          label="Detail"
          variant="outlined"
          color="secondary"
          multiline
          minRows={4}
          fullWidth
          required
          error={detailsErros}
        />
        <FormControl component="fieldset" className={classes.field}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl>
        {/* BUTTON SUBMIT CREATE NEW USER */}
        <Button
          /*       onClick={() => console.log("youClickme")} */
          className={classes.btn}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>

      <DeleteForeverIcon color="secondary" fontSize="large" />
    </Container>
  );
}
