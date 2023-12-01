import React, { useState } from "react";
import { Typography, Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
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
  const [user, setUser] = useState({});
  const initialForm = {
    username: "",
    email: "",
    phone: "",
    address: "",
    detail: "",
  };
  const [userForm, setUserForm] = useState(initialForm);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log(userForm);
    fetch("http://localhost:3333/users/creation", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("received", data);
        setUser(data);
        setUserForm(initialForm);
        // setUsers(data.users);
        // setUser(data.users ? data.users[0] : {});
      })
      .catch((error) => {
        console.log(error);
      });
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
        ini
      >
        <TextField
          className={classes.field}
          onChange={(e) =>
            setUserForm({
              ...userForm,
              username: e.target.value,
            })
          }
          value={userForm.username}
          id="username"
          label="User Name"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleErrors}
        />
        <TextField
          className={classes.field}
          onChange={(e) =>
            setUserForm({
              ...userForm,
              email: e.target.value,
            })
          }
          value={userForm.email}
          id="email"
          label="emails"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleErrors}
        />
        <TextField
          className={classes.field}
          onChange={(e) =>
            setUserForm({
              ...userForm,
              phone: e.target.value,
            })
          }
          value={userForm.phone}
          id="phone"
          label="phone numbers"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleErrors}
        />
        <TextField
          className={classes.field}
          onChange={(e) =>
            setUserForm({
              ...userForm,
              address: e.target.value,
            })
          }
          value={userForm.address}
          id="address"
          label="address"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleErrors}
        />
        <TextField
          onChange={(e) =>
            setUserForm({
              ...userForm,
              detail: e.target.value,
            })
          }
          value={userForm.detail}
          id="detail"
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
          type="button"
          color="secondary"
          variant="contained"
          onClick={handleSubmit}
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
