import Head from "next/head";
import Image from "next/image";
import runnersSrc from "../public/carousel/runners.jpg";
import finishSrc from "../public/carousel/finish.jpg";
import trackSrc from "../public/carousel/track.jpg";
import styles from "../styles/Home.module.css";
import Carousel from "react-multi-carousel";
import Box from "@mui/material/Box";
import "react-multi-carousel/lib/styles.css";
export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>San Diego Track Club</title>
        <meta name="description" content="Running club in sunny San Diego" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box sx={{ width: "100%", height: "400px" }}>
          <Carousel infinite={true} responsive={responsive}>
            <Image src={runnersSrc} />
            <Image src={finishSrc} />
            <Image src={trackSrc} />
          </Carousel>
        </Box>
      </main>
    </div>
  );
}
