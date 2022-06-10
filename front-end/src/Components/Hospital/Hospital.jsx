import React from "react";
import "./hospital.css";

import { ImageList, ImageListItemBar, ImageListItem, Typography } from "@mui/material";

export default function Hospital() {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
      title: "São Paulo",
    },
    {
      img: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      title: "Distrito Federal",
    },
    {
      img: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      title: "Santa Catarina",
    },
    {
      img: "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Rio Grande do Sul",
    },
    {
      img: "https://images.unsplash.com/photo-1607799013470-8a46c0db7eb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      title: "Paraná",
    },
    {
      img: "https://images.unsplash.com/photo-1495202337139-e865ed70fcd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
      title: "Minas Gerais"
    }
  ];

  return (
    <section id="Partners" className="img-container">
      <Typography variant="h5" className="home-title">
          Parceiros
        </Typography>
      <ImageList sx={{ width: 350, height: 450 }} className="img-card-partnrs">
        {itemData.map((item) => (
          <ImageListItem key={item.img} className="img-card">
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
    </section>
  );
}
