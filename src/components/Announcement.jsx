import styled from "styled-components";
import { mobile } from "../responsive";
import LocalPhoneOutlinedIcon from "@material-ui/icons/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";

const Container = styled.div`
	height: 60px;
	background-color: teal;
	color: white;
	font-weight: 500;
`;
const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: "10px 0px" })}
`;

const Logo = styled.div`
	flex: 1;
`;

const InfoContainer = styled.div`
	flex: 3;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Left = styled.div`
	flex: 1;
	text-align: left;
`;

const Center = styled.div`
	flex: 1;
	text-align: left;
`;
const Right = styled.div`
	flex: 1;
	text-align: left;
`;

const Title = styled.h1`
	font-size: 16px;
`;
const Info = styled.p`
	margin-top: 5px;
`;

const Announcement = () => {
	return (
		<Container>
			<Wrapper>
				<Logo>
					Ministère de l’Enseignement Supérieur et de la Recherche Scientifique
				</Logo>
				<InfoContainer>
					<LocalPhoneOutlinedIcon style={{ marginRight: 10, fontSize: 30 }} />
					<Left>
						<Title>Our Office</Title>
						<Info>Campus universitaire 8189 Jendouba du nord</Info>
					</Left>
					<LocationOnOutlinedIcon style={{ marginRight: 10, fontSize: 30 }} />
					<Center>
						<Title>Email Us</Title>
						<Info>isetj@isetj.rnu.tn</Info>
					</Center>
					<MailOutlinedIcon style={{ marginRight: 10, fontSize: 30 }} />
					<Right>
						<Title>Call Us</Title>
						<Info>+216 78 610 104</Info>
					</Right>
				</InfoContainer>
			</Wrapper>
		</Container>
	);
};

export default Announcement;
