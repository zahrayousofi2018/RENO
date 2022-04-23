import './App.scss';
// import Navbar from './Component/Navbar'
import FrontPage from './Component/FrontPage'
import HomeOwner from './Component/HomeOwner'
import SignUp from './Component/SignUp'
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Vendor from './Component/Vendor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        {/* <Navbar/> */}
        {/* <FrontPage/> */}
        {/* <HomeOwner/> */}
         <Switch>
          <Route exact path="/" component={FrontPage}/>
         <Route path="/HomeOwner" component={HomeOwner}/> 
         <Route path="/Vendor" component={Vendor}/>
         <Route path="/SignUp" component={SignUp} />
        </Switch>
        {/* <SignUp/>  */}
        </BrowserRouter>
   
      </header>
    </div>
  );
}

export default App;
