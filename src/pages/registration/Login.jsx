import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Login = () => {
  const context = useContext(myContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const userLoginFunc = async () => {
    if (userLogin.email == "" || userLogin.password == "") {
      return toast.error("Please enter email and password!");
    }

    setLoading(true);

    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );

      // console.log(users);

      try {
        const q = query(
          collection(fireDB, "user"),
          where("uid", "==", users?.user?.uid)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: "",
          });
          toast.success("Login Successfully");
          setLoading(false);
          if (user.role == "user") {
            navigate("/user-dashboard");
          } else {
            navigate("/admin-dashboard");
          }
        });
        return () => data;
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
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
        <div className="loginContainer px-3 lg:px-8 py-6 rounded-xl shadow-2xl">
          <div className="mb-5">
            <h2 className="text-center text-2xl font-bold ">
              Login Your Account
            </h2>
          </div>

          <div className="mb-3">
            <input
              value={userLogin.email}
              onChange={(e) => {
                setUserLogin({
                  ...userLogin,
                  email: e.target.value,
                });
              }}
              type="email"
              placeholder="Email Address"
              className="border px-2 py-2 w-72 md:w-96 rounded-md outline-none"
            />
          </div>

          <div className="mb-3">
            <input
              value={userLogin.password}
              onChange={(e) => {
                setUserLogin({
                  ...userLogin,
                  password: e.target.value,
                });
              }}
              type="password"
              placeholder="Password"
              className="border px-2 py-2 w-72 md:w-96 rounded-md outline-none"
            />
          </div>

          <div className="mb-3 mt-6">
            <div
              onClick={userLoginFunc}
              type="button"
              className="loginContainerBtn w-full text-center px-2 py-2 rounded-md outline-none font-bold cursor-pointer"
            >
              Login
            </div>
          </div>

          <div className="mt-8">
            <h2 className="">
              {"Don't"} have an account?{" "}
              <Link className="font-bold" to={"/signup"}>
                SignUp
              </Link>{" "}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
