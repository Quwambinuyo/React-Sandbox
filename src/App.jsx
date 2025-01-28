import React from "react";
import UseRefExample1 from "./component/UseRefExample1";
import UseRefExample2 from "./component/useRefExample2";
import UseRefExample3 from "./component/useRefExample3";
import UseMemoExample from "./component/UseMemoExample";
import UseCallbackExample from "./component/UseCallbackExample";

const App = () => {
  return (
    <div className="mt-5 ml-5">
      <UseRefExample1 />
      <UseRefExample2 />
      <UseRefExample3 />
      <UseMemoExample />
      <UseCallbackExample />
    </div>
  );
};

export default App;
