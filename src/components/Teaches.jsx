import styled from "styled-components";
import { popularTeachers } from "../data";
import Teacher from "./Teacher";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div`
	padding: 0 20px 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Teachers = ({ cat, filters }) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get("http://localhost:3000/api/teachers");
				console.log(res);
			} catch (err) {}
		};
		getProducts();
	}, [cat]);

	return (
		<Container>
			{popularTeachers.map((item) => (
				<Teacher item={item} key={item.id} />
			))}
		</Container>
	);
};

export default Teachers;
