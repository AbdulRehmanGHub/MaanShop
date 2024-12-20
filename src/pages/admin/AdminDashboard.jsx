import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Layout from "../../components/layout/Layout";
import ProductDetail from "../../components/admin/ProductDetails";
import OrderDetail from "../../components/admin/OrderDetails";
import UserDetails from "../../components/admin/UserDetails";
import { useContext } from "react";
import myContext from "../../context/myContext";

// const products = [
//   {
//     id: 1,
//     name: "Simple flat i heart you valentine's day t-shirt",
//     imageSrc:
//       "https://img.freepik.com/free-vector/simple-flat-i-heart-you-valentine-s-day-t-shirt_742173-14411.jpg?t=st=1733981998~exp=1733985598~hmac=3750c7d436c7593ca927f5ebc71dcb70e542ea6a4bcd5bfbce41fe483a9f236e&w=740",
//     price: 75999,
//     href: "#",
//     color: "Blue",
//     quantity: 1,
//     imgAlt: "Simple flat i heart you valentine's day t-shirt",
//   },
// ];

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("users"));

  const context = useContext(myContext);
  const { getAllProducts, getAllOrders, getAllUsers } = context;

  return (
    <Layout>
      <div className="mx-auto px-4 py-5 lg:py-8">
        <div className="py-8">
          <div className="AdminDashContainer py-5 rounded-xl border">
            <div className="pt-1 pb-7">
              <h1 className="text-center text-2xl font-bold">
                Admin Dashboard
              </h1>
            </div>

            <div className="md:flex md:flex-row md:gap-8 md:justify-center md:items-center flex flex-col justify-center items-center gap-4">
              <div className="flex justify-center w-36 h-36">
                <img
                  className="w-full h-full"
                  src="https://cdn-icons-png.flaticon.com/512/2206/2206368.png"
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
                  <span className="font-bold">Admin Since: </span> {user?.date}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <Tabs>
            <TabList className="flex flex-wrap -m-4 text-center justify-center">
              {/* Total Products */}
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div className="AdminDashProductsContainer border px-4 py-3 rounded-xl">
                  <div className=" w-12 h-12 mb-3 inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={50}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-shopping-basket"
                    >
                      <path d="m5 11 4-7" />
                      <path d="m19 11-4-7" />
                      <path d="M2 11h20" />
                      <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                      <path d="m9 11 1 9" />
                      <path d="M4.5 15.5h15" />
                      <path d="m15 11-1 9" />
                    </svg>
                  </div>
                  <h2 className="title-font font-medium text-3xl fonts1">
                    {getAllProducts.length}
                  </h2>
                  <p className="font-bold">Total Products</p>
                </div>
              </Tab>

              {/* Total Order  */}
              <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                <div className="AdminDashOrdersContainer border px-4 py-3 rounded-xl">
                  <div className=" w-12 h-12 mb-3 inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={50}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-list-ordered"
                    >
                      <line x1={10} x2={21} y1={6} y2={6} />
                      <line x1={10} x2={21} y1={12} y2={12} />
                      <line x1={10} x2={21} y1={18} y2={18} />
                      <path d="M4 6h1v4" />
                      <path d="M4 10h2" />
                      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                    </svg>
                  </div>
                  <h2 className="title-font font-medium text-3xl fonts1">
                    {getAllOrders.length}
                  </h2>
                  <p className="font-bold">Total Order</p>
                </div>
              </Tab>

              {/* Total User  */}
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div className="AdminDashUsersContainer border px-4 py-3 rounded-xl">
                  <div className=" w-12 h-12 mb-3 inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={50}
                      height={50}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-users"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h2 className="title-font font-medium text-3xl fonts1">
                    {getAllUsers.length}
                  </h2>
                  <p className="font-bold">Total User</p>
                </div>
              </Tab>
            </TabList>

            <TabPanel>
              <ProductDetail />
            </TabPanel>

            <TabPanel>
              <OrderDetail />
            </TabPanel>

            <TabPanel>
              <UserDetails />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
