import "../styles/globals.css";
import NavFrame from "../components/nav/NavFrame";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavFrame>
        <Component {...pageProps} />
      </NavFrame>
    </div>
  );
}

export default MyApp;
