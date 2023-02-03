import React, { useState } from 'react';
// import { fade, makeStyles } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Grid } from '@mui/material';
import image from "./photo_main.jpg";


// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   sectionDesktop: {
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'flex',
//     },
//   },
//   sectionMobile: {
//     display: 'flex',
//     [theme.breakpoints.up('sm')]: {
//       display: 'none',
//     },
//   },
// }));

export default function HomePage() {
  return (
    <Box marginTop={5}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5} xl={5}>
          <img style={{width: "99%"}} src={image} alt="Image" />
        </Grid>
        <Grid item xs={12} md={7} xl={7}>
        <h1>Художник Ирина Бологова</h1>
        <p>   Я живу в Калуге, Россия, у меня небольшая мастерская живописи в загородном доме. <br/><br/>
              Пишу в основном пейзажи и натюрморты, ориентируюсь на впечатления. <br/><br/>
              Я обычно использую акрил, масло или акварель в различных техниках. <br/><br/>
              В основном я черпаю вдохновение для своих работ в том, что меня окружает.  <br/><br/>
              Природа, обычные вещи в доме, цветы. У меня есть серия картин с лошадьми. Есть также много идей, поступающих из Интернета.
              </p>
        <p>Участник многих выставок городского и областного уровня.</p>
        <p>Калуга</p>
        </Grid>
      </Grid>
  </Box>
  );
}