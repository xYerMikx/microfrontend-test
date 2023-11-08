import React, { useState } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <p>Тыкнуто {count} раз</p>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};

export default MyButton;
