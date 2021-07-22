import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
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
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        style={{ fontWeight: "bold" }}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
        }
        title={props.text}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={props.src}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.label}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ButtonGroup>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            View
          </Button>

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={deletePost}
          >
            Delete
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );

  function deletePost() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`, {
      method: "DELETE",
    }).then((response) => {
      props.onDelete(props.id);
    });

    alert("Deleted post " + props.id);
    console.log("Deleted", props.id);
  }
}
