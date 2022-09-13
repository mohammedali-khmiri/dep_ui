import styled from "styled-components";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://img.freepik.com/free-photo/education-concept-student-studying-brainstorming-campus-concept-close-up-students-discussing-their-subject-books-textbooks-selective-focus_1418-626.jpg?size=626&ext=jpg")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;
const Nav = styled.div`
	height: 60px;
	width: 90vw;
	z-index: 2;
	position: absolute;
	top: 20px;
	border-radius: 10px;
	background-color: rgba(255, 255, 255, 0.5);
	display: flex;
	align-items: center;
`;
const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background-color: white;
	${mobile({ width: "75%" })}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;

const Error = styled.span`
	color: red;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
	margin-bottom: 10px;
	&:disabled {
		color: green;
		cursor: not-allowed;
	}
`;

const Link = styled.a`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

const MenuItem = styled.div`
	font-weight: 600;
	font-size: 17px;
	cursor: pointer;
	margin-left: 25px;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const { isFetching, error } = useSelector((state) => state.user);

	const handleClick = (e) => {
		e.preventDefault();
		login(dispatch, { email, password });
	};
	return (
		<Container>
			<Nav>
				<MenuItem>Espace Etudiant</MenuItem>
				<MenuItem>Accueil</MenuItem>
				<MenuItem>Contact</MenuItem>
			</Nav>
			<Wrapper>
				<Title>Sign In</Title>
				<Form>
					<Input
						placeholder="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						placeholder="password"
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button onClick={handleClick} disabled={isFetching}>
						LOGIN
					</Button>
					{error && <Error>Something went wrong...</Error>}
					<Link to="/studentRegister">DO NOT YOU REMEMBER THE PASSWORD?</Link>
					<Link to="/studentRegister">CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
