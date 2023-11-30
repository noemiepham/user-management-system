import { Container, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

/* Style css for table data */
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

/* Style palette for table data */
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
/*  create new data follow filter */
function createData(usernames, age, gender, tel, address) {
  return { usernames, age, gender, tel, address };
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Users() {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:3333/users", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("received", data);
        setUsers(data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">User Name</StyledTableCell>
              <StyledTableCell align="right">Age</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">Birthday</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">✍🏻</StyledTableCell>
              <StyledTableCell align="right">❌</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  {user.id}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {user.firstName} {user.lastName}
                </StyledTableCell>
                <StyledTableCell align="right">{user.age}</StyledTableCell>
                <StyledTableCell align="right">{user.gender}</StyledTableCell>
                <StyledTableCell align="right">
                  {user.birthDate}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {user.address.address}
                </StyledTableCell>

                <StyledTableCell align="right">
                  <EditIcon />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <DeleteForeverIcon color="secondary" fontSize="large" />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
