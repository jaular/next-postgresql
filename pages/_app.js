import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
