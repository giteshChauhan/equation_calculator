import { useState } from "react";
import Evaluator from "./evaluator";
import Bar from "./bar";

const Home = () => {
  const [data, setData] = useState([]);
  const data1 = ["A", "B", "C", "D", "E"];
  const data2 = ["*", "+"];

  const handleEvaluation = (content) => {
    const copyData = [...data];
    copyData.push(content);
    setData(copyData);
  };

  return (
    <div className="container">
      <div className="col">
        <Bar data={data1} />
        <Bar data={data2} />
        <Evaluator onAdd={handleEvaluation} data={data} />
      </div>
    </div>
  );
};

export default Home;
