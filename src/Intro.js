import React from "react";
import {Paper, Typography} from '@mui/material';
import './Intro.css';

const Intro = () => {
    return (
        <Paper variant="outlined" elevation={10} sx={{backgroundColor: "rgb(23, 21, 20)",
            borderColor: "white"
        }} className="paper_style">
            <div className="text_part">
                <Typography variant="h2" gutterBottom className="intro_text">
                    Hey there,
                </Typography>
                <Typography variant="h2" fontWeight="bold" fontSize={70} gutterBottom className="intro_text" color="violet">
                    I'm Rahul Kanna A V
                </Typography>
                <Typography variant="h5" color="white" className="intro_text">
                    a passionate Post Graduate student who is keen on learning about various aspects
                    of Computer Science such as Web Development, Data Science, Blockchain etc.
                </Typography>
            </div>

            <div style={{
                paddingLeft: "40px"
            }} >
                <img src="My_image.jpg" className="image_part" />
            </div>
        </Paper>
    );
}

export default Intro;