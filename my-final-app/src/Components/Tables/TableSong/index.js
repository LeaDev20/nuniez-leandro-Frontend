import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Typography, Box } from "@material-ui/core";
import "./styles.css";

const TableSong = ({songs, user}) => {
  return (
    <Box>
      <Box m="20px">
        <Typography variant="h5">Canciones favoritas de {user}</Typography>
      </Box>
      <TableContainer>
        <Paper elevation={3} variant="outlined">
          <Table  aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Artista</TableCell>
                <TableCell>Album</TableCell>
                <TableCell>Duración</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {songs.map((song, i) => (
                <TableRow key={`${song._id}-${i}`}>
                    <TableCell component="th" scope="row">
                    {song.name}
                    </TableCell>
                    <TableCell>{song.artist}</TableCell>
                    <TableCell>{song.album}</TableCell>
                    <TableCell>{song.duration}</TableCell>
                </TableRow>
                ))}
            </TableBody>
          </Table>
        </Paper>
      </TableContainer>
    </Box>
  );
};

export default TableSong;