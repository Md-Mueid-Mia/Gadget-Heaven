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
    <div id="gadgets" className="container mx-auto px-36">
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
            {/* {category.map((item, idx) => (
              <Card key={idx} item={item} />
            ))} */}
            {category.length > 0 ? (
              category.map((item, idx) => <Card key={idx} item={item} />)
            ) : (
              <p className="text-center col-span-3 text-3xl font-bold text-red-500">
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
