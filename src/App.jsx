import New from "./pages/New";
import Home from "./pages/Home";
import NewsList from "./pages/NewsList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TeacherList from "./pages/TeacherList";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Teacher from "./pages/Teacher";

const App = () => {
	const user = true;
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/news">
					<NewsList />
				</Route>
				<Route path="/new/:id">
					<New />
				</Route>
				<Route path="/teachers">
					<TeacherList />
				</Route>
				<Route path="/teacher/:id">
					<Teacher />
				</Route>
				<Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
				<Route path="/register">
					{user ? <Redirect to="/" /> : <Register />}
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
