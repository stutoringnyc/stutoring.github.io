import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Header, Menu, Segment } from "semantic-ui-react";
import Calendly from './Calendly'
import LogoIcon from './LogoIcon'


/* Home Page */

class App extends React.Component<{},any> {
  constructor(props: any) {
    super(props);
    this.state = {
        password: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    if (event.target.value == "open") {
      this.setState({password: event.target.value});
    }
  }

  render() {
    if (this.state.password == "") {
      var bodyTag = document.getElementsByTagName("body")[0];
      bodyTag.setAttribute('style', 'overflow: auto;');
      return (
        <div className="App" id="app">
          <div id="container" aria-hidden>
           
            <div id="color-one" />
            <div id="color-two" />
            <div id="color-three" />
            
          </div>
           <div className="secret">
            <form>
                <label>
                <input type="text" onChange={this.handleChange} />
                </label>
            </form>
        </div>
        </div>
      )
    } 
    
    return (
        <div className="App" id="app">
          <div id="container" aria-hidden>
            <div id="color-one" />
            <div id="color-two" />
            <div id="color-three" />
          </div>
          <div>
            <Segment vertical textAlign="center">
              <Container as="nav">
                <Header inverted as="h1">
                  <div className="svgBox">
                    {/* <LogoIcon/> */} S Tutoring
                  </div>
                
                </Header>
                <Menu borderless compact inverted>
                  <Menu.Item>How it Works</Menu.Item>
                  <Menu.Item active>Booking</Menu.Item>
                </Menu>
              </Container>
              <Calendly />

            </Segment>
          </div>
          
      

              {/* <Header inverted as="h1">
                Cover your page.
              </Header> */}
      

            {/* <Segment inverted vertical as="footer">
              Built by S Tutoring Team
            </Segment> */}
        </div>
    );
  }
}

export default App;