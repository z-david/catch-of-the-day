import React from "react";

class StorePicker extends React.Component {
  constructor(){
    super();
    // this.goToStore = this.goToStore.bind(this);
  }
  myInput = React.createRef();
  

  goToStore = event => {
    event.preventDefault();
    console.log(this.myInput);
    const storeName = this.myInput.current.value;
    this.props.history.push(`/Store/${storeName}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" 
        ref={this.myInput}
        required placeholder="Store Name" />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;