import React, { Fragment } from 'react';
import { Grid, Box, Typography, Paper, Link, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Head from 'next/head';
import Moment from 'react-moment';
import mockData from '../mock_data';
import {
  Container,
  Accordion,
  Carousel,
  ImageParallax,
  Footer
} from '../shared';

function ModulePic({ isPortrait }) {
  return (
    <Box
      pt={isPortrait ? 15 : 22}
      display='flex'
      justifyContent='center'
      style={
        {
          // backgroundColor: theme.palette.primary.main
        }
      }
    >
      <Container isPortrait={isPortrait}>
        <img
          src='/module.png'
          style={{
            width: isPortrait ? '70%' : '60%'
          }}
        />
      </Container>
    </Box>
  );
}

function Features({ isPortrait }) {
  const [expanded, setExpanded] = React.useState(0);

  function Item({ h, p }) {
    return (
      <Box>
        <Typography variant='h4' style={{ color: 'white' }}>
          {h}
        </Typography>
        <Typography style={{ color: 'white' }}>{p}</Typography>
      </Box>
    );
  }
  return (
    <Box
      pt={isPortrait ? 15 : 22}
      style={
        {
          // backgroundColor: theme.palette.primary.main
        }
      }
    >
      {isPortrait ? (
        <Fragment>
          {mockData.features.map((itm, i) => (
            <Accordion
              summary={itm.title}
              key={itm.id}
              expanded={expanded === i}
              onChange={() => {
                setExpanded(i);
              }}
            >
              <Typography style={{ color: 'white' }}>
                {itm.description}
              </Typography>
            </Accordion>
          ))}
        </Fragment>
      ) : (
        <Container isPortrait={isPortrait}>
          <Grid
            container
            spacing={10}
            direction='row'
            justify='center'
            alignItems='flex-start'
          >
            {mockData.features.map((itm) => (
              <Grid item lg={4} key={itm.id}>
                <Item h={itm.title} p={itm.description} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </Box>
  );
}

function DateTag({ date, bgColor, isPortrait }) {
  const theme = useTheme();
  return (
    <Grid item xs={5} lg={3} className='date'>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        borderRadius={theme.spacing(2)}
        height={theme.spacing(3.1)}
        pb={0.3}
        style={{
          backgroundColor: bgColor
        }}
      >
        <Typography variant='caption' style={{ color: 'white' }}>
          <Moment interval={0} format='MMM D, YYYY'>
            {date}
          </Moment>
        </Typography>
      </Box>
    </Grid>
  );
}

function News({ isPortrait }) {
  const theme = useTheme();
  return (
    <Paper style={{ height: theme.spacing(isPortrait ? 43 : 65) }}>
      <Carousel
        isPortrait={isPortrait}
        title={<Typography variant='overline'>NEWS & EVENTS</Typography>}
        items={mockData.news}
        itemBuilder={(item) => (
          <Grid
            container
            spacing={3}
            style={{
              position: 'absolute',
              top: theme.spacing(3.4),
              paddingRight: theme.spacing(4)
            }}
          >
            <Grid item lg={9} xs={7}></Grid>
            <DateTag
              date={item.date}
              bgColor='rgba(0, 0, 0, 0.4)'
              isPortrait={isPortrait}
            />
            <Grid item xs={12}>
              <Typography
                variant='h3'
                style={{
                  marginLeft: theme.spacing(4),
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical'
                }}
              >
                <Link href={item.link}>{item.headline}</Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                style={{
                  marginLeft: theme.spacing(4),
                  height: isPortrait ? '90px' : '211px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: isPortrait ? 3 : 7,
                  WebkitBoxOrient: 'vertical'
                }}
              >
                {item.article}
              </Typography>
            </Grid>
          </Grid>
          // <Fragment>
          //   <Typography
          //     style={{
          //       marginBottom: theme.spacing(isPortrait ? 1 : 2)
          //     }}
          //   >
          //     <Moment interval={0} format='MMM D, YYYY'>
          //       {item.date}
          //     </Moment>
          //   </Typography>
          //   <Typography
          //     variant='h3'
          //     style={{
          //       marginBottom: theme.spacing(2),
          //       height: isPortrait ? '57px' : '91px',
          //       overflow: 'hidden',
          //       textOverflow: 'ellipsis',
          //       display: '-webkit-box',
          //       WebkitLineClamp: 2,
          //       WebkitBoxOrient: 'vertical'
          //     }}
          //   >
          //     <Link href={item.link}>{item.headline}</Link>
          //   </Typography>
          //   <Typography
          //     style={{
          //       height: isPortrait ? '90px' : '211px',
          //       overflow: 'hidden',
          //       textOverflow: 'ellipsis',
          //       display: '-webkit-box',
          //       WebkitLineClamp: isPortrait ? 3 : 7,
          //       WebkitBoxOrient: 'vertical'
          //     }}
          //   >
          //     {item.article}
          //   </Typography>
          // </Fragment>
        )}
      />
    </Paper>
  );
}

function Blog({ isPortrait }) {
  const theme = useTheme();
  return (
    <Paper
      style={{
        height: theme.spacing(isPortrait ? 43 : 65),
        overflow: 'hidden'
      }}
    >
      <Carousel
        isPortrait={isPortrait}
        items={mockData.blog}
        noFade
        title={
          <Typography variant='overline' style={{ color: 'white' }}>
            MAESTOR BLOG
          </Typography>
        }
        itemBuilder={(item) => (
          <Box width={1} height={1} className='blogItem'>
            <ImageParallax
              src={item.pic}
              width='100%'
              height='100%'
              windowRange={[-0.2, 0.6]}
            />
            <Box
              position='absolute'
              className='overlay'
              top={0}
              width={1}
              height={1}
              style={{
                background:
                  'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)'
              }}
            />
            <Grid
              container
              spacing={3}
              style={{
                position: 'absolute',
                top: theme.spacing(3.3),
                paddingRight: theme.spacing(4)
              }}
            >
              <Grid item lg={9} xs={7}></Grid>
              <DateTag
                date={item.date}
                bgColor='rgba(0, 0, 0, 0.2)'
                isPortrait={isPortrait}
              />
              <Grid item xs={12}>
                <Typography
                  variant='h3'
                  style={{ marginLeft: theme.spacing(4) }}
                >
                  <Link href={item.link} style={{ color: 'white' }}>
                    {item.headline}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        )}
      />
    </Paper>
  );
}

function Join({ isPortrait }) {
  const theme = useTheme();
  function JoinLogo() {
    return (
      <Grid item xs={6} lg={3}>
        <Box height='83px' style={{ backgroundColor: '#E5E5E5' }} />
      </Grid>
    );
  }

  function openContactModal() {
    console.log('open Contact modal');
  }

  return (
    <Paper>
      <Box
        p={isPortrait ? 3 : 6}
        pb={isPortrait ? 3 : 4}
        pt={isPortrait ? 2 : 4}
      >
        <Typography
          variant='h3'
          style={{
            color: theme.palette.primary.main,
            marginBottom: theme.spacing(3)
          }}
        >
          Join The Orchestra
        </Typography>
        <Grid container spacing={isPortrait ? 1 : 3}>
          <JoinLogo />
          <JoinLogo />
          <JoinLogo />
          <JoinLogo />
          <Grid item xs={12}>
            <Grid container spacing={isPortrait ? 1 : 3}>
              <Grid item xs={12} lg={9}>
                <Typography>
                  If you are a hardware component provider, developing a unique
                  robotic platform, operating a complimentary service, or
                  dreaming big - the Maestro team is eager to collaborate on
                  projects with you. Reach out to put vision in motion.
                </Typography>
              </Grid>
              <Grid item xs={12} lg={3}>
                <Button
                  variant='outlined'
                  onClick={openContactModal}
                  fullWidth
                  color='primary'
                >
                  Meet Maestro
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

function MissionStatement({ isPortrait }) {
  const theme = useTheme();
  return (
    <Box>
      <Container
        style={{
          paddingTop: theme.spacing(isPortrait ? 4 : 12),
          paddingBottom: theme.spacing(isPortrait ? 4 : 14),
          justifyContent: 'flex-start'
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12} lg={1}>
            <img
              src='/logo.svg'
              style={{
                marginRight: theme.spacing(5),
                width: 76
              }}
            />
          </Grid>
          <Grid item xs={12} lg={5}>
            <Typography
              style={{
                marginTop: theme.spacing(2),
                marginLeft: isPortrait ? 0 : theme.spacing(2)
              }}
            >
              Founded by visionaries, enthusiasts & technology experts to
              challenge conventions and design practical solutions to make life
              better for humans + robots.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box
        width={1}
        display='flex'
        justifyContent='center'
        pb={isPortrait ? 4 : 12}
      >
        <img
          src='/mission.png'
          style={{
            width: '90vw',
            maxWidth: 1640,
            margin: '0 auto'
          }}
        />
      </Box>
    </Box>
  );
}

export async function getServerSideProps(context) {
  console.log(context.req.headers['user-agent']);
  const isMobile = Boolean(
    context.req.headers['user-agent'].match(
      /iPhone|Android|BlackBerry|Windows Phone/i
    )
  );
  return {
    props: {
      isMobile,
      data: 'my data'
    } // will be passed to the page component as props
  };
}

export default function Home({ data, isMobile }) {
  const theme = useTheme();
  const isPortrait = isMobile || useMediaQuery(theme.breakpoints.down('sm'));
  console.log(`isPortrait: ${isPortrait}`);
  return (
    <Fragment>
      <Head>
        <title>634 AI</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Jura:wght@300;500&family=Work+Sans:wght@300;400;500&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Box
        style={{
          backgroundImage: 'url(bg-gradient.svg)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      >
        <ModulePic isPortrait={isPortrait} />
        <Features id='features' isPortrait={isPortrait} />
        <Box
          pt={isPortrait ? 15 : 32}
          pb={isPortrait ? 10 : 12}
          style={
            {
              // backgroundColor: theme.palette.primary.main
            }
          }
        >
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={6} xs={12}>
                <News isPortrait={isPortrait} />
              </Grid>
              <Grid item lg={6} xs={12}>
                <Blog isPortrait={isPortrait} />
              </Grid>
              <Grid item xs={12}>
                <Join isPortrait={isPortrait} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <MissionStatement isPortrait={isPortrait} />
      <Footer
        isMobile={isPortrait}
        email='maestro@634.ai'
        phone='+972-3-555-4666'
        address='Center Neve Ilan, Israel 9085000'
        addressLink='https://www.google.com/maps/place/Menachem+Begin+154,+Bnei+Brak/@32.0930882,34.8300778,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4a2708204011:0xa2a04d27c43b7804!8m2!3d32.0930882!4d34.8322718'
        allRightsReservedTo='634.AI LTD. 2021'
        linkedIn='https://www.linkedin.com/'
        instagram='https://www.instagram.com/'
        twitter='https://twitter.com/'
        facebook='https://www.facebook.com/'
      />
      <Box mb={10} />
    </Fragment>
  );
}
