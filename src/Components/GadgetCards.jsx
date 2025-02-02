import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const GadgetCards = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("../category.json")
      .then((response) => response.json())
      .then((data) => setCategoryData(data));
  }, []);
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
      setCategory([]);
    }
  };
   return (
    <div id="gadgets" className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-36">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold my-6 sm:mb-12 text-center">
        Explore Cutting-Edge Gadgets
      </h2>
  
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-2/6 lg:w-1/6 shadow-xl mb-4 md:mb-6 border rounded-xl md:rounded-3xl p-4 md:h-[465px]">
          <div className="flex flex-row md:flex-col flex-wrap justify-center gap-2">
            {categoryData.map((category, idx) => (
              <button
                onClick={() => handleCategory(category.category)}
                key={idx}
                className="btn btn-sm md:btn-md w-auto md:w-36 text-left rounded-full"
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>
  
        {/* Main Content */}
        <div className="w-full md:w-5/6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {category.length > 0 ? (
              category.map((item, idx) => <Card key={idx} item={item} />)
            ) : (
              <p className="text-center col-span-1 sm:col-span-2 lg:col-span-3 text-xl sm:text-2xl md:text-3xl font-bold text-red-500">
                No data found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetCards;
