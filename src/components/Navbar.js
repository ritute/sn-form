import { useState } from 'react'
import {
  makeStyles,
  Container,
  Toolbar,
  Grid,
  AppBar,
  Button,
  Drawer,
  Hidden,
  IconButton,
  Avatar,
} from '@material-ui/core'
import { 
  Menu as MenuIcon, 
  Notifications as NotificationsIcon,
} from '@material-ui/icons'

import DownArrowIcon from './icons/DownArrowIcon'
import logoImage from 'images/logo.png'

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: '#FFF',
    boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.05)',
    '& button:hover': {
      background: 'none',
    },
  },
  navLinks: {
    flexGrow: 1,
    paddingLeft: 40,
    '& button': {
      color: '#5D5D5D',
      textTransform: 'none',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.25rem',
      '&:not(:first-child)': {
        marginLeft: 29,
        [theme.breakpoints.down('md')]: {
          marginLeft: 5,
        },
      },
    },
  },
  logo: {
    background: `url(${logoImage})`,
    backgroundSize: 'cover',
    width: 155,
    height: 32,
    marginTop: '-0.75rem',
  },
  drawerPaper: {
    '& a': {
      padding: theme.spacing(1, 4)
    }
  },
  toolbar: {
    height: 64,
    [theme.breakpoints.down('md')]: {
      paddingRight: 0,
      '& > div': {
        padding: 0,
      },
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: 20,
    }
  },
  notifications: {
    fill: '#AAAAAA',
  },
  account: {
    textTransform: 'none',
    fontSize: '1rem',
    lineHeight: '1.25rem',
    '&:hover': {
      background: 'none',
    },
    '& .MuiButton-endIcon': {
      marginLeft: 6,
    }
  },
  avatar: {
    marginRight: 8,
    width: 36,
    height: 36,
  },
  [theme.breakpoints.down('sm')]: {
    logoWrapper: {
      flexGrow: 1,
    },
  },
}))

const navLinks = [
  {
    title: 'Try Products',
  },
  {
    title: 'Launchpad',
  },
  {
    title: 'How It Works',
  },
  {
    title: 'Our Values',
  },
  {
    title: 'Our Blog',
  },
]

const Logo = () => {
  const classes = useStyles()
  return (
    <Grid item className={classes.logoWrapper}>
      <div className={classes.logo}></div>
    </Grid>
  )
}

const Nav = () => {
  const classes = useStyles()
  return (
    <Hidden smDown>
      <Grid item className={classes.navLinks}>
        <nav>
          {navLinks.map(({ title }, index) => (
            <Button key={`nav-link-${index}`}>{title}</Button>
          ))}
        </nav>
      </Grid>
    </Hidden>
  )
}

const Account = () => {
  const classes = useStyles()
  return (
    <Hidden smDown>
      <Grid item>
        <Grid container spacing={1} alignItems='center'>
          <Grid item>
            <IconButton className={classes.notificationButton}>
              <NotificationsIcon className={classes.notifications} />
            </IconButton>
          </Grid>
          <Grid item>
            <Button endIcon={<DownArrowIcon style={{ fontSize: '0.9rem' }} />} className={classes.account}>
              <Avatar src='../images/avatar.png' className={classes.avatar} />
              Hi, Arielle
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Hidden>
  )
}

const Navbar = () => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Container maxWidth='lg'>
          <Grid container alignItems='center' justify='flex-end'>
            <Logo />
            <Nav />
            <Account />
            <Hidden mdUp implementation='css'>
              <IconButton onClick={handleDrawerToggle}><MenuIcon /></IconButton>
              <Drawer
                variant='temporary'
                anchor='left'
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // better open performance on mobile
                }}>
                {/* <NavDrawer onClick={handleDrawerToggle} /> */}
              </Drawer>
            </Hidden>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
