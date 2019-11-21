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
        ccnum: '',
        expdate: '',
        cvv: '',
        billingzip: ''
      }
    };
    this.clickCheckout = this.clickCheckout.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPurchase = this.onClickPurchase.bind(this);
  }
  clickCheckout() {
    console.log("CHECKOUT CLICKED");
    this.setState({ formNum: this.state.formNum + 1 });
    console.log(this.state);
    // create a new record in the database
  }
  onClickNext() {
    console.log("NEXT CLICKED");
    this.setState({ formNum: this.state.formNum + 1 });
    console.log(this.state);
    // update state with values from individual form
  }
  onClickPurchase() {
    console.log("PURCHASE CLICKED");
    this.setState({ formNum: 0 });
    // post request with all of the instances of state
    // clear app state form_fields
  }
  render() {
    let button;
    let form;
    if (this.state.formNum === 0) {
      button = React.createElement(CheckoutButton, { clickCheckout: this.clickCheckout });
      form = null;
    } else if (this.state.formNum === 1) {
      button = React.createElement(NextButton, { clickNext: this.onClickNext });
      form = React.createElement(Form1, null);
    } else if (this.state.formNum === 2) {
      button = React.createElement(NextButton, { clickNext: this.onClickNext });
      form = React.createElement(Form2, null);
    } else if (this.state.formNum === 3) {
      button = React.createElement(PurchaseButton, { clickPurchase: this.onClickPurchase });
      form = React.createElement(Form3, null);
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

var Form1 = props => React.createElement(
  'div',
  null,
  React.createElement(
    'form',
    null,
    React.createElement('input', { type: 'text' }),
    React.createElement(
      'label',
      null,
      'name'
    ),
    React.createElement('input', { type: 'text' }),
    React.createElement(
      'label',
      null,
      'email'
    ),
    React.createElement('input', { type: 'text' }),
    React.createElement(
      'label',
      null,
      'password'
    )
  )
);

var Form2 = props => React.createElement(
  'div',
  null,
  React.createElement(
    'form',
    null,
    React.createElement('input', { type: 'text' }),
    React.createElement(
      'label',
      null,
      'address line 1'
    ),
    React.createElement('input', { type: 'text' }),
    React.createElement(
      'label',
      null,
      'address line 2'
    ),
    React.createElement('input', { type: 'text' }),
    React.createElement(
      'label',
      null,
      'city'
    ),
    React.createElement('input', { type: 'text' }),
    React.createElement(
      'label',
      null,
      'state'
    ),
    React.createElement('input', { type: 'text' }),
    React.createElement(
      'label',
      null,
      'zip code'
    )
  )
);

var Form3 = props => React.createElement(
  'div',
  null,
  React.createElement(
    'form',
    null,
    React.createElement('input', { type: 'text' }),
    React.createElement(
      'label',
      null,
      'credit card number'
    ),
    React.createElement('input', { type: 'text' }),
    React.createElement(
      'label',
      null,
      'expiration date'
    ),
    React.createElement('input', { type: 'text' }),
    React.createElement(
      'label',
      null,
      'cvv'
    ),
    React.createElement('input', { type: 'text' }),
    React.createElement(
      'label',
      null,
      'billing zip code'
    )
  )
);

// export default App;
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZm9ybU51bSIsImZvcm1fZmllbGRzIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInppcCIsImNjbnVtIiwiZXhwZGF0ZSIsImN2diIsImJpbGxpbmd6aXAiLCJjbGlja0NoZWNrb3V0IiwiYmluZCIsIm9uQ2xpY2tOZXh0Iiwib25DbGlja1B1cmNoYXNlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwicmVuZGVyIiwiYnV0dG9uIiwiZm9ybSIsIkNoZWNrb3V0QnV0dG9uIiwiTmV4dEJ1dHRvbiIsImNsaWNrTmV4dCIsIlB1cmNoYXNlQnV0dG9uIiwiY2xpY2tQdXJjaGFzZSIsIkZvcm0xIiwiRm9ybTIiLCJGb3JtMyIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUyxDQURFO0FBRVhDLG1CQUFhO0FBQ1hDLGNBQU0sRUFESztBQUVYQyxlQUFPLEVBRkk7QUFHWEMsa0JBQVUsRUFIQztBQUlYQyxlQUFPLEVBSkk7QUFLWEMsZUFBTyxFQUxJO0FBTVhDLGNBQU0sRUFOSztBQU9YUixlQUFPLEVBUEk7QUFRWFMsYUFBSyxFQVJNO0FBU1hDLGVBQU8sRUFUSTtBQVVYQyxpQkFBUyxFQVZFO0FBV1hDLGFBQUssRUFYTTtBQVlYQyxvQkFBWTtBQVpEO0FBRkYsS0FBYjtBQWlCQSxTQUFLQyxhQUFMLEdBQXFCLEtBQUtBLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENB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Rjs7QUFVQSxJQUFJK0IsUUFBUy9CLEtBQUQsSUFDVjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxtQ0FBTyxNQUFLLE1BQVosR0FERjtBQUM2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRDdCO0FBRUUsbUNBQU8sTUFBSyxNQUFaLEdBRkY7QUFFNkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUY3QjtBQUdFLG1DQUFPLE1BQUssTUFBWixHQUhGO0FBRzZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FIN0I7QUFJRSxtQ0FBTyxNQUFLLE1BQVosR0FKRjtBQUk2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSjdCO0FBS0UsbUNBQU8sTUFBSyxNQUFaLEdBTEY7QUFLNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUw3QjtBQURGLENBREY7O0FBWUEsSUFBSWdDLFFBQVNoQyxLQUFELElBQ1Y7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsbUNBQU8sTUFBSyxNQUFaLEdBREY7QUFDNkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUQ3QjtBQUVFLG1DQUFPLE1BQUssTUFBWixHQUZGO0FBRTZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGN0I7QUFHRSxtQ0FBTyxNQUFLLE1BQVosR0FIRjtBQUc2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSDdCO0FBSUUsbUNBQU8sTUFBSyxNQUFaLEdBSkY7QUFJNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUo3QjtBQURGLENBREY7O0FBV0E7QUFDQWlDLFNBQVNYLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QlksU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSAnUmVhY3QnO1xuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gJ1JlYWN0RE9NJztcbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm1OdW06IDAsXG4gICAgICBmb3JtX2ZpZWxkczoge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIGxpbmUxOiAnJyxcbiAgICAgICAgbGluZTI6ICcnLFxuICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgc3RhdGU6ICcnLFxuICAgICAgICB6aXA6ICcnLFxuICAgICAgICBjY251bTogJycsXG4gICAgICAgIGV4cGRhdGU6ICcnLFxuICAgICAgICBjdnY6ICcnLFxuICAgICAgICBiaWxsaW5nemlwOiAnJ1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNsaWNrQ2hlY2tvdXQgPSB0aGlzLmNsaWNrQ2hlY2tvdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2xpY2tOZXh0ID0gdGhpcy5vbkNsaWNrTmV4dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DbGlja1B1cmNoYXNlID0gdGhpcy5vbkNsaWNrUHVyY2hhc2UuYmluZCh0aGlzKTtcbiAgfVxuICBjbGlja0NoZWNrb3V0KCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ0hFQ0tPVVQgQ0xJQ0tFRFwiKVxuICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1OdW06IHRoaXMuc3RhdGUuZm9ybU51bSArIDF9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gICAgLy8gY3JlYXRlIGEgbmV3IHJlY29yZCBpbiB0aGUgZGF0YWJhc2VcbiAgfVxuICBvbkNsaWNrTmV4dCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIk5FWFQgQ0xJQ0tFRFwiKVxuICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1OdW06IHRoaXMuc3RhdGUuZm9ybU51bSArIDF9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gICAgLy8gdXBkYXRlIHN0YXRlIHdpdGggdmFsdWVzIGZyb20gaW5kaXZpZHVhbCBmb3JtXG4gIH1cbiAgb25DbGlja1B1cmNoYXNlKCkge1xuICAgIGNvbnNvbGUubG9nKFwiUFVSQ0hBU0UgQ0xJQ0tFRFwiKTtcbiAgICB0aGlzLnNldFN0YXRlKHtmb3JtTnVtOiAwfSlcbiAgICAvLyBwb3N0IHJlcXVlc3Qgd2l0aCBhbGwgb2YgdGhlIGluc3RhbmNlcyBvZiBzdGF0ZVxuICAgIC8vIGNsZWFyIGFwcCBzdGF0ZSBmb3JtX2ZpZWxkc1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYnV0dG9uO1xuICAgIGxldCBmb3JtO1xuICAgIGlmICh0aGlzLnN0YXRlLmZvcm1OdW0gPT09IDApIHtcbiAgICAgIGJ1dHRvbiA9IDxDaGVja291dEJ1dHRvbiBjbGlja0NoZWNrb3V0PXt0aGlzLmNsaWNrQ2hlY2tvdXR9IC8+XG4gICAgICBmb3JtID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZm9ybU51bSA9PT0gMSl7XG4gICAgICBidXR0b24gPSA8TmV4dEJ1dHRvbiBjbGlja05leHQ9e3RoaXMub25DbGlja05leHR9Lz5cbiAgICAgIGZvcm0gPSA8Rm9ybTEgLz5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZm9ybU51bSA9PT0gMikge1xuICAgICAgYnV0dG9uID0gPE5leHRCdXR0b24gY2xpY2tOZXh0PXt0aGlzLm9uQ2xpY2tOZXh0fS8+XG4gICAgICBmb3JtID0gPEZvcm0yIC8+XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmZvcm1OdW0gPT09IDMpIHtcbiAgICAgIGJ1dHRvbiA9IDxQdXJjaGFzZUJ1dHRvbiBjbGlja1B1cmNoYXNlPXt0aGlzLm9uQ2xpY2tQdXJjaGFzZX0vPlxuICAgICAgZm9ybSA9IDxGb3JtMyAvPlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGRpdj57YnV0dG9ufTwvZGl2PlxuICAgICAgPGRpdj57Zm9ybX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG52YXIgQ2hlY2tvdXRCdXR0b24gPSAoe2NsaWNrQ2hlY2tvdXR9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtjbGlja0NoZWNrb3V0fT5DSEVDS09VVDwvYnV0dG9uPlxuICA8L2Rpdj5cbilcblxudmFyIE5leHRCdXR0b24gPSAoe2NsaWNrTmV4dH0pID0+IChcbiAgPGRpdj5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e2NsaWNrTmV4dH0+TkVYVDwvYnV0dG9uPlxuICA8L2Rpdj5cbilcblxudmFyIFB1cmNoYXNlQnV0dG9uID0gKHtjbGlja1B1cmNoYXNlfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxidXR0b24gb25DbGljaz17Y2xpY2tQdXJjaGFzZX0+UFVSQ0hBU0U8L2J1dHRvbj5cbiAgPC9kaXY+XG4pXG5cbnZhciBGb3JtMSA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxmb3JtPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD48bGFiZWw+bmFtZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj48L2lucHV0PjxsYWJlbD5lbWFpbDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj48L2lucHV0PjxsYWJlbD5wYXNzd29yZDwvbGFiZWw+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbilcblxudmFyIEZvcm0yID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGZvcm0+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj48L2lucHV0PjxsYWJlbD5hZGRyZXNzIGxpbmUgMTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj48L2lucHV0PjxsYWJlbD5hZGRyZXNzIGxpbmUgMjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj48L2lucHV0PjxsYWJlbD5jaXR5PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+PGxhYmVsPnN0YXRlPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+PGxhYmVsPnppcCBjb2RlPC9sYWJlbD5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuKVxuXG52YXIgRm9ybTMgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8Zm9ybT5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+PGxhYmVsPmNyZWRpdCBjYXJkIG51bWJlcjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj48L2lucHV0PjxsYWJlbD5leHBpcmF0aW9uIGRhdGU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+PC9pbnB1dD48bGFiZWw+Y3Z2PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+PGxhYmVsPmJpbGxpbmcgemlwIGNvZGU8L2xhYmVsPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG4pXG5cbi8vIGV4cG9ydCBkZWZhdWx0IEFwcDtcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==