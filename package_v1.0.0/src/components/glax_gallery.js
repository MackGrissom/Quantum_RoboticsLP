import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GlaxGallery = () => {

  const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

  const unsplashLink = (id, width, height) =>
    `https://source.unsplash.com/${id}/${width}x${height}`;

  const unsplashPhotos = [
    {
      id: "v8SjXTTI0GA",
      width: 1920,
      height: 1280
    },
    {
      id: "JdWU1Y7FS8g",
      width: 1920,
      height: 1920
    },
    {
      id: "cw_9z3ORslk",
      width: 1920,
      height: 1276
    },
    {
      id: "CpSb6_OawtA",
      width: 1920,
      height: 1279
    },
    {
      id: "7kSnMLGoR9w",
      width: 1920,
      height: 1267
    },
    {
      id: "wIYDNL0M_p4",
      width: 1920,
      height: 1280
    },
    {
      id: "u3Z7clTfuOo",
      width: 1920,
      height: 3413
    },
    {
      id: "E1h3mkrJTT4",
      width: 1920,
      height: 1080
    }
  ];

  const photos = unsplashPhotos.map((photo, index) => {
    const width = photo.width * 4;
    const height = photo.height * 4;
    return {
      src: unsplashLink(photo.id, width, height),
      key: `${index}`,
      width,
      height,
      images: breakpoints.map((breakpoint) => {
        const breakpointHeight = Math.round((height / width) * breakpoint);
        return {
          src: unsplashLink(photo.id, breakpoint, breakpointHeight),
          width: breakpoint,
          height: breakpointHeight
        };
      })
    };
  });

  const slides = photos.map(({ src, key, width, height, images }) => ({
    src,
    key,
    width,
    height,
    srcSet: images?.map((image) => ({
      src: image.src,
      width: image.width,
      height: image.height
    }))
  }));

  const [index, setIndex] = useState(-1);

  return (
    <>
          {/* <PhotoAlbum
            layout="rows"
            photos={photos}
            onClick={(event, photo, index) => setIndex(index)}
          />
           */}
        <PhotoAlbum
          photos={photos}
          layout="rows"
          targetRowHeight={350}
          onClick={(event, photo, index) => setIndex(index)}
          componentsProps={{ imageProps: { loading: "lazy" } }}
        />

      <Lightbox slides={slides} open={index >= 0} close={() => setIndex(-1)} index={index} />
    </>
  );
};

export default GlaxGallery;

// Access and Secret key of unplash
// X4DbHJ8-M3bekL6kuMtBxmI9eEzbWlJjuxlZxhq7TTI Access Key
// oS7TPXxPzXhup1TbNP6Vf1tIF1ckqSzlacSa3Vdbsuw Secret Key