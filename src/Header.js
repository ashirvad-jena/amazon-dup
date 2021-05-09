import appLogo from "./images/appLogo.png";
import { MdLocationOn, MdSearch } from "react-icons/md";
import "./Header.css";

function Header() {
	return (
		<div className="header">
			<img
				className="header__logo"
				src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
				alt="logo"
			/>
			<div className="header__address">
				<MdLocationOn class="header__location" />
				<div className="header__option header__no-margin">
					<span className="header__line1">Hello</span>
					<span className="header__line1">Select your Address</span>
				</div>
			</div>

			<div className="header__search">
				<input
					className="header__searchBar"
					type="text"
					placeholder="Search..."
				></input>
				<MdSearch className="header__search-btn" />
			</div>

			<div className="header__info">
				<div className="header__option">
					<span className="header__line1">Hello SignIn</span>
					<span className="header__line2">Accounts & Lists</span>
				</div>
				<div className="header__option">
					<span className="header__line1">Returns</span>
					<span className="header__line2">& Orders</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
