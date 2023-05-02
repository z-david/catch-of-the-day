import React from "react";
import {formatPrice} from '../helpers';

class Fish extends React.Component {
    handleAddToOrderClick = (index) => {
        this.props.addToOrder(index);
    }

	render() {
        const {image, name, price, desc, status} = this.props.details;
        const isAvailable = status === "available";

		return (
            <li className="menu-fish">
                <img src={image} alt={image} />
                <h3 className="fish-name">{name}
                    <span>{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button
                    disabled={!isAvailable}
                    onClick={() => this.props.addToOrder(this.props.index)}
                    >
                    {isAvailable ? "Add To Order" : "Sold Out!"}
                </button>

        
            </li>
		);
	}
}
	

export default Fish