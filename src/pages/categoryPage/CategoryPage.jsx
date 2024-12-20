import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const CategoryPage = () => {
  const { categoryname } = useParams();

  const context = useContext(myContext);
  const { loading, getAllProducts } = context;

  const navigate = useNavigate();

  const filterProduct = getAllProducts.filter((product) =>
    product.category.includes(categoryname)
  );

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
    <div>
      <Layout>
        <div className="mt-10">
          <div>
            <h1 className="text-center mb-5 text-2xl font-semibold first-letter:capitalize">
              {categoryname}
            </h1>
          </div>

          {loading ? (
            <div className="flex items-center justify-center">
              <Loader />
            </div>
          ) : (
            <section className="body-font">
              <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap justify-center -m-4">
                  {filterProduct.length > 0 ? (
                    <>
                      {filterProduct.map((item, index) => {
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
                                  {title.substring(0, 25)}
                                </h1>
                                <h1 className="title-font text-lg font-medium mb-3">
                                  Rs.{price}
                                </h1>

                                <div className="flex justify-center">
                                  {cartItems.some((p) => p.id === item.id) ? (
                                    <div
                                      onClick={() => deleteCart(item)}
                                      className="productCardBtn w-full py-[4px] rounded-lg font-bold text-center cursor-pointer"
                                    >
                                      Delete From Cart
                                    </div>
                                  ) : (
                                    <div
                                      onClick={() => addCart(item)}
                                      className="productCardBtn w-full py-[4px] rounded-lg font-bold text-center cursor-pointer"
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
                    </>
                  ) : (
                    <>
                      <div>
                        <div className="flex justify-center">
                          <img
                            className=" mb-2"
                            src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png"
                            alt=""
                          />
                        </div>
                        <h1 className=" text-black text-xl">
                          No {categoryname} product found
                        </h1>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </section>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default CategoryPage;
