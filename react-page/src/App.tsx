import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomePage  from './Home';
import CatalogPage  from './CatalogPage';
import { Container } from '@mui/material';


function App() {

  const [selectedPage, setSelectedPage] = useState('home');

  const handleClick = (page: string) => {
    setSelectedPage(page);
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Ирина Бологова
          </Typography>
          <div>
            <Button color="inherit" onClick={() => handleClick('home')}>Главная</Button>
            <Button color="inherit" onClick={() => handleClick('catalog')}>Каталог</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Container style={{maxWidth: "md"}}>
        {selectedPage === 'home' ? (
          <HomePage />
        ) : (
          <CatalogPage />
        )}
      </Container>

    </div>
  );
}

export default App;
