import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button, Typography, Box, CircularProgress } from "@material-ui/core";
import "./styles.css";

const TableUser = (props) => {
  const users = props.users;
  const loading = props.loading;

  return (
    <Box>
      <Box m="20px">
        <Typography variant="h5">Lista de Usuarios</Typography>
      </Box>
      <TableContainer>
        <Paper elevation={3} variant="outlined">
          <Table aria-label="simple table" >
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Mail</TableCell>
                <TableCell>Edad</TableCell>
                <TableCell align="right">Canciones Favoritas</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading && 
                <TableRow>
                  <TableCell>
                    <CircularProgress />
                  </TableCell>
                </TableRow>}
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell>{user.lastname}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell align="center"><Button color="primary" onClick={(e) => props.onClick(e, user.likedSongs, user.name)}>See</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </TableContainer>
    </Box>
  );
};

export default TableUser;
