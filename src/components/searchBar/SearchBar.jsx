import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router-dom";

// const searchData = [
//   {
//     name: "Fashion",
//     image:
//       "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?cs=srgb&dl=pexels-jmendezrf-1536619.jpg&fm=jpg",
//   },
//   {
//     name: "Mobile",
//     image:
//       "https://w0.peakpx.com/wallpaper/110/397/HD-wallpaper-xiaomi-android-mobile-phone-2019.jpg",
//   },
//   {
//     name: "Computer",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSThlYw-iMWmpbQC3xYI9N8-ULYIZwNCN6VKg&s",
//   },
//   {
//     name: "Shirt",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoQpEVMQCKL1HjWhxpouVJh1uYFn_9R1rJw&s",
//   },
//   {
//     name: "Jacket",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xTkCiUynmV7RPfszOqDseibBgpQIca4b2g&s",
//   },
//   {
//     name: "Home",
//     image:
//       "https://cleanpost.co.nz/cdn/shop/files/EssentialsLarge-Photoroom_1.jpg?v=1713408881&width=416",
//   },
//   {
//     name: "Grocery",
//     image:
//       "https://cdn.openart.ai/published/2WeE62BjF3lkrFSRvGOB/FzEJEM87_bav0_raw.jpg",
//   },
//   {
//     name: "Electronics",
//     image:
//       "https://img.freepik.com/premium-photo/home-appliances-gas-cooker-tv-cinema-refrigerator-air-conditioner-microwave-laptop-washing-machine_252025-693.jpg?semt=ais_hybrid",
//   },
//   {
//     name: "Beauty",
//     image:
//       "https://img.drz.lazcdn.com/static/pk/p/358542e8cbd12df50ff95ba839aed980.jpg_720x720q80.jpg",
//   },
//   {
//     name: "Books",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuYY8VwdKC1UYJmfAE0_4WQychvJgNsJVjQ&s",
//   },
// ];

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const context = useContext(myContext);
  const { getAllProducts } = context;

  const filterSearchData = getAllProducts
    .filter((prod) => prod.title.toLowerCase().includes(search))
    .slice(0, 6);

  const navigate = useNavigate();

  return (
    <>
      <div className="">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg px-2 py-2 w-[300px] md:w-[200px] lg:w-96 outline-none"
          />
        </div>

        <div className="flex justify-center">
          {search && (
            <div className="block searchContainer absolute bg-opacity-95 w-[300px] md:w-[200px] lg:w-96 z-50 my-1 rounded-md px-2 pt-1 pb-2">
              {filterSearchData.length > 0 ? (
                <>
                  {filterSearchData.map((item, index) => {
                    return (
                      <div key={index} className="">
                        <div
                          onClick={() => navigate(`/productinfo/${item.id}`)}
                          className="flex searchContainerItems items-center gap-2 py-3 cursor-pointer transition-all border-b "
                        >
                          <img
                            className="w-10"
                            src={item.productImageUrl}
                            alt="img"
                          />
                          <div className="">{item.title.slice(0, 40)}</div>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="flex justify-center">
                  <p>No results found</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
