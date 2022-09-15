import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { useSelector } from "react-redux";

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
					<span className="topbarLink">Homepage</span>
					<span className="topbarLink">Contact</span>
				</div>
			</div>
			<div className="topbarCenter">
				<div className="searchbar">
					<Search className="searchIcon" />
					<input placeholder="Search ..." className="searchInput" />
				</div>
			</div>
		</div>
	);
}
