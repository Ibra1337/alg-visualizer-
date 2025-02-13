import React, { useState } from "react";
import { motion } from "framer-motion";

const BubbleSortVisualizer = () => {
  const [array, setArray] = useState([50, 30, 70, 20, 90, 10, 60]);
  const [sorting, setSorting] = useState(false);

  const bubbleSort = async () => {
    setSorting(true);
    let arr = [...array];
    
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
      
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]); 
          await new Promise((resolve) => setTimeout(resolve, 300));
        }
      }
    }

    setSorting(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {array.map((value, index) => (
          <motion.div
            key={index}
            style={{
              width: "40px",
              height: `${value * 3}px`,
              backgroundColor: "blue",
              display: "inline-block",
              textAlign: "center",
              color: "white",
              fontSize: "14px",
            }}
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 0.3 }}
          >
            {value}
          </motion.div>
        ))}
      </div>
      <button
        onClick={bubbleSort}
        disabled={sorting}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: sorting ? "not-allowed" : "pointer",
        }}
      >
        {sorting ? "Sorting..." : "Start Bubble Sort"}
      </button>
    </div>
  );
};

export default BubbleSortVisualizer;
