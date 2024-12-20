const Track = () => {
  return (
    <section>
      <div className="container mx-auto px-5 py-10 md:py-14">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="trackCard border-2 hover:shadow-lg px-4 py-6 rounded-lg">
              <svg
                className="lucide lucide-shirt w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
              </svg>

              <h2 className="title-font font-medium text-lg">
                Premium Products
              </h2>

              <p className="leading-relaxed">
                Our products are made with the finest materials.
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="trackCard border-2 hover:shadow-lg px-4 py-6 rounded-lg">
              <svg
                className="lucide lucide-truck w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
              </svg>

              <h2 className="title-font font-medium text-lg">Free Delivery </h2>

              <p className="leading-relaxed">
                Get your orders delivered to your doorstep for free.
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="trackCard border-2 hover:shadow-lg px-4 py-6 rounded-lg">
              <svg
                className="lucide lucide-shopping-bag w-12 h-12 mb-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>

              <h2 className="title-font font-medium text-lg">Easy Return</h2>

              <p className="leading-relaxed">
                Hassle-free returns within 7 days of purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Track;
