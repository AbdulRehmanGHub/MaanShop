import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const NoPage = () => {
  return (
    <>
      <Navbar />
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl">
              {"Something's"} missing.
            </p>
            <p className="mb-4 text-lg font-light text-pretty">
              Sorry, we cannot find that page. You will find lots to explore on
              the home page.{" "}
            </p>
            <a
              href="/"
              className="inline-flex focus:ring-4 focus:outline-none font-semibold rounded-lg text-2xl px-5 py-2.5 text-center my-4 returnBtn"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoPage;
