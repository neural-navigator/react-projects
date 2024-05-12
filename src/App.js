// import SubscribeManage from "./components/SubscribeManage";
// import Counter from "./components/Counter";
// import ColorPallete from "./components/ColorPallete";
// import PropImplement from "./components/PropImplement";
import { PureComponent } from "react";
import ChildToParentProp from "./components/ChildToParentProp";
import Fragments from "./components/Fragments";
import LifeCycleA from "./components/LifeCycleA";
import ParentComponent from "./components/ParentComponent";
import RefComponent from "./components/RefComponent";
import FocusInput from "./components/FocusInput";
import FRInput from "./components/FRInput";
import FRParentInput from "./components/FRParentInput";

function App() {
  // const childPropHandler = (val) => console.log(`${val} printed in parent!`)
  return (
    <>
      {/* <Counter /> */}
      {/* <SubscribeManage /> */}
      {/* <ColorPallete /> */}
      {/* <PropImplement btn_color="#ff1111" name="Hello"/> */}
      {/* <ChildToParentProp printChildProp={childPropHandler} /> */}
      {/* <Fragments /> */}
      {/* <LifeCycleA /> */}
      {/* <PureComponent /> */}
      {/* <ParentComponent /> */}
      {/* <RefComponent /> */}
      {/* <FocusInput /> */}
      <FRParentInput />
    </>
  );
}

export default App;
