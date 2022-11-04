import { getAlphabets } from "./../../services/alphabetService";
import { useState, useCallback, useEffect } from "react";
import AlertBox from "../common/alertBox";
import Evaluator from "./evaluator";
import Footer from "./footer";
import Bar from "./bar";

const Home = () => {
  const [alertText, setAlertText] = useState();
  const [isAlert, setIsAlert] = useState(false);
  const [evaluationData, setData] = useState([]);
  const [alphabetData, setAlphabetData] = useState([]);
  const operations = [
    { _id: 1, operation: "+", isClick: false, isDrag: true, isCompare: false },
    { _id: 2, operation: "-", isClick: false, isDrag: true, isCompare: false },
    { _id: 3, operation: "*", isClick: false, isDrag: true, isCompare: false },
    { _id: 4, operation: "/", isClick: false, isDrag: true, isCompare: false },
    { _id: 5, operation: "<", isClick: true, isDrag: false, isCompare: true },
    { _id: 6, operation: ">", isClick: true, isDrag: false, isCompare: true },
  ];

  const fetchAlphabets = useCallback(async () => {
    try {
      const { data } = await getAlphabets();
      setAlphabetData(data);
    } catch (ex) {
      // interceptor of axios git will auto detect it
    }
  }, []);

  useEffect(() => {
    fetchAlphabets();
  }, [fetchAlphabets]);

  const handleAdd = (content) => {
    const copyData = [...evaluationData];
    copyData.push(content);
    setData(copyData);
  };

  const handleRemove = (content) => {
    const newData = evaluationData.filter(
      (item) => item.doc._id !== content._id
    );
    setData(newData);
  };

  /** function to evaluate the equation: Here I have use constructor function
   * while returning the result using template litral.
   * Also I have used simple try catch in order to match the format of the equation.*/

  const handleEvaluation = () => {
    try {
      const op = evaluationData[1].doc.operation;
      const cmp = evaluationData[3].doc.operation;
      const evaluator = new Function(
        "a",
        "b",
        "rhs",
        `return a ${op} b ${cmp} rhs`
      );
      const result = evaluator(
        evaluationData[0].doc.number,
        evaluationData[2].doc.number,
        evaluationData[4].doc.number
      );
      setAlertText(`${result}`);
      setIsAlert(true);
    } catch (ex) {
      setAlertText("Error");
      setIsAlert(true);
    }
  };

  return (
    <div className="container">
      <div className="col">
        <Bar data={alphabetData} />
        <Bar
          data={operations}
          isBigBox={false}
          onAdd={handleAdd}
          isEventBox={true}
        />
        <Evaluator
          onAdd={handleAdd}
          data={evaluationData}
          onRemove={handleRemove}
        />
        <button
          className="btn btn-primary"
          style={{ width: "100%" }}
          onClick={() => handleEvaluation()}
        >
          Evaluate
        </button>
        {isAlert && <AlertBox isClose={setIsAlert} text={alertText} />}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
