import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Topbar() {
	const userS = useSelector((state) => state.student.currentUser);
	const userT = useSelector((state) => state.teacher.currentUser);
	if (userS) {
		var currUser = userS;
	} else {
		var currUser = userT;
	}

	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<span className="logo">Mon Profile</span>
			</div>

			<div className="topbarRight">
				<div className="topbarLinks">
					<Link to="/" style={{ textDecoration: "none" }}>
						<span
							className="topbarLink"
							style={{
								fontSize: 16,
								color: "white",
							}}
						>
							Homepage
						</span>
					</Link>
					<span
						className="topbarLink"
						style={{
							fontSize: 16,
							color: "white",
						}}
					>
						Contact
					</span>
				</div>
			</div>
			<div className="topbarCenter">
				<div className="searchbar">
					<Search className="searchIcon" />
					<input placeholder="Search ..." className="searchInput" />
				</div>
				<span
					className="topbarLink"
					style={{
						fontSize: 20,
						color: "white",
						backgroundColor: "red",
						padding: " 5px 10px",
						borderRadius: 10,
					}}
				>
					log Out
				</span>
			</div>
		</div>
	);
}
