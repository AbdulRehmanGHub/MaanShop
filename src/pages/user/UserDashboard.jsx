import { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("users"));

  const context = useContext(myContext);
  const { loading, getAllOrders } = context;
  // console.log(getAllOrders);
  // console.log(user);
  return (
    <Layout>
      <div className="mx-auto px-4 py-5 lg:py-8">
        <div className="py-8 flex items-center justify-center">
          <div className="UserDashContainer max-w-7xl py-5 px-8 rounded-xl shadow-xl">
            <div className="pt-1 pb-7">
              <h1 className="text-center text-2xl font-bold">User Dashboard</h1>
            </div>

            <div className="md:flex md:flex-row md:gap-8 md:justify-center md:items-center flex flex-col justify-center items-center gap-4">
              <div className="flex justify-center w-36 h-36">
                <img
                  className="w-full h-full"
                  src="https://cdn-icons-png.flaticon.com/512/2206/2206332.png"
                  alt="img"
                />
              </div>
              <div className="text-center pt-2">
                <h1 className="text-lg">
                  <span className="font-bold">Name: </span> {user?.name}
                </h1>

                <h1 className="text-lg">
                  <span className="font-bold">Email: </span> {user?.email}
                </h1>

                <h1 className="text-lg">
                  <span className="font-bold">User Since: </span> {user?.date}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom shadow-sm">
          <div className="mx-auto my-4 max-w-7xl px-2 md:my-6 md:px-0">
            <h2 className=" text-2xl lg:text-3xl font-bold">Order Details</h2>
            <div className="flex justify-center relative top-10">
              {loading && <Loader />}
            </div>
            {getAllOrders
              .filter((obj) => obj.userId === user?.uid)
              .map((order, index) => {
                return (
                  <div key={index}>
                    {order.cartItems.map((item, index) => {
                      const {
                        id,
                        date,
                        quantity,
                        price,
                        title,
                        productImageUrl,
                        category,
                      } = item;
                      const { status } = order;
                      return (
                        <div
                          key={index}
                          className="mt-5 flex flex-col overflow-hidden rounded-xl shadow-md hover:shadow-lg border md:flex-row"
                        >
                          <div className="UserOrderDetailsContainer w-full border-r md:max-w-xs">
                            <div className="lg:p-8 p-3">
                              <div className="grid grid-cols-1 md:grid-cols-1">
                                
                                <div className="mb-4">
                                  <div className="text-sm font-semibold">
                                    Order Id
                                  </div>
                                  <div className="text-sm font-medium">
                                    #{id}
                                  </div>
                                </div>

                                <div className="mb-4">
                                  <div className="text-sm font-semibold">
                                    Date
                                  </div>
                                  <div className="text-sm font-medium">
                                    {date}
                                  </div>
                                </div>

                                <div className="mb-4">
                                  <div className="text-sm font-semibold">
                                    Total Amount
                                  </div>
                                  <div className="text-sm font-medium">
                                    Rs. {price * quantity}
                                  </div>
                                </div>

                                <div className="mb-4">
                                  <div className="text-sm font-semibold">
                                    Order Status
                                  </div>
                                  <div className="text-sm font-medium text-green-800 first-letter:uppercase">
                                    {status}
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="lg:p-8 p-3">
                              <ul className="-my-7 divide-y">
                                <li className="flex flex-col justify-between space-x-5 py-7 md:flex-row">
                                  <div className="flex flex-1 items-stretch">
                                    <div className="flex-shrink-0">
                                      <img
                                        className="productImg h-24 w-24 lg:h-40 lg:w-40 rounded-lg border object-contain"
                                        src={productImageUrl}
                                        alt="img"
                                      />
                                    </div>
                                    <div className="ml-5 flex flex-col justify-between">
                                      <div className="flex-1">
                                        <p className="text-sm font-bold">
                                          {title}
                                        </p>
                                        <p className="mt-1.5 text-sm font-medium">
                                          {category}
                                        </p>
                                      </div>
                                      <p className="mt-4 text-sm font-medium">
                                        x {quantity}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="ml-auto flex flex-col items-end justify-between">
                                    <p className="text-right text-sm font-bold">
                                      Rs. {price}
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
