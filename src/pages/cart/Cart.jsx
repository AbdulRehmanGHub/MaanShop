import { Trash } from "lucide-react";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import {
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
} from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import BuyNowModal from "../../components/buyNowModal/BuyNowModal";
import { Navigate } from "react-router-dom";

// const products = [
//   {
//     id: 1,
//     name: "Nike Air Force 1 07 LV8",
//     href: "#",
//     price: "Rs. 47,199",
//     originalPrice: "Rs. 48,900",
//     discount: "5% Off",
//     color: "Orange",
//     size: "8 UK",
//     imageSrc:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png",
//   },
//   {
//     id: 2,
//     name: "Nike Blazer Low 77 SE",
//     href: "#",
//     price: "Rs. 1,549",
//     originalPrice: "Rs. 2,499",
//     discount: "38% off",
//     color: "White",
//     leadTime: "3-4 weeks",
//     size: "8 UK",
//     imageSrc:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png",
//   },
//   {
//     id: 3,
//     name: "Nike Air Max 90",
//     href: "#",
//     price: "Rs. 2219 ",
//     originalPrice: "Rs. 999",
//     discount: "78% off",
//     color: "Black",
//     imageSrc:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png",
//   },
// ];

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Product removed from the cart!");
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  // const cartQuantity = cartItems.length;

  const cartItemTotal = cartItems
    .map((item) => item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const user = JSON.parse(localStorage.getItem("users"));

  const [addressInfo, setAddressInfo] = useState({
    fullName: "",
    fullAddress: "",
    cityName: "",
    contactNumber: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const buyNowFunc = () => {
    if (
      addressInfo.fullName === "" ||
      addressInfo.fullAddress === "" ||
      addressInfo.cityName === "" ||
      addressInfo.contactNumber === ""
    ) {
      return toast.error("All fields are required!");
    }

    const orderInfo = {
      cartItems,
      addressInfo,
      email: user.email,
      userId: user.uid,
      status: "confirmed",
      time: Timestamp.now(),
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    try {
      const orderRef = collection(fireDB, "order");
      addDoc(orderRef, orderInfo);

      setAddressInfo({
        fullName: "",
        fullAddress: "",
        cityName: "",
        contactNumber: "",
      });
      toast.success("Order placed successfully");
    } catch (error) {
      console.log(error);
      toast.error("Order not placed, try again!");
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-7xl lg:px-0">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Shopping Cart
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="cartItemsContainer rounded-lg px-4 lg:col-span-8"
            >
              <h2 id="cart-heading" className="sr-only"></h2>
              <ul role="list" className="divide-y divide">
                {cartItems.length >= 1 ? (
                  <>
                    {cartItems.map((item, index) => {
                      const {
                        id,
                        title,
                        price,
                        category,
                        quantity,
                        productImageUrl,
                      } = item;
                      return (
                        <div key={item?.id} className="">
                          <li className="flex py-6 sm:py-6 ">
                            <div className=" flex-shrink-0 rounded-md overflow-hidden">
                              <img
                                src={productImageUrl}
                                alt={title}
                                className="productImg sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                              />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                <div>
                                  <div className="flex justify-between">
                                    <div className="text-sm">
                                      <h3 className="font-semibold">{title}</h3>
                                    </div>
                                  </div>
                                  <div className="mt-1 flex text-sm">
                                    <p className="text-sm">{category}</p>
                                  </div>
                                  <div className="mt-1 flex items-end">
                                    <p className="text-md text-right font-medium">
                                      Rs. {price}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <div className="mb-2 flex">
                            <div className="min-w-24 flex">
                              <button
                                onClick={() => handleDecrement(id)}
                                type="button"
                                className="h-7 w-7"
                              >
                                -
                              </button>
                              <input
                                type="text"
                                className="mx-1 h-7 w-9 rounded-md border text-center"
                                value={quantity}
                              />
                              <button
                                onClick={() => handleIncrement(id)}
                                type="button"
                                className="flex h-7 w-7 items-center justify-center"
                              >
                                +
                              </button>
                            </div>
                            <div className="ml-6 flex text-sm">
                              <button
                                onClick={() => deleteCart(item)}
                                type="button"
                                className="flex items-center space-x-1 px-2 py-1 pl-0"
                              >
                                <Trash size={12} className="text-red-700" />
                                <span className="text-xs font-medium text-red-700">
                                  Remove
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <div>
                    <h2 className="text-xl">Cart is empty!</h2>
                  </div>
                )}
              </ul>
            </section>

            <section
              aria-labelledby="summary-heading"
              className="cartPriceContainer mt-16 rounded-md lg:col-span-4 lg:mt-0 lg:p-0"
            >
              <h2
                id="summary-heading"
                className=" border-b px-4 py-3 text-lg font-medium sm:p-4"
              >
                Price Details
              </h2>
              <div>
                <dl className=" space-y-1 px-2 py-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">
                      Price ({cartItemTotal}{" "}
                      {cartItemTotal > 1 ? "items" : "item"})
                    </dt>
                    <dd className="text-sm font-medium">Rs. {cartTotal}</dd>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <dt className="flex items-center text-sm">
                      <span>Discount</span>
                    </dt>
                    <dd className="text-sm font-medium">- Rs. 0</dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="flex text-sm">
                      <span>Delivery Charges</span>
                    </dt>
                    <dd className="text-sm font-medium">Free</dd>
                  </div>
                  <div className="flex items-center justify-between border-y border-dashed py-4 ">
                    <dt className="text-base font-medium">Total Amount</dt>
                    <dd className="text-base font-medium">Rs. {cartTotal}</dd>
                  </div>
                </dl>
                <div className="px-2 pb-4 font-medium">
                  <div className="flex gap-4 mb-6">
                    {user ? (
                      <BuyNowModal
                        addressInfo={addressInfo}
                        setAddressInfo={setAddressInfo}
                        buyNowFunc={buyNowFunc}
                      />
                    ) : (
                      <Navigate to={"/login"} />
                    )}
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
