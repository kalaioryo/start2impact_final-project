import React, {useState } from "react";
import { useSelector } from "react-redux";
import LoadingComponent from "../components/LoadingComponent";

const Home = () => {
  const [category, setCategory] = useState("casi_testati");
  const dataRegion = useSelector((state) => state.regionsLatest);
  const { loading, regionsLatest, error } = dataRegion;

  return (
    <div>
      <h1 className="w-full text-center">Home Page</h1>
      
    </div>
  );
};

export default Home;
