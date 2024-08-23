import "./App.css";
import PcHeader from "./component/PcHeader";
import Content from "./component/Content";
import Footer from "./component/Footer";
import MobileHeader from "./component/MobileHeader";

//작은 헤더 (1023px보다 작을 때)
//큰 헤더 (max-width: 1023px보다 클 때)
//콘텐츠
//하단

function App() {
  return (
    <>
      <MobileHeader />
      <PcHeader />
      <Content />
      <Footer />
    </>
  );
}

export default App;
