// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1.this will create the use of state, so it'll allow it to be called, in a child component as prop
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2.this will set the userInput to whatever the arugment passed through to be that and grab the value as the new state.
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3. Destructuring the userInput from state
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4.this allows the user to see things rendering as a key is pressed. */}
          onChange={ this.robot }
          {/* 5. this is what the user types */}
          value={ userInput }
        />

        <div>
          {/* 6.this is calling a child component */}
          <GoodRobot
            {/* 7.this allows the child component to call userInput as a prop. */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8.this div is needed to keep everthing nested, and nesting it, is just important #facts.
      <div>
        <h3>Good Robot</h3>
        {/* 9.this is printing a header 4 text and this calls the userInput from the parent */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. this allows GoodRobot to be moved out of this file and imported to another file.
export default GoodRobot
