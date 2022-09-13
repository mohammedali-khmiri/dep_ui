import styled from "styled-components";
import { mobile } from "../responsive";
import { registerStudent } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://img.freepik.com/free-photo/multinational-graduates-male-female-celebrating-graduation-university-campus-removing-their-graduation-hats-smiling-camera_496169-1297.jpg?size=626&ext=jpg")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 10px;
	${mobile({ width: "75%" })}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
`;

const Select = styled.select`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
	${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const Register = () => {
	const [inputs, setInputs] = useState({});
	const dispatch = useDispatch();
	const history = useHistory();

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const handleClick = (e) => {
		e.preventDefault();

		const student = { ...inputs };
		registerStudent(student, dispatch);
		history.push("/studentLogin");
	};

	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input
						name="firstName"
						type="text"
						placeholder="Nom Etudiant..."
						onChange={handleChange}
					/>
					<Input
						name="lastName"
						type="text"
						placeholder="Prenom Etudiant..."
						onChange={handleChange}
					/>
					<Input
						name="nCin"
						type="number"
						placeholder="N° cin..."
						onChange={handleChange}
					/>

					<Input
						name="nInscription"
						type="number"
						placeholder="N° inscription..."
						onChange={handleChange}
					/>
					<Input
						name="phone"
						type="number"
						placeholder="telephone"
						onChange={handleChange}
					/>
					<Input
						name="address"
						type="text"
						placeholder="address"
						onChange={handleChange}
					/>
					<Input
						name="email"
						type="email"
						placeholder="email"
						onChange={handleChange}
					/>
					<Select name="class" onChange={handleChange}>
						<Option value="dsi">DSI</Option>
						<Option value="rsi">RSI</Option>
						<Option value="sem">SEM</Option>
					</Select>
					<Input
						name="password"
						placeholder="password"
						onChange={handleChange}
					/>
					<Input placeholder="confirm password" onChange={handleChange} />
					<Agreement>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</Agreement>
					<Button onClick={handleClick}>CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
