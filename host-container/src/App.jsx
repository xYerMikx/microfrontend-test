import React, { lazy } from "react";

const Button = lazy(() => import("microfront/MyButton"));

const App = () => {
  return (
    <div>
      Это мое общее приложение
      <Button />
    </div>
  );
};

export default App;
