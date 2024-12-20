import { useContext } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
  const context = useContext(myContext);
  const { getAllOrders, deleteOrderFunc } = context;

  return (
    <div>
      <div>
        <div className="py-5">
          <h1 className=" text-xl  font-bold">All Orders</h1>
        </div>

        <div className="tableContainer w-full max-h-[400px] overflow-x-auto overflow-y-auto mb-5">
          <table className="w-full text-left border border-collapse sm:border-separate ">
            <tbody>
              <tr>
                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 font-bold fontPara"
                >
                  S.No.
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 font-bold fontPara"
                >
                  Order Id
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 font-bold fontPara"
                >
                  Image
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 font-bold fontPara"
                >
                  Title
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 font-bold fontPara"
                >
                  Category
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 font-bold fontPara"
                >
                  Price
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 font-bold fontPara"
                >
                  Quantity
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0"
                >
                  Total Price
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0"
                >
                  Status
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0"
                >
                  Name
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0"
                >
                  Address
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0"
                >
                  City
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0"
                >
                  Phone Number
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0"
                >
                  Date
                </th>

                <th
                  scope="col"
                  className="h-12 px-6 text-md border-l first:border-l-0 font-bold fontPara text-center"
                >
                  Action
                </th>
              </tr>

              {getAllOrders.map((order) => {
                return (
                  <>
                    {order.cartItems.map((item, index) => {
                      const {
                        id,
                        title,
                        price,
                        category,
                        quantity,
                        productImageUrl,
                      } = item;
                      return (
                        <>
                          <tr key={index} className="">
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0">
                              {"0"}
                              {index + 1}
                            </td>

                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0">
                              #{id}
                            </td>

                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0">
                              <img
                                className=""
                                src={productImageUrl}
                                alt="img"
                              />
                            </td>

                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0">
                              {title}
                            </td>

                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0">
                              {category}
                            </td>

                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0">
                              Rs. {price}
                            </td>

                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0">
                              {quantity}
                            </td>

                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0">
                              Rs. {price * quantity}
                            </td>

                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0">
                              {order.status}
                            </td>

                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0">
                              {order.addressInfo.fullName}
                            </td>

                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0">
                              {order.addressInfo.fullAddress}
                            </td>

                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0">
                              {order.addressInfo.cityName}
                            </td>

                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0">
                              {order.addressInfo.contactNumber}
                            </td>

                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0first-letter:uppercase ">
                              {order.addressInfo.date}
                            </td>

                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0first-letter:uppercase ">
                              <span
                                title="Delete"
                                onClick={() => deleteOrderFunc(order.id)}
                                className="text-red-400 hover:text-red-600 cursor-pointer"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 22 22"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="lucide lucide-trash-2"
                                >
                                  <path d="M3 6h18" />
                                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                  <line x1="10" x2="10" y1="11" y2="17" />
                                  <line x1="14" x2="14" y1="11" y2="17" />
                                </svg>
                              </span>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
