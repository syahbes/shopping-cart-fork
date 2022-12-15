import './App.css';
import {List} from './Components/List'


function App() {
  return (
    <div className="App">
      <div className="container-fluid mt-2">
        <div className="row">
          <List container="col-md-6 col-sm-12" style="alert alert-primary" id="groceries" header="Groceries List" />
          <List container="col-md-6 col-sm-12" style="alert alert-warning" id="shoppingCart" header="ShoppingCart" />
        </div>
      </div>
    </div>
  );
}

export default App;
