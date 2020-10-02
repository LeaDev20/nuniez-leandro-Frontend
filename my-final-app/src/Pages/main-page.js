import React, { useState, useEffect } from 'react';
import { Container, Box, Grid } from "@material-ui/core";
import NavBar from '../Components/NavBar';
import TableUser from '../Components/Tables/TableUser';
import TableSong from '../Components/Tables/TableSong';

const MainPage = () => {
    const [users, setUsers] = useState([]);
    const [userName, setUserName] = useState("");
    const [songs, setSongs] = useState([]);
    const [load, setLoad] = useState();
    

    const getUsers = async() => {
        setLoad(true);
        const response = await fetch("https://api-matea.herokuapp.com/users");
        const data = await response.json();
        setUsers(data);
        setLoad(false);
    }

    const getLikedSongs = (e, userSongs, userName) => {
        const songs = userSongs;
        const user = userName;
        setSongs(songs);
        setUserName(user);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return(
        <Box>
            <NavBar/>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TableUser users={users} onClick={getLikedSongs} loading={load}/> 
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TableSong songs={songs} user={userName} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default MainPage;