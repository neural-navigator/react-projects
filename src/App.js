// import SubscribeManage from "./components/SubscribeManage";
// import Counter from "./components/Counter";
// import ColorPallete from "./components/ColorPallete";
// import PropImplement from "./components/PropImplement";
import ChildToParentProp from "./components/ChildToParentProp";

function App() {
  const childPropHandler = (val) => console.log(`${val} printed in parent!`)
  return (
    <div>
      {/* <Counter /> */}
      {/* <SubscribeManage /> */}
      {/* <ColorPallete /> */}
      {/* <PropImplement btn_color="#ff1111" name="Hello"/> */}
      <ChildToParentProp printChildProp={childPropHandler} />
    </div>
  );
}

export default App;
