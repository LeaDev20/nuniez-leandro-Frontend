import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button, Typography, Box } from "@material-ui/core";
import "./styles.css";

const Tables = (props) => {
  const users = props.users;
  return (
    <Box>
      <Typography>Lista de Usuarios</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>Mail</TableCell>
              <TableCell>Age</TableCell>
              <TableCell align="right">Liked Song</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell>{user.lastname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell align="right"><Button color="primary" onClick={(e) => props.onClick(e, user.likedSongs)}>See</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Tables;
