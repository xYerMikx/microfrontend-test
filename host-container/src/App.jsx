import React, { lazy } from "react";
import Header from "./Header";

const Button = lazy(() => import("microfront/MyButton"));

const App = () => {
  return (
    <div>
      <p style={{ color: "red" }}>Это мое общее приложение</p>
      <Header />
      <Button />
      <span>Еще часть моего приложения</span>
    </div>
  );
};

export default App;
