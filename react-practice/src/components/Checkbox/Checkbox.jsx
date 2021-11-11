import React from 'react';

class Checkbox extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange({ target: { checked, name } }) {
    this.setState({ [name]: checked });
  }

  render() {
    const { type, name, label } = this.props;

    return (
      <>
        <label>
          {label}
          <input
            type={type || 'checkbox'}
            name={name}
            onChange={(event) => this.handleChange(event)}
          />
        </label>
      </>
    );
  }
}

export default Checkbox;
