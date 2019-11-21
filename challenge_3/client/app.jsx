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
        ccnum: null,
        expdate: '',
        cvv: null,
        billingzip: null
      }
    }
    this.clickCheckout = this.clickCheckout.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPurchase = this.onClickPurchase.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /* CLICK HANDLERS */
  clickCheckout() {
    console.log("CHECKOUT CLICKED")
    this.setState({formNum: this.state.formNum + 1})
    console.log(this.state)
  }
  onClickNext() {
    console.log("NEXT CLICKED")
    this.setState({formNum: this.state.formNum + 1})
    console.log(this.state)
  }
  onClickPurchase() {
    console.log("PURCHASE CLICKED");
    this.setState({formNum: 0})
    // post request with all of the instances of state
    // clear app state form_fields
  }

  /* SET APP STATE HELPER */
  handleChange(fieldName, value) {
    this.setState(prevState => {
      let form_fields = Object.assign ({}, prevState.form_fields)
      form_fields[fieldName] = value;
      return { form_fields };
      }
    )
    console.log(this.state)
  }

  /* CONDITIONAL RENDER METHOD */
  render() {
    let button;
    let form;
    if (this.state.formNum === 0) {
      button = <CheckoutButton clickCheckout={this.clickCheckout} />
      form = null;
    } else if (this.state.formNum === 1){
      button = <NextButton clickNext={this.onClickNext}/>
      form = <Form1 onChange={this.handleChange}/>
    } else if (this.state.formNum === 2) {
      button = <NextButton clickNext={this.onClickNext}/>
      form = <Form2 onChange={this.handleChange}/>
    } else if (this.state.formNum === 3) {
      button = <PurchaseButton clickPurchase={this.onClickPurchase}/>
      form = <Form3 onChange={this.handleChange}/>
    }

    return (
      <div>
      <div>{button}</div>
      <div>{form}</div>
      </div>
    )
  }
}

//----------------------------------------//
/* BUTTONS */
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

/* FORM ELEMENTS */
class Form1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.onChange(e.target.name, e.target.value)
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleInputChange(e)}></input><label>name</label><br/>
          <input type="text" name="email" value={this.state.email} onChange={(e) => this.handleInputChange(e)}></input><label>email</label><br/>
          <input type="text" name="password" value={this.state.password} onChange={(e) => this.handleInputChange(e)}></input><label>password</label><br/>
        </form>
      </div>
    )
  }
}

class Form2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.onChange(e.target.name, e.target.value)
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="line1" value={this.state.name} onChange={(e) => this.handleInputChange(e)}></input><label>address line 1</label><br/>
          <input type="text" name="line2" value={this.state.name} onChange={(e) => this.handleInputChange(e)}></input><label>address line 2</label><br/>
          <input type="text" name="city" value={this.state.name} onChange={(e) => this.handleInputChange(e)}></input><label>city</label><br/>
          <input type="text" name="state" value={this.state.name} onChange={(e) => this.handleInputChange(e)}></input><label>state</label><br/>
          <input type="text" name="zip" value={this.state.name} onChange={(e) => this.handleInputChange(e)}></input><label>zip code</label><br/>
        </form>
      </div>
    )
  }
}

class Form3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.onChange(e.target.name, e.target.value)
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="ccnum" value={this.state.name} onChange={(e) => this.handleInputChange(e)}></input><label>credit card number</label><br/>
          <input type="text" name="expdate" value={this.state.name} onChange={(e) => this.handleInputChange(e)}></input><label>expiration date</label><br/>
          <input type="text" name="cvv" value={this.state.name} onChange={(e) => this.handleInputChange(e)}></input><label>cvv</label><br/>
          <input type="text" name="billingzip" value={this.state.name} onChange={(e) => this.handleInputChange(e)}></input><label>billing zip code</label><br/>
        </form>
      </div>
    )
  }
}

// export default App;
ReactDOM.render(<App />, document.getElementById('app'));