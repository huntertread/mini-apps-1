// import React from 'React';
// import ReactDOM from 'ReactDOM';
// import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
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
    };
    this.clickCheckout = this.clickCheckout.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPurchase = this.onClickPurchase.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /* CLICK HANDLERS */
  clickCheckout() {
    console.log("CHECKOUT CLICKED");
    this.setState({ formNum: this.state.formNum + 1 });
    console.log(this.state);
  }
  onClickNext() {
    console.log("NEXT CLICKED");
    this.setState({ formNum: this.state.formNum + 1 });
    console.log(this.state);
  }
  onClickPurchase() {
    console.log("PURCHASE CLICKED");
    this.setState({ formNum: 0 });
    // post request with all of the instances of state
    console.log(this.state.form_fields);
    this.addRecord(this.state.form_fields);
  }

  // post request
  addRecord({ name, email, password, line1, line2, city, state, zip, ccnum, expdate, cvv, billingzip }) {
    axios.post('/', {
      name,
      email,
      password,
      line1,
      line2,
      city,
      state,
      zip,
      ccnum: Number(ccnum),
      expdate,
      cvv: Number(cvv),
      billingzip: Number(billingzip)
    }).catch(err => console.log(err));
  }

  /* SET APP STATE HELPER */
  handleChange(fieldName, value) {
    this.setState(prevState => {
      let form_fields = Object.assign({}, prevState.form_fields);
      form_fields[fieldName] = value;
      return { form_fields };
    });
    // console.log(this.state)
  }

  /* CONDITIONAL RENDER METHOD */
  render() {
    let button;
    let form;
    if (this.state.formNum === 0) {
      button = React.createElement(CheckoutButton, { clickCheckout: this.clickCheckout });
      form = null;
    } else if (this.state.formNum === 1) {
      button = React.createElement(NextButton, { clickNext: this.onClickNext });
      form = React.createElement(Form1, { onChange: this.handleChange });
    } else if (this.state.formNum === 2) {
      button = React.createElement(NextButton, { clickNext: this.onClickNext });
      form = React.createElement(Form2, { onChange: this.handleChange });
    } else if (this.state.formNum === 3) {
      button = React.createElement(PurchaseButton, { clickPurchase: this.onClickPurchase });
      form = React.createElement(Form3, { onChange: this.handleChange });
    }

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        button
      ),
      React.createElement(
        'div',
        null,
        form
      )
    );
  }
}

//----------------------------------------//
/* BUTTONS */
var CheckoutButton = ({ clickCheckout }) => React.createElement(
  'div',
  null,
  React.createElement(
    'button',
    { onClick: clickCheckout },
    'CHECKOUT'
  )
);

var NextButton = ({ clickNext }) => React.createElement(
  'div',
  null,
  React.createElement(
    'button',
    { onClick: clickNext },
    'NEXT'
  )
);

var PurchaseButton = ({ clickPurchase }) => React.createElement(
  'div',
  null,
  React.createElement(
    'button',
    { onClick: clickPurchase },
    'PURCHASE'
  )
);

/* FORM ELEMENTS */
class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.onChange(e.target.name, e.target.value);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'form',
        null,
        React.createElement('input', { type: 'text', name: 'name', value: this.state.name, onChange: e => this.handleInputChange(e) }),
        React.createElement(
          'label',
          null,
          'name'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'text', name: 'email', value: this.state.email, onChange: e => this.handleInputChange(e) }),
        React.createElement(
          'label',
          null,
          'email'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'text', name: 'password', value: this.state.password, onChange: e => this.handleInputChange(e) }),
        React.createElement(
          'label',
          null,
          'password'
        ),
        React.createElement('br', null)
      )
    );
  }
}
// -------------------------------------- //
class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.onChange(e.target.name, e.target.value);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'form',
        null,
        React.createElement('input', { type: 'text', name: 'line1', value: this.state.name, onChange: e => this.handleInputChange(e) }),
        React.createElement(
          'label',
          null,
          'address line 1'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'text', name: 'line2', value: this.state.name, onChange: e => this.handleInputChange(e) }),
        React.createElement(
          'label',
          null,
          'address line 2'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'text', name: 'city', value: this.state.name, onChange: e => this.handleInputChange(e) }),
        React.createElement(
          'label',
          null,
          'city'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'text', name: 'state', value: this.state.name, onChange: e => this.handleInputChange(e) }),
        React.createElement(
          'label',
          null,
          'state'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'text', name: 'zip', value: this.state.name, onChange: e => this.handleInputChange(e) }),
        React.createElement(
          'label',
          null,
          'zip code'
        ),
        React.createElement('br', null)
      )
    );
  }
}
// ---------------------------------------- //
class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.props.onChange(e.target.name, e.target.value);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'form',
        null,
        React.createElement('input', { type: 'text', name: 'ccnum', value: this.state.name, onChange: e => this.handleInputChange(e) }),
        React.createElement(
          'label',
          null,
          'credit card number'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'text', name: 'expdate', value: this.state.name, onChange: e => this.handleInputChange(e) }),
        React.createElement(
          'label',
          null,
          'expiration date'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'text', name: 'cvv', value: this.state.name, onChange: e => this.handleInputChange(e) }),
        React.createElement(
          'label',
          null,
          'cvv'
        ),
        React.createElement('br', null),
        React.createElement('input', { type: 'text', name: 'billingzip', value: this.state.name, onChange: e => this.handleInputChange(e) }),
        React.createElement(
          'label',
          null,
          'billing zip code'
        ),
        React.createElement('br', null)
      )
    );
  }
}

// export default App;
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZm9ybU51bSIsImZvcm1fZmllbGRzIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInppcCIsImNjbnVtIiwiZXhwZGF0ZSIsImN2diIsImJpbGxpbmd6aXAiLCJjbGlja0NoZWNrb3V0IiwiYmluZCIsIm9uQ2xpY2tOZXh0Iiwib25DbGlja1B1cmNoYXNlIiwiaGFuZGxlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiYWRkUmVjb3JkIiwiYXhpb3MiLCJwb3N0IiwiTnVtYmVyIiwiY2F0Y2giLCJlcnIiLCJmaWVsZE5hbWUiLCJ2YWx1ZSIsInByZXZTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsInJlbmRlciIsImJ1dHRvbiIsImZvcm0iLCJDaGVja291dEJ1dHRvbiIsIk5leHRCdXR0b24iLCJjbGlja05leHQiLCJQdXJjaGFzZUJ1dHRvbiIsImNsaWNrUHVyY2hhc2UiLCJGb3JtMSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiRm9ybTIiLCJGb3JtMyIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUyxDQURFO0FBRVhDLG1CQUFhO0FBQ1hDLGNBQU0sRUFESztBQUVYQyxlQUFPLEVBRkk7QUFHWEMsa0JBQVUsRUFIQztBQUlYQyxlQUFPLEVBSkk7QUFLWEMsZUFBTyxFQUxJO0FBTVhDLGNBQU0sRUFOSztBQU9YUixlQUFP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LFNBQXhCLEVBQWtDLE9BQU8sS0FBSzNDLEtBQUwsQ0FBV0csSUFBcEQsRUFBMEQsVUFBV3dDLENBQUQsSUFBTyxLQUFLRCxpQkFBTCxDQUF1QkMsQ0FBdkIsQ0FBM0UsR0FGRjtBQUVnSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRmhIO0FBRThJLHVDQUY5STtBQUdFLHVDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLEtBQXhCLEVBQThCLE9BQU8sS0FBSzNDLEtBQUwsQ0FBV0csSUFBaEQsRUFBc0QsVUFBV3dDLENBQUQsSUFBTyxLQUFLRCxpQkFBTCxDQUF1QkMsQ0FBdkIsQ0FBdkUsR0FIRjtBQUc0RztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSDVHO0FBRzhILHVDQUg5SDtBQUlFLHVDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLFlBQXhCLEVBQXFDLE9BQU8sS0FBSzNDLEtBQUwsQ0FBV0csSUFBdkQsRUFBNkQsVUFBV3dDLENBQUQsSUFBTyxLQUFLRCxpQkFBTCxDQUF1QkMsQ0FBdkIsQ0FBOUUsR0FKRjtBQUltSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSm5IO0FBSWtKO0FBSmxKO0FBREYsS0FERjtBQVVEO0FBdkJpQzs7QUEwQnBDO0FBQ0FLLFNBQVNmLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QmdCLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ1JlYWN0Jztcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tICdSZWFjdERPTSc7XG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3JtTnVtOiAwLFxuICAgICAgZm9ybV9maWVsZHM6IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBsaW5lMTogJycsXG4gICAgICAgIGxpbmUyOiAnJyxcbiAgICAgICAgY2l0eTogJycsXG4gICAgICAgIHN0YXRlOiAnJyxcbiAgICAgICAgemlwOiAnJyxcbiAgICAgICAgY2NudW06IG51bGwsXG4gICAgICAgIGV4cGRhdGU6ICcnLFxuICAgICAgICBjdnY6IG51bGwsXG4gICAgICAgIGJpbGxpbmd6aXA6IG51bGxcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jbGlja0NoZWNrb3V0ID0gdGhpcy5jbGlja0NoZWNrb3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNsaWNrTmV4dCA9IHRoaXMub25DbGlja05leHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2xpY2tQdXJjaGFzZSA9IHRoaXMub25DbGlja1B1cmNoYXNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyogQ0xJQ0sgSEFORExFUlMgKi9cbiAgY2xpY2tDaGVja291dCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNIRUNLT1VUIENMSUNLRURcIilcbiAgICB0aGlzLnNldFN0YXRlKHtmb3JtTnVtOiB0aGlzLnN0YXRlLmZvcm1OdW0gKyAxfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICB9XG4gIG9uQ2xpY2tOZXh0KCkge1xuICAgIGNvbnNvbGUubG9nKFwiTkVYVCBDTElDS0VEXCIpXG4gICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybU51bTogdGhpcy5zdGF0ZS5mb3JtTnVtICsgMX0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgfVxuICBvbkNsaWNrUHVyY2hhc2UoKSB7XG4gICAgY29uc29sZS5sb2coXCJQVVJDSEFTRSBDTElDS0VEXCIpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1OdW06IDB9KVxuICAgIC8vIHBvc3QgcmVxdWVzdCB3aXRoIGFsbCBvZiB0aGUgaW5zdGFuY2VzIG9mIHN0YXRlXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5mb3JtX2ZpZWxkcyk7XG4gICAgdGhpcy5hZGRSZWNvcmQodGhpcy5zdGF0ZS5mb3JtX2ZpZWxkcylcbiAgfVxuXG4gIC8vIHBvc3QgcmVxdWVzdFxuICBhZGRSZWNvcmQoe25hbWUsIGVtYWlsLCBwYXNzd29yZCwgbGluZTEsIGxpbmUyLCBjaXR5LCBzdGF0ZSwgemlwLCBjY251bSwgZXhwZGF0ZSwgY3Z2LCBiaWxsaW5nemlwfSkge1xuICAgIGF4aW9zLnBvc3QoJy8nLCB7XG4gICAgICBuYW1lLFxuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIGxpbmUxLFxuICAgICAgbGluZTIsXG4gICAgICBjaXR5LFxuICAgICAgc3RhdGUsXG4gICAgICB6aXAsXG4gICAgICBjY251bTogTnVtYmVyKGNjbnVtKSxcbiAgICAgIGV4cGRhdGUsXG4gICAgICBjdnY6IE51bWJlcihjdnYpLFxuICAgICAgYmlsbGluZ3ppcDogTnVtYmVyKGJpbGxpbmd6aXApXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgfVxuXG4gIC8qIFNFVCBBUFAgU1RBVEUgSEVMUEVSICovXG4gIGhhbmRsZUNoYW5nZShmaWVsZE5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgbGV0IGZvcm1fZmllbGRzID0gT2JqZWN0LmFzc2lnbiAoe30sIHByZXZTdGF0ZS5mb3JtX2ZpZWxkcylcbiAgICAgIGZvcm1fZmllbGRzW2ZpZWxkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiB7IGZvcm1fZmllbGRzIH07XG4gICAgICB9XG4gICAgKVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gIH1cblxuICAvKiBDT05ESVRJT05BTCBSRU5ERVIgTUVUSE9EICovXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYnV0dG9uO1xuICAgIGxldCBmb3JtO1xuICAgIGlmICh0aGlzLnN0YXRlLmZvcm1OdW0gPT09IDApIHtcbiAgICAgIGJ1dHRvbiA9IDxDaGVja291dEJ1dHRvbiBjbGlja0NoZWNrb3V0PXt0aGlzLmNsaWNrQ2hlY2tvdXR9IC8+XG4gICAgICBmb3JtID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZm9ybU51bSA9PT0gMSl7XG4gICAgICBidXR0b24gPSA8TmV4dEJ1dHRvbiBjbGlja05leHQ9e3RoaXMub25DbGlja05leHR9Lz5cbiAgICAgIGZvcm0gPSA8Rm9ybTEgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmZvcm1OdW0gPT09IDIpIHtcbiAgICAgIGJ1dHRvbiA9IDxOZXh0QnV0dG9uIGNsaWNrTmV4dD17dGhpcy5vbkNsaWNrTmV4dH0vPlxuICAgICAgZm9ybSA9IDxGb3JtMiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZm9ybU51bSA9PT0gMykge1xuICAgICAgYnV0dG9uID0gPFB1cmNoYXNlQnV0dG9uIGNsaWNrUHVyY2hhc2U9e3RoaXMub25DbGlja1B1cmNoYXNlfS8+XG4gICAgICBmb3JtID0gPEZvcm0zIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGRpdj57YnV0dG9ufTwvZGl2PlxuICAgICAgPGRpdj57Zm9ybX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuLyogQlVUVE9OUyAqL1xudmFyIENoZWNrb3V0QnV0dG9uID0gKHtjbGlja0NoZWNrb3V0fSkgPT4gKFxuICA8ZGl2PlxuICAgIDxidXR0b24gb25DbGljaz17Y2xpY2tDaGVja291dH0+Q0hFQ0tPVVQ8L2J1dHRvbj5cbiAgPC9kaXY+XG4pXG5cbnZhciBOZXh0QnV0dG9uID0gKHtjbGlja05leHR9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtjbGlja05leHR9Pk5FWFQ8L2J1dHRvbj5cbiAgPC9kaXY+XG4pXG5cbnZhciBQdXJjaGFzZUJ1dHRvbiA9ICh7Y2xpY2tQdXJjaGFzZX0pID0+IChcbiAgPGRpdj5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e2NsaWNrUHVyY2hhc2V9PlBVUkNIQVNFPC9idXR0b24+XG4gIDwvZGl2PlxuKVxuXG4vKiBGT1JNIEVMRU1FTlRTICovXG5jbGFzcyBGb3JtMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZShlKX0+PC9pbnB1dD48bGFiZWw+bmFtZTwvbGFiZWw+PGJyLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGUpfT48L2lucHV0PjxsYWJlbD5lbWFpbDwvbGFiZWw+PGJyLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGUpfT48L2lucHV0PjxsYWJlbD5wYXNzd29yZDwvbGFiZWw+PGJyLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuY2xhc3MgRm9ybTIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgfVxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxpbmUxXCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGUpfT48L2lucHV0PjxsYWJlbD5hZGRyZXNzIGxpbmUgMTwvbGFiZWw+PGJyLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGluZTJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoZSl9PjwvaW5wdXQ+PGxhYmVsPmFkZHJlc3MgbGluZSAyPC9sYWJlbD48YnIvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGUpfT48L2lucHV0PjxsYWJlbD5jaXR5PC9sYWJlbD48YnIvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdGF0ZVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZShlKX0+PC9pbnB1dD48bGFiZWw+c3RhdGU8L2xhYmVsPjxici8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInppcFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZShlKX0+PC9pbnB1dD48bGFiZWw+emlwIGNvZGU8L2xhYmVsPjxici8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuY2xhc3MgRm9ybTMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgfVxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNjbnVtXCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGUpfT48L2lucHV0PjxsYWJlbD5jcmVkaXQgY2FyZCBudW1iZXI8L2xhYmVsPjxici8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImV4cGRhdGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoZSl9PjwvaW5wdXQ+PGxhYmVsPmV4cGlyYXRpb24gZGF0ZTwvbGFiZWw+PGJyLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3Z2XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGUpfT48L2lucHV0PjxsYWJlbD5jdnY8L2xhYmVsPjxici8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJpbGxpbmd6aXBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoZSl9PjwvaW5wdXQ+PGxhYmVsPmJpbGxpbmcgemlwIGNvZGU8L2xhYmVsPjxici8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBBcHA7XG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=