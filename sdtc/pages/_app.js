import "../styles/globals.css";
import NavFrame from "../components/nav/NavFrame";
function MyApp({ Component, pageProps }) {
  return (
    <NavFrame>
      <Component {...pageProps} />
    </NavFrame>
  );
}

export default MyApp;
