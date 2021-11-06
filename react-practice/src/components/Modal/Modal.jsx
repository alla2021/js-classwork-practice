import React, { Component } from 'react';
import './modal.scss';

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  handleClick(event) {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  }

  render() {
    const title = 'This is modal';
    const { content } = this.props;

    return (
      <>
        <div className={`modal ${this.state.open ? 'open' : ''}`}>
          <h2>Modal Title</h2>
          <div>
            {title}
            <br />
            {content}
          </div>
        </div>
        <button onClick={(event) => this.handleClick(event)}>Button</button>
      </>
    );
  }
}

export default Modal;
