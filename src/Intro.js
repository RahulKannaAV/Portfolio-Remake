import React from "react";
import {Paper, Typography} from '@mui/material';
import './Intro.css';

const Intro = () => {
    return (
        <Paper elevation={5} className="paper_style">
            <div className="text_part">
                <Typography variant="h2" gutterBottom className="intro_text">
                    Hey there,
                </Typography>
                <Typography variant="h2" gutterBottom className="intro_text" color="violet">
                    I'm Rahul Kanna A V
                </Typography>
            </div>

            <div style={{backgroundColor: "black",
                paddingLeft: "40px"
            }} >
                <img src="My_image.jpg" className="image_part" />
            </div>
        </Paper>
    );
}

export default Intro;