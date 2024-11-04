import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
} from "recharts";
const data = [
  {
    name: "Laptop Pro 13",
    price: 999.99,
    rating: 4.5,
  },
  {
    name: "Laptop X Ultra",
    price: 1299.99,
    rating: 4.7,
  },
  {
    name: "MacBook Air M1",
    price: 999.99,
    rating: 4.8,
  },
  {
    name: "MacBook Pro 14",
    price: 1999.99,
    rating: 4.9,
  },
  {
    name: "iPhone 13",
    price: 799.99,
    rating: 4.6,
  },
  {
    name: "iPhone 12 Pro",
    price: 999.99,
    rating: 4.7,
  },
  {
    name: "Wireless Earbuds Z",
    price: 59.99,
    rating: 4.4,
  },
  {
    name: "Phone Case Pro",
    price: 65.99,
    rating: 4.2,
  },
  {
    name: "Samsung Galaxy S23 Ultra",
    price: 699.99,
    rating: 4.5,
  },
  {
    name: "Smartphone Lite",
    price: 399.99,
    rating: 4.0,
  },
  {
    name: "Laptop Lite",
    price: 749.99,
    rating: 4.3,
  },
  {
    name: "MacBook Pro 16",
    price: 2499.99,
    rating: 4.9,
  },
  {
    name: "Phone Charger Fast",
    price: 79.99,
    rating: 4.1,
  },
  {
    name: "iPhone 14 Pro Max",
    price: 1099.99,
    rating: 4.9,
  },
  {
    name: "Wireless Charger Q",
    price: 59.99,
    rating: 4.3,
  },
  {
    name: "Smartphone S Pro",
    price: 599.99,
    rating: 4.6,
  },
];

const Statistics = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl md:mx-56 my-5 font-bold">Statistics</h2>
      <ComposedChart
        className="container max-w-7xl mx-auto bg-slate-200"
        width={900}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="name"
          label={{ value: "Pages", position: "insideBottomRight", offset: 0 }}
          scale="band"
        />
        <YAxis label={{ value: "Index", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
        <Bar dataKey="price" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="rating" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default Statistics;
