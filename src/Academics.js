import React from "react"; 
import { Paper, Typography } from "@mui/material";
import './Intro.css';
import './Academics.css';

const Academics = () => {
    const academicDetails = [
        {
            image: "https://imgs.search.brave.com/aVUdyxaVyE6TCd9dwqenCMDmZsQkIRSZNpKLb7PsnDc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tLzIwMjQvYW5p/bWF0ZWQtc2Nob29s/L2FuaW1hdGVkLXNj/aG9vbC0yMi5qcGc",
            grade: "Class X",
            name: "Christ the King Matric Higher Secondary School",
            mark: "Percentage: 94%"
        },
        {
            image: "https://imgs.search.brave.com/aVUdyxaVyE6TCd9dwqenCMDmZsQkIRSZNpKLb7PsnDc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tLzIwMjQvYW5p/bWF0ZWQtc2Nob29s/L2FuaW1hdGVkLXNj/aG9vbC0yMi5qcGc",
            grade: "Class XII",
            name: "Christ the King Matric Higher Secondary School",
            mark: "Percentage: 94.92%"
        },
        {
            image: "https://imgs.search.brave.com/Bco5YEuIfyNvTmg-8uU7FXZg-qelIwWC-zawfh36Je4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bXlleGFtY2xvdWQu/Y29tL29ubGluZWV4/YW0vaW1nL3NhdGh5/YWJhbWEtaW1hZ2Uu/cG5n",
            grade: "UG",
            name: "Sathyabama Institute of Science and Technology",
            mark: "CGPA: 9.43"
        }
    ]

    return (
        <Paper variant="outlined" elevation={10} sx={{backgroundColor: "rgb(23, 21, 20)",
            borderColor: "white"
        }} className="acad_style">
            <Typography variant="h1" color="white" className="academic_title" >
                ACADEMICS
            </Typography>

            <div className="academic_flexbox">
                <img className="acad_hat" src={"https://imgs.search.brave.com/e-DGvPibP6363oULVMJduiQkEySpKhODSevfoM35aGg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNy9BY2Fk/ZW1pYy1IYXQtUE5H/LVBob3Rvcy5wbmc"} />
                <div className="education_qualifications">
                    {academicDetails.map((acad) => (
                        <div className="detail">
                           <img className="institute_logo" src={acad.image} />
                           <div className="institute_text">
                               <Typography variant="h4" color="white">
                                   {acad.grade}
                               </Typography>
   
                               <Typography variant="h4" color="white">
                                   {acad.name}
                               </Typography>

                               <Typography variant="h4" color="white">
                                   {acad.mark}
                               </Typography>
                           </div>
                       </div> 
                        ))}
                </div>
            </div>
        </Paper>
    )

}

export default Academics;