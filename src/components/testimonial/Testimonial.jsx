const Testimonial = () => {
  return (
    <div>
      <section className="body-font mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1 className="text-center text-3xl font-bold">Testimonial</h1>
          <h2 className="text-center text-2xl font-semibold mb-10">
            What our <span className="">customers </span>are saying
          </h2>

          <div className="flex flex-wrap -m-4">
            <div className="testimonialCard rounded-md shadow-sm hover:shadow-lg lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 "
                  src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"
                  alt="img"
                />
                <p className="leading-relaxed text-pretty">
                  {
                    '"MaanShop store exceeded my expectations! The product quality is excellent, and the process was seamless."'
                  }
                </p>
                <span className="testimonialLine inline-block h-1 w-10 rounded mt-6 mb-4" />
                <h2 className="font-medium title-font tracking-wider text-sm uppercase">
                  MaanShop User 1
                </h2>
              </div>
            </div>

            <div className="testimonialCard rounded-md shadow-sm hover:shadow-lg lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 "
                  src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image-File.png"
                  alt="img"
                />
                <p className="leading-relaxed text-pretty">
                  {
                    '"I’m thrilled with the free delivery service! It was quick and hassle-free. 100% Recommended MaanShop from my side."'
                  }
                </p>
                <span className="testimonialLine inline-block h-1 w-10 rounded mt-6 mb-4" />
                <h2 className="font-medium title-font tracking-wider text-sm uppercase">
                  MaanShop User 2
                </h2>
              </div>
            </div>

            <div className="testimonialCard rounded-md shadow-sm hover:shadow-lg lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 "
                  src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png"
                  alt="img"
                />
                <p className="leading-relaxed text-pretty">
                  {
                    '"At MaanShop store, Returning a product was so simple. The customer support team is incredibly helpful. I will shop again here in future."'
                  }
                </p>
                <span className="testimonialLine inline-block h-1 w-10 rounded mt-6 mb-4" />
                <h2 className="font-medium title-font tracking-wider text-sm uppercase">
                  MaanShop User 3
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
