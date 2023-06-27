import React from 'react';
import './App.css';

class Secret extends React.Component<{},any> {
  constructor(props: any) {
    super(props);
    this.state = {
        password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event: any) {
      console.log(this.state.password);
    if (event.target.value = "open") {
        var bodyTag = document.getElementsByTagName("body")[0];
        bodyTag.setAttribute('style', 'overflow: auto;');
        var password = document.getElementsByClassName("password")[0];
        password.setAttribute('style', 'display: none;');
    }
  }

  render() {
    return (
        <div className="secret">
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
      
    );
  }
}

export default Secret;
