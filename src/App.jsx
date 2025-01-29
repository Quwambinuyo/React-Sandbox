import React from "react";
import UseRefExample1 from "./component/UseRefExample1";
import UseRefExample2 from "./component/useRefExample2";
import UseRefExample3 from "./component/useRefExample3";
import UseMemoExample from "./component/UseMemoExample";
import UseCallbackExample from "./component/UseCallbackExample";
import CustomHookExample1 from "./component/CustomHookExample1";
CustomHookExample1;
import CustomHookExample2 from "./component/CustomHookExample2";

const App = () => {
  return (
    <div className="mt-5 ml-5">
      <UseRefExample1 />
      <UseRefExample2 />
      <UseRefExample3 />
      <UseMemoExample />
      <UseCallbackExample />
      <CustomHookExample1 />
      <CustomHookExample2 />
    </div>
  );
};

export default App;
