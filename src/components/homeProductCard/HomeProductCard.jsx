import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

// // all products data
// const productData = [
//   {
//     id: 1,
//     title: "Simple flat i heart you valentine's day t-shirt",
//     image:
//       "https://img.freepik.com/free-vector/simple-flat-i-heart-you-valentine-s-day-t-shirt_742173-14411.jpg?t=st=1733981998~exp=1733985598~hmac=3750c7d436c7593ca927f5ebc71dcb70e542ea6a4bcd5bfbce41fe483a9f236e&w=740",
//     desc: "Simple flat i heart you valentine's day t-shirt, Simple flat i heart you valentine's day t-shirt",
//     price: 150,
//     trendingProductName: "Featured",
//     quantity: 1,
//   },
//   {
//     id: 2,
//     title: "Monocolor midnight madness marathon t-shirt design",
//     image:
//       "https://img.freepik.com/free-vector/monocolor-midnight-madness-marathon-t-shirt-design_742173-5733.jpg?t=st=1733982550~exp=1733986150~hmac=5a18bb0dfbac5c7afb37382d9c9b6d441cda9f6676968ad6d7efa9641fedc9c3&w=360",
//     desc: "Monocolor midnight madness marathon t-shirt design, Monocolor midnight madness marathon t-shirt design",
//     price: 120,
//     trendingProductName: "Featured",
//     quantity: 1,
//   },
//   {
//     id: 3,
//     title: "Flat Lay of Realistic T-Shirt mockup",
//     image:
//       "https://img.freepik.com/premium-psd/flat-lay-realistic-t-shirt-mockup_185216-241.jpg?w=740",
//     desc: "Flat Lay of Realistic T-Shirt mockup, Flat Lay of Realistic T-Shirt mockup",
//     price: 100,
//     trendingProductName: "Featured",
//     quantity: 1,
//   },
//   {
//     id: 4,
//     title: "Mens cvc crew mockup 05",
//     image:
//       "https://img.freepik.com/premium-psd/mens-cvc-crew-mockup-05_126278-112.jpg?w=740",
//     desc: "Mens cvc crew mockup 05, Mens cvc crew mockup 05",
//     price: 150,
//     trendingProductName: "Featured",
//     quantity: 1,
//   },
//   {
//     id: 5,
//     title: "Mens short sleeve t-shirt mockups 04",
//     image:
//       "https://img.freepik.com/premium-psd/mens-short-sleeve-t-shirt-mockups-04_126278-125.jpg?w=740",
//     desc: "Mens short sleeve t-shirt mockups 04, Mens short sleeve t-shirt mockups 04",
//     price: 120,
//     trendingProductName: "Featured",
//     quantity: 1,
//   },
//   {
//     id: 6,
//     title: "Toddler bodysuit crewneck mockup",
//     image:
//       "https://img.freepik.com/premium-psd/toddler-bodysuit-crewneck-mockup_126278-57.jpg?w=740",
//     desc: "Toddler bodysuit crewneck mockup, Toddler bodysuit crewneck mockup",
//     price: 150,
//     trendingProductName: "Featured",
//     quantity: 1,
//   },
//   {
//     id: 7,
//     title: "Mens Hooded Pullover Sweatshirt Mockup",
//     image:
//       "https://img.freepik.com/premium-psd/mens-hooded-pullover-sweatshirt-mockup_126278-287.jpg?w=740",
//     desc: "Mens Hooded Pullover Sweatshirt Mockup, Mens Hooded Pullover Sweatshirt Mockup",
//     price: 110,
//     trendingProductName: "Featured",
//     quantity: 1,
//   },
//   {
//     id: 8,
//     title: "Simple hand-drawn live your best life t-shirt",
//     image:
//       "https://img.freepik.com/free-vector/simple-hand-drawn-live-your-best-life-t-shirt_742173-5168.jpg?t=st=1733982372~exp=1733985972~hmac=4cb6a6d46ffe3ad78ea7fdfa8e42fc80ce4d0812185f9d583f62ef0b01d626cf&w=360",
//     desc: "Simple hand-drawn live your best life t-shirt, Simple hand-drawn live your best life t-shirt",
//     price: 190,
//     trendingProductName: "Featured",
//     quantity: 1,
//   },
// ];

const HomeProductCard = () => {
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { loading, getAllProducts } = context;

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to the cart successfully");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Removed from the cart successfully");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="mt-10">
      <div className="">
        <h1 className="text-center mb-5 text-2xl font-semibold">
          Best Selling Products
        </h1>
      </div>

      <section className="body-font">
        <div className="flex items-center justify-center mt-4">
          {loading && <Loader />}
        </div>
        <div className="px-2 py-5 mx-auto">
          <div className="flex flex-wrap">
            {getAllProducts.slice(0, 12).map((item, index) => {
              const { id, title, price, productImageUrl } = item;
              return (
                <div
                  key={index}
                  className="p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
                >
                  <div className="productCard h-full border rounded-xl overflow-hidden shadow-md cursor-pointer">
                    <div className="lg:h-96 md:h-80 h-88">
                      <img
                        onClick={() => navigate(`/productinfo/${id}`)}
                        className="productImg h-full w-full"
                        src={productImageUrl}
                        alt="img"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium mb-1">
                        MaanShop
                      </h2>
                      <h1 className="title-font text-lg font-medium mb-3">
                        {title.substring(0, 40)}
                      </h1>
                      <h1 className="title-font text-lg font-medium mb-3">
                        Rs.{price}
                      </h1>

                      <div className="flex justify-center">
                        {cartItems.some((p) => p.id === item.id) ? (
                          <div
                            onClick={() => deleteCart(item)}
                            className="productCardBtn w-full py-[4px] rounded-lg font-bold text-center"
                          >
                            Delete From Cart
                          </div>
                        ) : (
                          <div
                            onClick={() => addCart(item)}
                            className="productCardBtn w-full py-[4px] rounded-lg font-bold text-center"
                          >
                            Add To Cart
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeProductCard;
