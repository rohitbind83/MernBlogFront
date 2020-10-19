import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Visibility from '@material-ui/icons/Visibility';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    margin:'15px 0'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Posts() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            S
          </Avatar>
        }
        title="रानीखेत : उत्तराखंड में बसा एक खूबसूरत अजूबा!!"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://static2.tripoto.com/media/filter/tst/img/1727/TripDocument/1487147773_massoorie_mountains03.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          उत्तराखंड के अल्मोड़ा जिले में स्थित है। रानीखेत एक छोटा शहर है जो समुद्र तल से 1824 मीटर की ऊंचाई पर स्थित है। 
          यहां का शांत वातावरण, फूलों से ढके रास्ते, देवदार और पाईन के लम्बे लम्बे पेड़ हर साल बड़ी संख्या में पर्यटकों को 
          अपनी तरफ आकर्षित करते हैं।...
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <Visibility /><span style={{fontSize:15,marginLeft:5,fontWeight:'bold'}}>50</span>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}