import React from "react";

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();
    
    createFish = (event) => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: this.priceRef.current.value,
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        }
        console.log(fish);
    }
	render() { 
		return (
			<form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" placeholder="name" name="Name" ref={this.nameRef} />
                <input type="text" placeholder="price"  name="Price" ref={this.priceRef} />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea type="text" placeholder="desc" name="Desc" ref={this.descRef}/>
                <input type="text" placeholder="image"  name="Image" ref={this.imageRef}/>
                <button type="submit">+ Add Fish</button> 
            </form>
		);
	}
}

export default AddFishForm