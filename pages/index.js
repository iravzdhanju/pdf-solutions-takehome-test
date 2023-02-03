import Head from "next/head";
import Header from "../components/Header";
import QuotesComponent from "../components/QuotesComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quote Browser</title>{" "}
        <meta name="description" content="This is an Quote Browser App" />{" "}
        <link rel="icon" href="/favicon.ico" />{" "}
      </Head>

      <div className="homepageComponent">
        {/* Header Component */}
        <Header />

        {/* QuotesComponent */}
        <QuotesComponent />
      </div>
    </div>
  );
}
