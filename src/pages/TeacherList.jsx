import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import News from "../components/News";

import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import Teachers from "../components/Teaches";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
	margin: 20px;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Filter = styled.div`
	margin: 20px;
	${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
	${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
	${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const TeacherList = () => {
	const location = useLocation();
	//category
	const cat = location.pathname.split("/")[2];
	const [filters, setFilters] = useState({});

	const handleFilters = (e) => {
		const value = e.target.value;
		setFilters({
			...filters,
			[e.target.name]: value,
		});
	};
	console.log(filters);
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Title>CHERCHER UN ENSEIGNANT</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filtrer votre recherche</FilterText>
					<Select name="specialty" onChange={handleFilters}>
						<Option disabled>Spécialité de l'enseignant</Option>
						<Option>Mobile</Option>
						<Option>Développement web</Option>
						<Option>Réseau</Option>
						<Option>Big data</Option>
						<Option>Soap</Option>
					</Select>
					<Select name="grade" onChange={handleFilters}>
						<Option disabled selected>
							Grade de l'enseignant
						</Option>
						<Option>Assistant</Option>
						<Option>Maitre assistant</Option>
						<Option>Professeur</Option>
						<Option>Chef departement</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Teachers cat={cat} filters={filters} />

			<Footer />
		</Container>
	);
};

export default TeacherList;
