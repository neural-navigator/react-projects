// import SubscribeManage from "./components/SubscribeManage";
// import Counter from "./components/Counter";
// import ColorPallete from "./components/ColorPallete";
// import PropImplement from "./components/PropImplement";
import ChildToParentProp from "./components/ChildToParentProp";
import Fragments from "./components/Fragments";
import LifeCycleA from "./components/LifeCycleA";

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
      <LifeCycleA />
    </>
  );
}

export default App;
