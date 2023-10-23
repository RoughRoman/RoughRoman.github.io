import { useState } from 'react';
import { Link, Grid, IconButton,  AppBar, Toolbar, Container, Box, CardHeader, Avatar, CardContent, Button } from '@mui/material';
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LaunchIcon from '@mui/icons-material/Launch';

import CV from './docs/M.Lategan CV.pdf';
import Record from './docs/AcademicRecord.pdf';



function App() {
  return (
    <>
      <NavBar></NavBar>
      <HeroBar></HeroBar>
      <Experience></Experience>
      <Education></Education>
      
    </>
  );
}

export default App;

function HeroBar() {
  return (
    <>
      <Container sx={{
        paddingTop: '10%'
      }}>
        <Typography fontFamily={'roboto'} variant="h1" color="initial" sx={{
        }}> Hello, I'm Matthew Lategan. </Typography>
        <Typography fontFamily={'roboto'} variant="body1" color="initial" sx={{
          fontSize:'30px'
        }}>Welcome to my site. Please, have a look around.</Typography>
      </Container>
    </>
  );
}

 


function NavBar() {
  return (
    <AppBar position="fixed" sx={{ background: 'transparent', boxShadow: 'none',}}>
      <Toolbar  sx={{ justifyContent: 'end'}}>
        <Box>
          <IconButton  aria-label="github icon" href="https://github.com/RoughRoman" target='_blank'>
            <GitHubIcon fontSize='large'></GitHubIcon>
          </IconButton>
          <IconButton aria-label="linkedin icon" href="https://www.linkedin.com/in/matthew-lategan-449921235/" target='_blank'>
            <LinkedInIcon fontSize='large'></LinkedInIcon>
          </IconButton>
          <IconButton aria-label="instagram icon" href="https://www.instagram.com/man_of_a_suspicious_nature/" target='_blank'>
            <InstagramIcon fontSize='large'></InstagramIcon>
          </IconButton>
          <IconButton aria-label="email icon" href="mailto:matthew.lategan26@gmail.com">
            <EmailIcon fontSize='large'></EmailIcon>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}


function Experience(){
  return(
    <>
      <Container sx={{paddingTop:"10%"}}>
        <Typography variant="h2" sx={{ paddingBottom:"3%"}}>Experience</Typography>
        <ExperienceCard
          companyAndDate="Tangent Solutions | 2024 - Present"
          jobTitle="Junior Engineering Consultant."
          skillsList="AWS, Linux, Github, YAML, Python"
          responList="Assisting in the design and implementation of scalable, cloud-native business infrastructure."
          linkTo="https://tangentsolutions.co.za/"
          imgSrc="https://media.licdn.com/dms/image/C510BAQHDmnordYXYVw/company-logo_200_200/0/1519879581821?e=2147483647&v=beta&t=N8ux-twe81KC4VlRHYVoELnMuby_FQ-3_2FwxM4hwnQ"
        />
        
        <Button sx={{marginTop:"1%"}} variant="outlined" color="primary" href={CV} download={"M-Lategan-CV"} >
          <Typography textTransform={"none"}> Want my CV?</Typography>
          
        </Button>
      </Container>
    </>
  )
}
function ExperienceCard({ companyAndDate, jobTitle, skillsList, responList, linkTo, imgSrc }) {
  return (
    <Card sx={{ backgroundColor: "hsla(270, 1%, 29%, 0.3)" }}>
      <CardHeader
        avatar={
          <Avatar aria-label="Tangent Icon" src={imgSrc}>
          </Avatar>
        }
        action={
          <IconButton aria-label="" href={linkTo} target='_blank'>
            <LaunchIcon></LaunchIcon>
          </IconButton>
        }
        title={companyAndDate}
        subheader={jobTitle}
      />
      <CardContent>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="start"
          alignItems="center"
          alignContent="center"
          wrap="wrap">
          <Box flexGrow={1}>
            <Typography>Skills:</Typography>
            <Typography> {skillsList}</Typography>
          </Box>
          <Box flexGrow={1}>
            <Typography>Responsibilities:</Typography>
            <Typography> {responList}</Typography>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
}


function Education(){
  return(
    <>
      <Container sx={{paddingTop:"10%"}}>
        <Typography variant="h2" sx={{ paddingBottom:"3%"}}>Education</Typography>
        <EducationCard 
        instituteAndDate={"University of South Africa | 2019 - 2022"}
        qualification={"Bachelor of Science in Computing"}
        description={"My Computer Science degree opened doors to the intricate world of technology, where I explored more than just coding. It enabled me to understand the core principles of computation, algorithms, data structures, and the vast landscape of computer science. From solving complex problems to studying emerging technologies, it's a journey of continuous learning and innovation."}
        linkTo={"https://www.unisa.ac.za/sites/corporate/default/Register-to-study-through-Unisa/Undergraduate-&-honours-qualifications/Find-your-qualification-&-choose-your-modules/All-qualifications/Bachelor-of-Science-in-Computing-(98906-%E2%80%93-COM)"}
        imgSrc={"https://pbs.twimg.com/media/D3umixOWsAAg5ev.jpg"}
        />

        <Button sx={{marginTop:"1%"}} variant="outlined" color="primary" href={Record} download={"M-Lategan-AcademicRecord"} >
          <Typography textTransform={"none"}> Here's my Academic Record</Typography>
        </Button> 
        
      </Container>
    </>
    
  )
}
function EducationCard({ instituteAndDate, qualification, description, linkTo, imgSrc }) {
  return (
    <Card sx={{ backgroundColor: "hsla(270, 1%, 29%, 0.3)" }}>
      <CardHeader
        avatar={
          <Avatar aria-label="Institute-Icon" src={imgSrc}>
          </Avatar>
        }
        action={
          <IconButton aria-label="Institute-Link" href={linkTo} target='_blank'>
            <LaunchIcon></LaunchIcon>
          </IconButton>
        }
        title={instituteAndDate}
        subheader={qualification}
      />
      <CardContent>
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="start"
          alignItems="center"
          alignContent="center"
          wrap="wrap">
          <Box flexGrow={1}>
            <Typography>{description}</Typography>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
}

function Projects(){
  return(
    <>
    </>
  )
}

