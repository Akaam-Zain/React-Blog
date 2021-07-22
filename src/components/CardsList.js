import React, { useState, useEffect } from "react";
import Card from "./Card";
import Grid from "@material-ui/core/Grid";

function CardsList() {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then((result) => setPosts(result));

    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((resultImages) => setImages(resultImages));

    console.log(images);
  }, []);

  return (
    <div style={{ backgroundColor: "white", padding: "10px" }}>
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        Check out these EPIC Destinations!
      </h1>
      <div style={{ padding: "100px" }}>
        <Grid spacing={10} container>
          {posts.map((post, index) => (
            <Grid item md={4}>
              <Card
                key={post.id}
                id={post.id}
                src={images[index]?.url}
                text={post.title}
                label={post.body}
                onDelete={(id) => {
                  const newPosts = posts.filter((post) => post.id != id);
                  setPosts(newPosts);
                }}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default CardsList;
