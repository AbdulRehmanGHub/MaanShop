import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Signup = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const navigate = useNavigate();

  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const userSignUpFunc = async () => {
    if (
      userSignup.name == "" ||
      userSignup.email == "" ||
      userSignup.password == ""
    ) {
      return toast.error("All fields are required!");
    }

    setLoading(true);

    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );

      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      const userReference = collection(fireDB, "user");

      addDoc(userReference, user);

      setUserSignup({
        name: "",
        email: "",
        password: "",
      });

      toast.success("signup successfully");

      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        {loading && <Loader />}
        <div className="signupContainer px-3 lg:px-8 py-6 rounded-xl shadow-2xl">
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold">
              Create Your Account
            </h2>
          </div>

          <div className="mb-3">
            <input
              value={userSignup.name}
              onChange={(e) => {
                setUserSignup({ ...userSignup, name: e.target.value });
              }}
              type="text"
              placeholder="Full Name"
              className="border px-2 py-2 w-72 md:w-96 rounded-md outline-none"
            />
          </div>

          <div className="mb-3">
            <input
              value={userSignup.email}
              onChange={(e) => {
                setUserSignup({ ...userSignup, email: e.target.value });
              }}
              type="email"
              placeholder="Email Address"
              className="border px-2 py-2 w-72 md:w-96 rounded-md outline-none"
            />
          </div>

          <div className="mb-3">
            <input
              value={userSignup.password}
              onChange={(e) => {
                setUserSignup({ ...userSignup, password: e.target.value });
              }}
              type="password"
              placeholder="Password"
              className="border px-2 py-2 w-72 md:w-96 rounded-md outline-none"
            />
          </div>

          <div className="mb-3 mt-6">
            <div
              onClick={userSignUpFunc}
              type="button"
              className="signupContainerBtn w-full text-center px-2 py-2 rounded-md outline-none font-bold cursor-pointer"
            >
              SignUp
            </div>
          </div>

          <div className="mt-8">
            <h2 className="">
              Have an account?{" "}
              <Link className="font-bold" to={"/login"}>
                Login
              </Link>{" "}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
