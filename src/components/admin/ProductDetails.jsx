import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import toast from "react-hot-toast";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";

const ProductDetail = () => {
  const context = useContext(myContext);
  const { loading, setLoading, getAllProducts, getAllProductsFunc } = context;

  // console.log(getAllProducts);

  const navigate = useNavigate();

  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "products", id));
      toast.success("Product deleted successfully");
      getAllProductsFunc();
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Product deletion failed!");
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="py-7 flex justify-between items-center">
        <h1 className="text-xl font-bold">All Product</h1>

        <Link to={"/addproduct"}>
          <div className="AddProductBtn px-4 py-1 rounded-lg text-center cursor-pointer">
            Add Product
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center relative top-20">
        {loading && <Loader />}
      </div>

      {/* table */}

      <div className="tableContainer w-full max-h-[400px] overflow-y-auto overflow-x-auto mb-5">
        <table className="w-full text-left border border-collapse sm:border-separate">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 font-bold fontPara"
              >
                S.No
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
                Price
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
                Date
              </th>

              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 font-bold fontPara text-center"
              >
                Action
              </th>
            </tr>

            {getAllProducts.map((item, index) => {
              const { id, title, price, category, date, productImageUrl } =
                item;
              return (
                <tr key={index} className="">
                  <th className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 font-normal">
                    {"0"}
                    {index + 1}.
                  </th>

                  <th className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 capitalize">
                    <div className="w-20 h-20 flex justify-center items-center">
                      <img
                        className="w-full h-full bg-pink-100 object-contain"
                        src={productImageUrl}
                        alt="img"
                      />
                    </div>
                  </th>

                  <th className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 capitalize font-normal">
                    {title}
                  </th>

                  <th className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 capitalize font-normal">
                    Rs.{price}
                  </th>

                  <th className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 capitalize font-normal">
                    {category}
                  </th>

                  <th className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 capitalize font-normal">
                    {date}
                  </th>

                  <td className="flex justify-between items-center gap-4 flex-wrap h-24 px-6 text-md transition duration-300 border-t border-l first:border-l-0 font-normal">
                    <span
                      title="Edit"
                      onClick={() => navigate(`/updateproduct/${id}`)}
                      className="text-green-400 hover:text-green-600 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-pencil"
                      >
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                        <path d="m15 5 4 4" />
                      </svg>
                    </span>

                    <span
                      title="Delete"
                      onClick={() => deleteProduct(id)}
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
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetail;
