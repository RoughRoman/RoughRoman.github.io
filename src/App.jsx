import { useState } from 'react';
import { Grid, IconButton,  AppBar, Toolbar, Container, Box, CardHeader, Avatar, CardContent, Button,  Fab, createTheme, ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import CV from './docs/M.Lategan CV.pdf';
import Record from './docs/AcademicRecord.pdf';

/* Initially, this project had a nest of sub folders for various components and sub-components.
However, the project is not nearly complex enough to justify creating said nest of folders. So its all here in App.jsx */


export const themeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#673ab7',
    },
    secondary: {
      main: '#009688',
    },
    info: {
      main: '#29f6e0',
    },
    text: {
      primary: '#aae2ec',
      secondary: 'rgba(34,148,127,0.7)',
    },
    background: {
      default: '#121212',
    },
  },
};

const mainTheme = createTheme(themeOptions);


function App() {
  return (
    <>
    
      <ThemeProvider theme={mainTheme}>
        <NavBar></NavBar>
        <HeroBar></HeroBar>
        <Experience></Experience>
        <Education></Education>
        <Projects></Projects>
        <Fab
          sx={{
            backgroundColor: "hsla(270, 1%, 29%, 0.3)",
            margin: "0px",
            top: "auto",
            right: "20px",
            bottom: "20px",
            left: "auto",
            position: "fixed"}}
          color="primary"
          aria-label=""
          onClick={()=>{
            window.scrollTo({top: 0, behavior: 'smooth'});
          }}
        >
          
          <ArrowUpwardIcon/>
        </Fab>

      </ThemeProvider>
      


      
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
        <Typography fontFamily={'roboto'} variant="h1" color="secondary" sx={{
        }}> Hello, I'm Matthew Lategan. </Typography>
        <Typography fontFamily={'roboto'} variant="body1" color="secondary" sx={{
          fontSize:'30px'
        }}>Welcome to my site. Please, have a look around.</Typography>
      </Container>
      
    </>
  );
}

 


function NavBar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'hsla(222, 18%, 43%, 0.2)', boxShadow: 'none', backdropFilter:"blur(10px)"}}>
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
        <Typography  fontFamily={'roboto'} variant="h2" sx={{ paddingBottom:"3%"}} color="secondary">Experience</Typography>
        <ExperienceCard
          companyAndDate="Tangent Solutions | Starting 2024"
          jobTitle="Junior Engineering Consultant."
          skillsList="To be discovered"
          responList="To be discovered"
          linkTo="https://tangentsolutions.co.za/"
          imgSrc="https://media.licdn.com/dms/image/C510BAQHDmnordYXYVw/company-logo_200_200/0/1519879581821?e=2147483647&v=beta&t=N8ux-twe81KC4VlRHYVoELnMuby_FQ-3_2FwxM4hwnQ"
        />
        
        <Button sx={{marginTop:"1%"}} variant="outlined" color="secondary" href={CV} download={"M-Lategan-CV"} >
          <Typography fontFamily={'roboto'} textTransform={"none"} fontSize={"25px"}> Want my CV?</Typography>
          
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
        <Typography fontFamily={'roboto'} variant="h2" sx={{ paddingBottom:"3%"}} color="secondary">Education|Certifications</Typography>
        <EducationCard 
          instituteAndDate={"University of South Africa | 2019 - 2022"}
          qualification={"Bachelor of Science in Computing"}
          description={"From the UNISA website: 'Successful learners should have a systematic and coherent body of knowledge. An understanding of underlying concepts and principles of computing and the ability to apply this in the workplace. A high level of cognitive and other generic skills including problem-solving, written and spoken communication. Specific skills and applied competence leading to continued personal intellectual growth, gainful economic activity and valuable contributions to society in science and technology.'"}
          linkTo={"https://www.unisa.ac.za/sites/corporate/default/Register-to-study-through-Unisa/Undergraduate-&-honours-qualifications/Find-your-qualification-&-choose-your-modules/All-qualifications/Bachelor-of-Science-in-Computing-(98906-%E2%80%93-COM)"}
          imgSrc={"https://pbs.twimg.com/media/D3umixOWsAAg5ev.jpg"}
        />

        {/*
        <EducationCard 
          instituteAndDate={"AWS Certifications | 2024"}
          qualification={"Certified Cloud Practitioner"}
          description={"The AWS Certified Cloud Practitioner validates foundational, high-level understanding of AWS Cloud, services, and terminology.  This is a good starting point on the AWS Certification journey for individuals with no prior IT or cloud experience switching to a cloud career or for line-of-business employees looking for foundational cloud literacy."}
          linkTo={"https://aws.amazon.com/certification/certified-cloud-practitioner/?ch=sec&sec=rmg&d=1"}
          imgSrc={"https://www.jdrf.org/wp-content/uploads/2020/12/AWS-logo-2.jpg"}
        />
        */}

        <Button sx={{marginTop:"1%"}} variant="outlined" color="secondary" href={Record} download={"M-Lategan-AcademicRecord"} >
          <Typography fontFamily={'roboto'} textTransform={"none"} fontSize={"25px"}> Here's my Academic Record</Typography>
        </Button> 
        
      </Container>
    </>
    
  )
}
function EducationCard({ instituteAndDate, qualification, description, linkTo, imgSrc }) {
    
  return (
    <Card sx={{ backgroundColor: "hsla(270, 1%, 29%, 0.3)", marginTop:"2%" }}>
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
    <Container>
      <Typography fontFamily={'roboto'} variant="h2" sx={{marginTop:"10%"}} color="secondary" > Projects</Typography>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="start"
        alignItems="start"
        alignContent="start"
        wrap="wrap"
      >
        <ProjectCard
        projectTitle={"This website"}
        projectSubHeader={"React + MaterialUi"}
        content= {"Not much to say about it. You are currently viewing it. Go dig in the source code if you are interested. Also please note: I have no experience with web development or UX design. So don't take this as my best. This is literally a first project"}
        linkTo={"https://github.com/RoughRoman/RoughRoman.github.io"}
        />

        <ProjectCard
        projectTitle={"Obsidian to Html Wiki"}
        projectSubHeader={"Python"}
        content= {"I love obsidian, best note app I've ever used. But I'm not going to pay them just to host my hard written notes as a wiki. " +
         "When I could build a solution to do it myself. So, with a bit of python-ing and html-ing, "+
         "I should be able to create a folder with all my notes turned into functioning and semi nice looking html pages. Basically just wrap the "+
         "markdown content in some MD compatible Html element. Do some string manipulation to convert MD links to anchors. Maybe spruce it up with an index page and some styling. Bam"}
        linkTo={"https://github.com/RoughRoman/Obsidian-to-html"}
        />

        <ProjectCard
        projectTitle={"LeadrBoard"}
        projectSubHeader={"React + AWS"}
        content = {"This is an idea bubbling in my mind. Nothing concrete done yet. Still struggling with React. GUIs are hard to design." +
                  " Basically I want a webapp for my fellow tabletop wargame players to be able to rank each other and organise local tornaments etc."+
                  " I want to leverage AWS to provide data storage, Auth, data processing (Lambda), and other bits and pieces. Namely, because it's" +
                  " good experience and it will work out cheaper to host if I build and optimise things myself."}
        linkTo={null}
        />

        <ProjectCard
        projectTitle={"LightWeight"}
        projectSubHeader={"React"}
        content={"Essentially a workout logging app. But the challenge is trying to fit all user data inside the browsers cache." +
        " No log-ins, no databases. Just pure json compressed to hell. Definitely provide some kind of import/export system so that"+
         " people dont lose their data if they clear their browser cache. This is lowest on my project list. Might not even be feasible. But worth a tinker."}
        linkTo={null}
        />
        
      </Grid>
    </Container>

    </>
  )
}
function ProjectCard({projectTitle, projectSubHeader,  linkTo, content}){
  var linkBtn = false;
  if (linkTo == null){
    linkBtn = true;
  }
  return(<>
    <Card sx={{ backgroundColor: "hsla(270, 1%, 29%, 0.3)", marginTop:"2%", marginBottom:"10%"}}>
      <CardHeader
        action={
          <IconButton aria-label="" href={linkTo} target='_blank' disabled={linkBtn}>
            <LaunchIcon></LaunchIcon>
          </IconButton>
        }
        title={projectTitle}
        subheader={projectSubHeader}
        
      />
      <CardContent>
      <Box flexGrow={1}>
            <Typography>{content}</Typography>
      </Box>
      </CardContent>
    </Card>
  
  
  </>)
}

