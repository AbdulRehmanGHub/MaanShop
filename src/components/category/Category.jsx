import { useNavigate } from "react-router-dom";

const category = [
  {
    name: "fashion",
    image:
      "https://png.pngtree.com/png-vector/20240824/ourmid/pngtree-happy-girl-running-with-shopping-bags-clipart-illustration-cartoon-character-png-image_13611562.png",
  },
  {
    name: "mobile",
    image:
      "https://png.pngtree.com/png-vector/20240506/ourmid/pngtree-future-cellphone-png-image_12358621.png",
  },
  {
    name: "computer",
    image:
      "https://png.pngtree.com/png-vector/20230914/ourmid/pngtree-laptop-color-illustration-png-image_10018481.png",
  },
  {
    name: "shirt",
    image:
      "https://images.vexels.com/content/129476/preview/blue-men-tshirt-back-85fc12.png",
  },
  {
    name: "jacket",
    image:
      "https://images.vexels.com/media/users/3/262750/isolated/preview/9e58f4a046b0d2e493cad50b8630fb00-jacket-color-stroke-80s.png",
  },
  {
    name: "home",
    image: "https://cdn-icons-png.flaticon.com/512/6656/6656330.png",
  },
  {
    name: "grocery",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Shopping_cart_with_food_clip_art_2.svg/307px-Shopping_cart_with_food_clip_art_2.svg.png",
  },
  {
    name: "tech",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/027/144/878/small_2x/futuristic-bluetooth-portable-speaker-isolated-on-transparent-background-png.png",
  },
];
const Category = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col mt-5">
        <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
          <div className="flex">
            {category.map((item, index) => {
              return (
                <div key={index} className="px-3 lg:px-10">
                  <div
                    onClick={() => navigate(`/category/${item.name}`)}
                    className="category shadow-sm hover:shadow-md shadow-black w-16 h-16 md:h-20 md:w-20 lg:w-24 lg:h-24 max-w-xs rounded-full transition-all cursor-pointer mb-1"
                  >
                    <div className="flex justify-center mb-12">
                      <img className="w-[200px]" src={item.image} alt="image" />
                    </div>
                  </div>

                  <h1 className="text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
      .hide-scroll-bar {
      -ms-overflow-style: none;
      scrollbar-width: none;  
      }
      .hide-scroll-bar::-webkit-scrollbar {
        display: none;
      }`,
        }}
      />
    </div>
  );
};

export default Category;
