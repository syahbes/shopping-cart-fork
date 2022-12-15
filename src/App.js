import './App.css';
import { List, ListItem } from './components/List'
import { groceries, shoppingCart } from './data/data'

function App() {
  return (
    <div className="App">
      <div className="container-fluid mt-2">
        <div className="row">
          <List container="col-md-6 col-sm-12" style="alert alert-primary" id="groceries" header="Groceries List">
            <ListItem data={groceries} name="groceries" />
          </List>

          <List container="col-md-6 col-sm-12" style="alert alert-warning" id="shoppingCart" header="ShoppingCart">
            <ListItem data={shoppingCart} name="shoppingCart"/>
          </List>
        </div>
      </div>
    </div>
  );
}

export default App;
