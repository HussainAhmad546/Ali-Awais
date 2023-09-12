import './App'
import TopNav from './topNav';
import MyHeader from './MyHeader';
import Header3 from './Header3';
import Header4 from './Header4';
import Header56 from './Header56';
import Footer from './Footer';
import Header7 from './Header7';
// import DataList from './Datafetch';
function App() {
  return (
    <div className="App">
      <TopNav />
        <MyHeader />
        <Header3/>
        <Header4/>
        <Header56 />
        <Header7 />
        <Footer/> 

        {/* <DataList/> */}
    </div>
  );
}
export default App;
