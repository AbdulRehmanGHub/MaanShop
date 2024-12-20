import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  const cartItems = useSelector((state) => state.cart);

  // Theme
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.className =
      savedTheme === "light" ? "light-mode" : "dark-mode";
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme === "light" ? "light-mode" : "dark-mode";
    localStorage.setItem("theme", newTheme);
  };

  const navList = (
    <ul className="menuLinks flex space-x-6 font-medium text-md">
      <li>
        <Link to={"/"}>
          <span title="Home" className="Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-house"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
          </span>
        </Link>
      </li>
      <li>
        <Link to={"/allproducts"}>All Products</Link>
      </li>
      {!user && (
        <>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/signup"}>Sign Up</Link>
          </li>
        </>
      )}
      {user?.role === "user" && (
        <li>
          <Link to={"/user-dashboard"}>
            <span title={`User: ${user?.name}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-user-round"
              >
                <path d="M18 20a6 6 0 0 0-12 0" />
                <circle cx="12" cy="10" r="4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
          </Link>
        </li>
      )}
      {user?.role === "admin" && (
        <li>
          <Link to={"/admin-dashboard"}>
            <span title={user?.name}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-user-round"
              >
                <path d="M18 20a6 6 0 0 0-12 0" />
                <circle cx="12" cy="10" r="4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
          </Link>
        </li>
      )}
      {user && (
        <li title="Logout" className="cursor-pointer" onClick={logout}>
          Logout
        </li>
      )}
      <li className="relative" title="Cart">
        <Link to={"/cart"}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </span>
          <span className="absolute -top-4 -right-1">{cartItems.length}</span>
        </Link>
      </li>
    </ul>
  );

  const resNavList = (
    <ul className="menuLinks flex flex-col space-y-4 font-medium text-md px-5">
      <li>
        <Link to={"/"} onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link to={"/allproducts"} onClick={() => setIsMenuOpen(false)}>
          All Products
        </Link>
      </li>
      {!user && (
        <>
          <li>
            <Link to={"/login"} onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
          </li>
          <li>
            <Link to={"/signup"} onClick={() => setIsMenuOpen(false)}>
              Sign Up
            </Link>
          </li>
        </>
      )}
      {user?.role === "user" && (
        <li>
          <Link to={"/user-dashboard"} onClick={() => setIsMenuOpen(false)}>
            {user?.name}
          </Link>
        </li>
      )}
      {user?.role === "admin" && (
        <li>
          <Link to={"/admin-dashboard"} onClick={() => setIsMenuOpen(false)}>
            {user?.name}
          </Link>
        </li>
      )}
      {user && (
        <li
          className="cursor-pointer"
          onClick={() => {
            logout();
            setIsMenuOpen(false);
          }}
        >
          Logout
        </li>
      )}
      <li>
        <Link to={"/cart"} onClick={() => setIsMenuOpen(false)}>
          Cart({cartItems.length})
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="flex items-center max-w-screen justify-between border-b-[1px] sticky top-0 z-10">
      <div className="w-full px-4 py-3 md:px-6 md:py-4">
        <div className="flex justify-between items-center">
          <div>
            <Link to={"/"}>
              <h2 className="logo font-bold text-2xl">MaanShop</h2>
            </Link>
          </div>

          <div className="md:hidden">
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menuIcon focus:outline-none"
            >
              {isMenuOpen ? (
                <>
                  <div className="">
                    <span title="Close Menu" className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="">
                    <span title="Open Menu" className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-text"
                      >
                        <path d="M17 6.1H3" />
                        <path d="M21 12.1H3" />
                        <path d="M15.1 18H3" />
                      </svg>
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center justify-between w-full">
            <div className="flex-1 flex justify-center">{navList}</div>

            <div className="flex-shrink-0 flex items-center gap-2">
              <SearchBar />
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden px-4 py-2 z-10">
            <SearchBar />
          </div>
        )}

        {isMenuOpen && <div className="md:hidden">{resNavList}</div>}
      </div>

      {!isMenuOpen && (
        <div>
          <div
            className="themeIcon px-1 py-3 md:px-1 md:py-4"
            onClick={toggleTheme}
          >
            <span className="cursor-pointer text-2xl">
              {theme === "light" ? (
                <>
                  <span className="" title="Switch Theme">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-moon"
                    >
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                  </span>
                </>
              ) : (
                <>
                  <span className="" title="Switch Theme">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-sun"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                  </span>
                </>
              )}
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
