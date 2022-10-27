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
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            component="div"
            sx={{
              width: "calc(100vw + 48px)",
              margin: "0 -24px",
            }}
          >
            <Carousel infinite={true} responsive={responsive}>
              <Image src={runnersSrc} />
              <Image src={finishSrc} />
              <Image src={trackSrc} />
            </Carousel>
          </Box>
          <Box component="div">
            SDTC is a registered 501(c)(3) whose mission is to support the
            development of distance running, track and field, and related sports
            in and around San Diego County. With experienced coaches, dedicated
            mentors, low cost races and over 800 members, SDTC helps runners of
            all levels meet their goals in a fun and supportive environment.
          </Box>
        </Box>
      </main>
    </div>
  );
}
