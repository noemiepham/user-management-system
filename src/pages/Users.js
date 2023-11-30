import { Container, Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
//import users from "./userdata.js";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/users", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <Container>
      <Grid conatiner>
        {users.map((user) => (
          <Grid item xs={12} md={6} lg={4} key={user.id}>
            <Paper>{user.firstName}</Paper>
            <Paper>{user.lastName}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
