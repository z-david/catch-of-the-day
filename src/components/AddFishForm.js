import React from "react";

class AddFishForm extends React.Component {
	render() {
		return (
			<form class="fish-edit">
                <input type="text" placeholder="name" name="Name" />
                <input type="text" placeholder="price"  name="Price" />
                <select name="Status">
                </select>
                <textarea type="text" placeholder="desc" name="Desc" />
                <input type="text" placeholder="image"  name="Image" />
                <button type="submit">+ Add Fish</button> 
            </form>
		);
	}
}
	

export default AddFishForm