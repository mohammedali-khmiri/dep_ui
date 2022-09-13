import { Link } from "react-router-dom";
import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;
	${mobile({ padding: "0px", flexDirection: "column" })}
`;
const ItemCategory = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	margin: 2px;
	height: 30vh;
`;
const IngContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Image = styled.img`
	width: 100px;
	margin: auto;

	${mobile({ height: "20vh" })}
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	font-family: "Roboto Slab", serif;
	font-weight: 400;
	line-height: 1.42857143;
	color: #333333;
	margin-bottom: 20px;
	text-decoration: none;
`;

const Button = styled.button`
	border: none;
	padding: 10px;
	color: #e8bc1b !important;
	cursor: pointer;
	font-size: 15px;
	font-weight: 600;
`;

const Categories = () => {
	return (
		<Container>
			<ItemCategory>
				<Link to="/studentLogin">
					<IngContainer>
						<Image src="https://cdn.icon-icons.com/icons2/1670/PNG/512/10207manstudentlightskintone_110568.png" />
					</IngContainer>
					<Info>
						<Title>Espace Etudiant</Title>
						<Button>Accéder</Button>
					</Info>
				</Link>
			</ItemCategory>
			<ItemCategory>
				<Link>
					<IngContainer>
						<Image src="https://cdn.icon-icons.com/icons2/3600/PNG/512/training_doctor_hospital_heh_gym_icon_226271.png" />
					</IngContainer>
					<Info>
						<Title>Espace Enseignant</Title>
						<Button>Accéder</Button>
					</Info>
				</Link>
			</ItemCategory>
			<ItemCategory>
				<Link>
					<IngContainer>
						<Image src="https://cdn.icon-icons.com/icons2/3600/PNG/128/university_library_reading_student_book_learning_school_icon_226270.png" />
					</IngContainer>
					<Info>
						<Title>Espace Admin</Title>
						<Button>Accéder</Button>
					</Info>
				</Link>
			</ItemCategory>
		</Container>
	);
};

export default Categories;
