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
    // clear app state form_fields
  }

  /* SET APP STATE HELPER */
  handleChange(fieldName, value) {
    this.setState(prevState => {
      let form_fields = Object.assign({}, prevState.form_fields);
      form_fields[fieldName] = value;
      return { form_fields };
    });
    console.log(this.state);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZm9ybU51bSIsImZvcm1fZmllbGRzIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInppcCIsImNjbnVtIiwiZXhwZGF0ZSIsImN2diIsImJpbGxpbmd6aXAiLCJjbGlja0NoZWNrb3V0IiwiYmluZCIsIm9uQ2xpY2tOZXh0Iiwib25DbGlja1B1cmNoYXNlIiwiaGFuZGxlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZmllbGROYW1lIiwidmFsdWUiLCJwcmV2U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJyZW5kZXIiLCJidXR0b24iLCJmb3JtIiwiQ2hlY2tvdXRCdXR0b24iLCJOZXh0QnV0dG9uIiwiY2xpY2tOZXh0IiwiUHVyY2hhc2VCdXR0b24iLCJjbGlja1B1cmNoYXNlIiwiRm9ybTEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJvbkNoYW5nZSIsInRhcmdldCIsIkZvcm0yIiwiRm9ybTMiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVMsQ0FERTtBQUVYQyxtQkFBYTtBQUNYQyxjQUFNLEVBREs7QUFFWEMsZUFBTyxFQUZJO0FBR1hDLGtCQUFVLEVBSEM7QUFJWEMsZUFBTyxFQUpJO0FBS1hDLGVBQU8sRUFMSTtBQU1YQyxjQUFNLEVBTks7QUFPWFIsZUFBTyxFQVBJO0FBUVhTLGFBQUssRUFSTTtBQVNYQyxlQUFPLElBVEk7QUFVWEMsaUJBQVMs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QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSAnUmVhY3QnO1xuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gJ1JlYWN0RE9NJztcbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm1OdW06IDAsXG4gICAgICBmb3JtX2ZpZWxkczoge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIGxpbmUxOiAnJyxcbiAgICAgICAgbGluZTI6ICcnLFxuICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgc3RhdGU6ICcnLFxuICAgICAgICB6aXA6ICcnLFxuICAgICAgICBjY251bTogbnVsbCxcbiAgICAgICAgZXhwZGF0ZTogJycsXG4gICAgICAgIGN2djogbnVsbCxcbiAgICAgICAgYmlsbGluZ3ppcDogbnVsbFxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNsaWNrQ2hlY2tvdXQgPSB0aGlzLmNsaWNrQ2hlY2tvdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2xpY2tOZXh0ID0gdGhpcy5vbkNsaWNrTmV4dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DbGlja1B1cmNoYXNlID0gdGhpcy5vbkNsaWNrUHVyY2hhc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKiBDTElDSyBIQU5ETEVSUyAqL1xuICBjbGlja0NoZWNrb3V0KCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ0hFQ0tPVVQgQ0xJQ0tFRFwiKVxuICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1OdW06IHRoaXMuc3RhdGUuZm9ybU51bSArIDF9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gIH1cbiAgb25DbGlja05leHQoKSB7XG4gICAgY29uc29sZS5sb2coXCJORVhUIENMSUNLRURcIilcbiAgICB0aGlzLnNldFN0YXRlKHtmb3JtTnVtOiB0aGlzLnN0YXRlLmZvcm1OdW0gKyAxfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICB9XG4gIG9uQ2xpY2tQdXJjaGFzZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIlBVUkNIQVNFIENMSUNLRURcIik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybU51bTogMH0pXG4gICAgLy8gcG9zdCByZXF1ZXN0IHdpdGggYWxsIG9mIHRoZSBpbnN0YW5jZXMgb2Ygc3RhdGVcbiAgICAvLyBjbGVhciBhcHAgc3RhdGUgZm9ybV9maWVsZHNcbiAgfVxuXG4gIC8qIFNFVCBBUFAgU1RBVEUgSEVMUEVSICovXG4gIGhhbmRsZUNoYW5nZShmaWVsZE5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgbGV0IGZvcm1fZmllbGRzID0gT2JqZWN0LmFzc2lnbiAoe30sIHByZXZTdGF0ZS5mb3JtX2ZpZWxkcylcbiAgICAgIGZvcm1fZmllbGRzW2ZpZWxkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiB7IGZvcm1fZmllbGRzIH07XG4gICAgICB9XG4gICAgKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gIH1cblxuICAvKiBDT05ESVRJT05BTCBSRU5ERVIgTUVUSE9EICovXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYnV0dG9uO1xuICAgIGxldCBmb3JtO1xuICAgIGlmICh0aGlzLnN0YXRlLmZvcm1OdW0gPT09IDApIHtcbiAgICAgIGJ1dHRvbiA9IDxDaGVja291dEJ1dHRvbiBjbGlja0NoZWNrb3V0PXt0aGlzLmNsaWNrQ2hlY2tvdXR9IC8+XG4gICAgICBmb3JtID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZm9ybU51bSA9PT0gMSl7XG4gICAgICBidXR0b24gPSA8TmV4dEJ1dHRvbiBjbGlja05leHQ9e3RoaXMub25DbGlja05leHR9Lz5cbiAgICAgIGZvcm0gPSA8Rm9ybTEgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmZvcm1OdW0gPT09IDIpIHtcbiAgICAgIGJ1dHRvbiA9IDxOZXh0QnV0dG9uIGNsaWNrTmV4dD17dGhpcy5vbkNsaWNrTmV4dH0vPlxuICAgICAgZm9ybSA9IDxGb3JtMiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZm9ybU51bSA9PT0gMykge1xuICAgICAgYnV0dG9uID0gPFB1cmNoYXNlQnV0dG9uIGNsaWNrUHVyY2hhc2U9e3RoaXMub25DbGlja1B1cmNoYXNlfS8+XG4gICAgICBmb3JtID0gPEZvcm0zIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGRpdj57YnV0dG9ufTwvZGl2PlxuICAgICAgPGRpdj57Zm9ybX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuLyogQlVUVE9OUyAqL1xudmFyIENoZWNrb3V0QnV0dG9uID0gKHtjbGlja0NoZWNrb3V0fSkgPT4gKFxuICA8ZGl2PlxuICAgIDxidXR0b24gb25DbGljaz17Y2xpY2tDaGVja291dH0+Q0hFQ0tPVVQ8L2J1dHRvbj5cbiAgPC9kaXY+XG4pXG5cbnZhciBOZXh0QnV0dG9uID0gKHtjbGlja05leHR9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtjbGlja05leHR9Pk5FWFQ8L2J1dHRvbj5cbiAgPC9kaXY+XG4pXG5cbnZhciBQdXJjaGFzZUJ1dHRvbiA9ICh7Y2xpY2tQdXJjaGFzZX0pID0+IChcbiAgPGRpdj5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e2NsaWNrUHVyY2hhc2V9PlBVUkNIQVNFPC9idXR0b24+XG4gIDwvZGl2PlxuKVxuXG4vKiBGT1JNIEVMRU1FTlRTICovXG5jbGFzcyBGb3JtMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZShlKX0+PC9pbnB1dD48bGFiZWw+bmFtZTwvbGFiZWw+PGJyLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGUpfT48L2lucHV0PjxsYWJlbD5lbWFpbDwvbGFiZWw+PGJyLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGUpfT48L2lucHV0PjxsYWJlbD5wYXNzd29yZDwvbGFiZWw+PGJyLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEZvcm0yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIH1cbiAgICB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsaW5lMVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZShlKX0+PC9pbnB1dD48bGFiZWw+YWRkcmVzcyBsaW5lIDE8L2xhYmVsPjxici8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxpbmUyXCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGUpfT48L2lucHV0PjxsYWJlbD5hZGRyZXNzIGxpbmUgMjwvbGFiZWw+PGJyLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVJbnB1dENoYW5nZShlKX0+PC9pbnB1dD48bGFiZWw+Y2l0eTwvbGFiZWw+PGJyLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3RhdGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoZSl9PjwvaW5wdXQ+PGxhYmVsPnN0YXRlPC9sYWJlbD48YnIvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6aXBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoZSl9PjwvaW5wdXQ+PGxhYmVsPnppcCBjb2RlPC9sYWJlbD48YnIvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgRm9ybTMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgfVxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNjbnVtXCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGUpfT48L2lucHV0PjxsYWJlbD5jcmVkaXQgY2FyZCBudW1iZXI8L2xhYmVsPjxici8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImV4cGRhdGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoZSl9PjwvaW5wdXQ+PGxhYmVsPmV4cGlyYXRpb24gZGF0ZTwvbGFiZWw+PGJyLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3Z2XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlKGUpfT48L2lucHV0PjxsYWJlbD5jdnY8L2xhYmVsPjxici8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJpbGxpbmd6aXBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoZSl9PjwvaW5wdXQ+PGxhYmVsPmJpbGxpbmcgemlwIGNvZGU8L2xhYmVsPjxici8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBBcHA7XG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=