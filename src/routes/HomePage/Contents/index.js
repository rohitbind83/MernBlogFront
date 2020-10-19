
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { deepOrange, green } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import LocationOn from '@material-ui/icons/LocationOn';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Posts from './Posts';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  mobilepadding:{
    padding: '12px 0',
  },
  square:{
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  avatar: {
    margin: '15px auto',
    textAlign: 'center',
    width:200,
    backgroundColor:'#FFF',
    borderRadius:6,
    padding:'7px'
  },
  avatarImg:{  
    height:190,
    backgroundPosition:'50% 30%',
    objectFit:'50% 30%',
    width:'100% !important',
    height:'100%',
    margin:'auto'
  }
}));

export default function Contents() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root} style={{paddingLeft:15,paddingRight:15,marginTop:13}}> 
        <Grid container spacing={3}>
          <Hidden only="xs">
            <Grid item lg={3} >
              <div className={classes.avatar} >
                <img className={classes.avatarImg} style={{verticalAlign:'middle'}} src="https://static2.tripoto.com/media/filter/nt/img/1993513/UserPhoto/1601535486_1601535474447.jpg" />
              </div>
              <div style={{textAlign:'center'}}>
                <Typography variant="h5" align='center' component="h5" gutterBottom>
                  <spna style={{fontSize:24,fontWeight:'bold'}}>Smita Yadav</spna>
                </Typography>
                <div style={{display:'inline-flex',lineHeight:'1.6'}}>
                  <LocationOn align="center" color='primary' />
                  <span>Utter Pradesh</span>
                </div>
              </div>
              <div style={{textAlign:'left',marginLeft:50}}>
                <span>A Full Time Dreamer & Part Time Writer.</span>
                <p style={{fontSize:18,marginTop:'10px'}}>Follow me on -</p>
                <div>
                  <Instagram style={{fontSize:40, color:'#e4405f'}} />
                  <Facebook style={{marginLeft:10,fontSize:40,color:'#3b5999'}} />
                </div>
              </div>
            </Grid>
          </Hidden>
          <Grid item xs={12} lg={6} style={{padding:'12px 0'}}>
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
          </Grid>
          <Hidden only="xs">
            <Grid item lg={3}>
              <Card style={{minWidth:275,margin:'15px auto'}}>
              <CardHeader
                title="Popular Blogs"
              />
              <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    उत्तराखंड के अल्मोड़ा जिले में स्थित है। 
                  </Typography>
              </CardContent>
              <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    उत्तराखंड के अल्मोड़ा जिले में स्थित है। 
                  </Typography>
              </CardContent>
              <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    उत्तराखंड के अल्मोड़ा जिले में स्थित है। 
                  </Typography>
              </CardContent>
              </Card>
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </>
  ); 
}
