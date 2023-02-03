import { Box, ImageList, ImageListItem, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import image_0 from './catalog/photo_2023-02-03_23-49-44.jpg';
import image_1 from './catalog/photo_2023-02-03_23-49-19.jpg';
import image_2 from './catalog/photo_2023-02-03_23-49-03.jpg';
import image_3 from './catalog/photo_2023-02-03_23-49-12.jpg';
import image_4 from './catalog/photo_2023-02-03_23-48-37.jpg';
import image_5 from './catalog/photo_2023-02-03_23-48-48.jpg';
import image_6 from './catalog/photo_2023-02-03_23-49-23.jpg';
import image_7 from './catalog/photo_2023-02-03_23-49-40.jpg';
import image_8 from './catalog/photo_2023-02-03_23-49-09.jpg';
import image_9 from './catalog/photo_2023-02-03_23-48-59.jpg';
import image_10 from './catalog/photo_2023-02-03_23-49-37.jpg';
import image_11 from './catalog/photo_2023-02-03_23-49-05.jpg';
import image_12 from './catalog/photo_2023-02-03_23-49-13.jpg';


export default function CatalogPage() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
    }
    useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
        window.removeEventListener('resize', setWindowDimensions)
    }
    }, [])

    let col_num = 4

    if (windowWidth >= 720 && windowWidth < 960) {
        col_num = 3
    }
    if ( windowWidth >= 540 && windowWidth < 720) {
        col_num = 2
    }
    if (windowWidth < 540) {
        col_num = 1
    }

    return (
        <Box>
        <h1>Каталог</h1>

        {/* fix it https://mui.com/material-ui/react-image-list/#MasonryImageList.tsx */}

        <ImageList sx={{ width: "99%", height: "99%" }} variant="masonry" cols={col_num} gap={8}>
            <ImageListItem >
                <img
                    src={image_0}
                    alt={'image_photo_2023-02-03_23-49-44.jpg'}
                    loading="lazy"
                />
            </ImageListItem>

            <ImageListItem >
                <img
                    src={image_1}
                    alt={'image_photo_2023-02-03_23-49-19.jpg'}
                    loading="lazy"
                />
            </ImageListItem>

            <ImageListItem >
                <img
                    src={image_2}
                    alt={'image_photo_2023-02-03_23-49-03.jpg'}
                    loading="lazy"
                />
            </ImageListItem>

            <ImageListItem >
                <img
                    src={image_3}
                    alt={'image_photo_2023-02-03_23-49-12.jpg'}
                    loading="lazy"
                />
            </ImageListItem>

            <ImageListItem >
                <img
                    src={image_4}
                    alt={'image_photo_2023-02-03_23-48-37.jpg'}
                    loading="lazy"
                />
            </ImageListItem>

            <ImageListItem >
                <img
                    src={image_5}
                    alt={'image_photo_2023-02-03_23-48-48.jpg'}
                    loading="lazy"
                />
            </ImageListItem>

            <ImageListItem >
                <img
                    src={image_6}
                    alt={'image_photo_2023-02-03_23-49-23.jpg'}
                    loading="lazy"
                />
            </ImageListItem>

            <ImageListItem >
                <img
                    src={image_7}
                    alt={'image_photo_2023-02-03_23-49-40.jpg'}
                    loading="lazy"
                />
            </ImageListItem>

            <ImageListItem >
                <img
                    src={image_8}
                    alt={'image_photo_2023-02-03_23-49-09.jpg'}
                    loading="lazy"
                />
            </ImageListItem>

            <ImageListItem >
                <img
                    src={image_9}
                    alt={'image_photo_2023-02-03_23-48-59.jpg'}
                    loading="lazy"
                />
            </ImageListItem>

            <ImageListItem >
                <img
                    src={image_10}
                    alt={'image_photo_2023-02-03_23-49-37.jpg'}
                    loading="lazy"
                />
            </ImageListItem>

            <ImageListItem >
                <img
                    src={image_11}
                    alt={'image_photo_2023-02-03_23-49-05.jpg'}
                    loading="lazy"
                />
            </ImageListItem>

            <ImageListItem >
                <img
                    src={image_12}
                    alt={'image_photo_2023-02-03_23-49-13.jpg'}
                    loading="lazy"
                />
            </ImageListItem>

        </ImageList>
        {/* <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} xl={3}>
                <img src={image_0} style={{width: "99%"}} alt={'image_photo_2023-02-03_23-49-44.jpg'} loading="lazy" />
            </Grid>


            <Grid item xs={12} sm={6} md={3} xl={3}>
                <img src={image_1} style={{width: "99%"}} alt={'image_photo_2023-02-03_23-49-19.jpg'} loading="lazy" />
            </Grid>


            <Grid item xs={12} sm={6} md={3} xl={3}>
                <img src={image_2} style={{width: "99%"}} alt={'image_photo_2023-02-03_23-49-03.jpg'} loading="lazy" />
            </Grid>


            <Grid item xs={12} sm={6} md={3} xl={3}>
                <img src={image_3} style={{width: "99%"}} alt={'image_photo_2023-02-03_23-49-12.jpg'} loading="lazy" />
            </Grid>


            <Grid item xs={12} sm={6} md={3} xl={3}>
                <img src={image_4} style={{width: "99%"}} alt={'image_photo_2023-02-03_23-48-37.jpg'} loading="lazy" />
            </Grid>


            <Grid item xs={12} sm={6} md={3} xl={3}>
                <img src={image_5} style={{width: "99%"}} alt={'image_photo_2023-02-03_23-48-48.jpg'} loading="lazy" />
            </Grid>


            <Grid item xs={12} sm={6} md={3} xl={3}>
                <img src={image_6} style={{width: "99%"}} alt={'image_photo_2023-02-03_23-49-23.jpg'} loading="lazy" />
            </Grid>


            <Grid item xs={12} sm={6} md={3} xl={3}>
                <img src={image_7} style={{width: "99%"}} alt={'image_photo_2023-02-03_23-49-40.jpg'} loading="lazy" />
            </Grid>


            <Grid item xs={12} sm={6} md={3} xl={3}>
                <img src={image_8} style={{width: "99%"}} alt={'image_photo_2023-02-03_23-49-09.jpg'} loading="lazy" />
            </Grid>


            <Grid item xs={12} sm={6} md={3} xl={3}>
                <img src={image_9} style={{width: "99%"}} alt={'image_photo_2023-02-03_23-48-59.jpg'} loading="lazy" />
            </Grid>


            <Grid item xs={12} sm={6} md={3} xl={3}>
                <img src={image_10} style={{width: "99%"}} alt={'image_photo_2023-02-03_23-49-37.jpg'} loading="lazy" />
            </Grid>


            <Grid item xs={12} sm={6} md={3} xl={3}>
                <img src={image_11} style={{width: "99%"}} alt={'image_photo_2023-02-03_23-49-05.jpg'} loading="lazy" />
            </Grid>


            <Grid item xs={12} sm={6} md={3} xl={3}>
                <img src={image_12} style={{width: "99%"}} alt={'image_photo_2023-02-03_23-49-13.jpg'} loading="lazy" />
            </Grid>
        </Grid> */}
      </Box>
    )
}