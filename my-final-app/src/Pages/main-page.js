import React, { useState, useEffect } from 'react';
import { Container, Box } from "@material-ui/core";
import NavBar from '../Components/NavBar';
import Tables from '../Components/Table';

const MainPage = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async() => {
        const response = await fetch("http://localhost:5000/users");
        const data = await response.json();
        setUsers(data);
    }

    const getLikedSongs = (e, userSongs) => {
        console.log(userSongs);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return(
        <Box>
            <NavBar/>
            <Container maxWidth="md">
                <Box my="20px" py="10px">
                    <Tables users={users} onClick={getLikedSongs}/>
                </Box>
            </Container>
        </Box>
    );
}

export default MainPage;