import { useEffect, useState } from "react";
import myContext from "./myContext";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const MyState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [getAllProducts, setGetAllProducts] = useState([]);

  const getAllProductsFunc = async () => {
    setLoading(true);

    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));

      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllProducts(productArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [getAllOrders, setGetAllOrders] = useState([]);

  const getAllOrdersFunc = async () => {
    setLoading(true);

    try {
      const q = query(collection(fireDB, "order"), orderBy("time"));

      const data = onSnapshot(q, (QuerySnapshot) => {
        let orderArray = [];
        QuerySnapshot.forEach((doc) => {
          orderArray.push({ ...doc.data(), id: doc.id });
        });

        setGetAllOrders(orderArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteOrderFunc = async (id) => {
    setLoading(true);

    try {
      await deleteDoc(doc(fireDB, "order", id));
      toast.success("Order deleted successfully");
      getAllOrdersFunc();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [getAllUsers, setGetAllUsers] = useState([]);

  const getAllUsersFunc = async () => {
    setLoading(true);

    try {
      const q = query(collection(fireDB, "user"), orderBy("time"));

      const data = onSnapshot(q, (QuerySnapshot) => {
        let userArray = [];
        QuerySnapshot.forEach((doc) => {
          userArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllUsers(userArray);
        setLoading(false);
      });

      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProductsFunc();
    getAllOrdersFunc();
    getAllUsersFunc();
  }, []);

  return (
    <myContext.Provider
      value={{
        loading,
        setLoading,
        getAllProducts,
        getAllProductsFunc,
        getAllOrders,
        deleteOrderFunc,
        getAllUsers,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default MyState;
