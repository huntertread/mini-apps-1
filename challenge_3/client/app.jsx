// import React from 'React';
// import ReactDOM from 'ReactDOM';
// import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formNum: 0,
      form_fields: {
        name: '',
        email: '',
        password: '',
        line1: '',
        line2: '',
        city: '',
        state: '',
        zip: '',
        ccnum: '',
        expdate: '',
        cvv: '',
        billingzip: ''
      }
    }
    this.clickCheckout = this.clickCheckout.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPurchase = this.onClickPurchase.bind(this);
  }
  clickCheckout() {
    console.log("CHECKOUT CLICKED")
    this.setState({formNum: this.state.formNum + 1})
    console.log(this.state)
    // create a new record in the database
  }
  onClickNext() {
    console.log("NEXT CLICKED")
    this.setState({formNum: this.state.formNum + 1})
    console.log(this.state)
    // update state with values from individual form
  }
  onClickPurchase() {
    console.log("PURCHASE CLICKED");
    this.setState({formNum: 0})
    // post request with all of the instances of state
    // clear app state form_fields
  }
  render() {
    let button;
    let form;
    if (this.state.formNum === 0) {
      button = <CheckoutButton clickCheckout={this.clickCheckout} />
      form = null;
    } else if (this.state.formNum === 1){
      button = <NextButton clickNext={this.onClickNext}/>
      form = <Form1 />
    } else if (this.state.formNum === 2) {
      button = <NextButton clickNext={this.onClickNext}/>
      form = <Form2 />
    } else if (this.state.formNum === 3) {
      button = <PurchaseButton clickPurchase={this.onClickPurchase}/>
      form = <Form3 />
    }

    return (
      <div>
      <div>{button}</div>
      <div>{form}</div>
      </div>
    )
  }
}

var CheckoutButton = ({clickCheckout}) => (
  <div>
    <button onClick={clickCheckout}>CHECKOUT</button>
  </div>
)

var NextButton = ({clickNext}) => (
  <div>
    <button onClick={clickNext}>NEXT</button>
  </div>
)

var PurchaseButton = ({clickPurchase}) => (
  <div>
    <button onClick={clickPurchase}>PURCHASE</button>
  </div>
)

var Form1 = (props) => (
  <div>
    <form>
      <input type="text"></input><label>name</label>
      <input type="text"></input><label>email</label>
      <input type="text"></input><label>password</label>
    </form>
  </div>
)

var Form2 = (props) => (
  <div>
    <form>
      <input type="text"></input><label>address line 1</label>
      <input type="text"></input><label>address line 2</label>
      <input type="text"></input><label>city</label>
      <input type="text"></input><label>state</label>
      <input type="text"></input><label>zip code</label>
    </form>
  </div>
)

var Form3 = (props) => (
  <div>
    <form>
      <input type="text"></input><label>credit card number</label>
      <input type="text"></input><label>expiration date</label>
      <input type="text"></input><label>cvv</label>
      <input type="text"></input><label>billing zip code</label>
    </form>
  </div>
)

// export default App;
ReactDOM.render(<App />, document.getElementById('app'));