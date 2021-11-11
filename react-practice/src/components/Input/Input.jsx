import React from 'react';

class Input extends React.Component {
  constructor() {
    super();
    this.state = {};
    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { type, name, label } = this.props;

    return (
      <>
        <label>
          {label}
          <input
            type={type || 'text'}
            name={name}
            onChange={(event) => this.handleChange(event)}
          />
        </label>
        <div>Value: {this.state.value}</div>
      </>
    );
  }
}

export default Input;
