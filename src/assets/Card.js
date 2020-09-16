import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

function MediaCard() {

  const [bigNames, setbigNames] = useState([
    {
      name: "Facebook",
      url:
        "https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19764.png",
      IP: "157.240.18.35",
      protocol: "443/HTTPS_WWW, 80/HTTP, 80/HTTP_WWW, 443/HTTPS, 25/SMTP",
      alexa: 8,
    },
    {
      name: "Youtube",
      url: "https://pngimg.com/uploads/youtube/youtube_PNG21.png",
      IP: "172.217.4.46",
      protocol: "443/HTTPS_WWW, 443/HTTPS, 80/HTTP_WWW, 25/SMTP, 80/HTTP",
      alexa: 2,
    },
    {
      name: "Google",
      url: "https://pngimg.com/uploads/google/google_PNG19640.png",
      IP: "172.217.8.174",
      protocol: "443/HTTPS_WWW, 80/HTTP, 80/HTTP_WWW, 443/HTTPS, 25/SMTP",
      alexa: 1,
    },
    {
      name: "Netflix",
      url: "https://pngimg.com/uploads/netflix/netflix_PNG26.png",
      IP: "34.198.43.9",
      protocol: "443/HTTPS_WWW, 80/HTTP, 80/HTTP_WWW, 443/HTTPS, 25/SMTP",
      alexa: 21,
    },
  ]);

  return (
    <div className="card_wrap">
      {bigNames.map((Name) => (
        <Card className="card">
          <CardActionArea>
            <CardMedia className="card_media" image={Name.url} title="Names" />
            <CardContent>
              <Typography
                className="title"
                gutterBottom
                variant="h2"
                component="h2"
                color="primary"
              >
                {Name.name}
              </Typography>
              <Typography
                className="ip"
                gutterBottom
                variant="h4"
                component="h2"
                color="secondary"
              >
                IP: {Name.IP}
              </Typography>

              <Typography variant="h6" color="textPrimary" component="h2">
                Protocols:
              </Typography>
              <Typography variant="h6" color="textSecondary" component="h2">
                {Name.protocol}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
export default MediaCard;
