import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddProducts from './Pages/Home/AddProducts/AddProducts';
import Details from './Pages/Home/Details/Details';
import MyOrders from './Pages/Home/MyOrders/MyOrders';
import ManageOrders from './Pages/Home/ManageOrders/ManageOrders';
import Review from './Pages/Home/Review/Review';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            {/* <Route path="/addProducts">
              <AddProducts></AddProducts>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/manageOrders">
              <ManageOrders></ManageOrders>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route> */}
            <Route exact path="/services/:serviceId">
              <Details></Details>
            </Route>
            <PrivateRoute path="/services">
              <Appointment />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
