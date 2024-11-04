import { useLoaderData } from "react-router-dom";
import categoryData from "../../public/category.json";
import Card from "./Card";
import { useState } from "react";

const GadgetCards = () => {
  const allData = useLoaderData();
  const [category, setCategory] = useState(allData);
  const handleCategory = (categoryName) => {
    console.log(categoryName);
    if (categoryName === "All Product") {
      setCategory(allData);
    } else if (category) {
      const filteredData = allData.filter(
        (item) => item.category === categoryName
      );
      setCategory(filteredData);
    } else {
      console.log("data not found");
      setCategory(["data not found"]);
    }
  };

  return (
    <div className="container mx-auto px-36">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="flex flex-col  md:flex-row gap-6">
        <div className=" w-1/6 shadow-xl  border h-[465px] rounded-3xl">
          {categoryData.map((category, idx) => (
            <button
              onClick={() => handleCategory(category.category)}
              key={idx}
              className="btn block w-36 text-left my-4 rounded-full mx-auto"
            >
              {category.category}
            </button>
          ))}
          {/* data not found */}
        </div>
        <div className="w-5/6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {category.map((item, idx) => (
              <Card key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetCards;
