/*class ChatApp {
  constructor() {
    console.log('Hello ES6!');
  }
}
export default ChatApp;*/
class MyComponent {
  handleChange = (e) => e.preventDefault()

  handleClick = (e) => e.preventDefault()

  handleKeyPress = (e) => {
    e.preventDefault()

    if (e.nativeEvent.keyCode === 13) {
      console.log('This is enter!')
    }
  }

  render() {
    return (
      <div>
        <MyInput
          onChange={ this.handleChange }
          onClick={ this.handleClick }
          onKeyPress={ this.handleKeyPress }
        />
        <MyAnotherInput
          onChange={ this.handleChange }
          onClick={ this.handleClick }
          onKeyPress={ this.handleKeyPress }
        />
      </div>
    )
  }
}
export default MyComponent;
