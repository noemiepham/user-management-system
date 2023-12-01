import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 60,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },

  hd: {
    backgroundColor: "#B9B7BD",
    padding: 12,
    width: 400,
  },
}));

const ShowUser = ({ user }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.hd} title={user.id} />
      <CardMedia
        className={classes.media}
        image={user ? user.image : ""}
        title={user ? user.firstName : ""}
      />
      <CardContent width={500}>
        <Typography variant="body2" color="textSecondary" component="p">
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {user.age}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {user.gender}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {user.email}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {user.university}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ShowUser;
