import useMouseLocation from "./20230925study/Hooks/useMouseLocation";
import useScroll from "./20230925study/Hooks/useScroll";
import InputComponent from "./20230925study/InputComponent";
import SomethingComponent from "./20230925study/SomethingComponent";

const App20230925 = () => {
  console.log('컴포넌트 랜더')
  // const mouseLocation = useMouseLocation();

  const isBottom = useScroll();
  console.log(isBottom)
  
  return (
    <div className="App" style={{height: 3000}}>
      <InputComponent />
      <SomethingComponent />
      {/* <div style={{width: 100, height: 100, backgroundColor: mouseLocation.x > 100 ?  'royalblue' : 'red'}}>
      </div> */}
    </div>
  );
}

export default App20230925;

