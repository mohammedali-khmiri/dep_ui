import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGJjM2YyNTQwYjgzNjhhOTAxMzg3MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTk0MDU5MiwiZXhwIjoxNjYyMTk5NzkyfQ.ujFExx5ObVYzR6afyPlAkc8CCwrpMYhVUgbuo8Vj588";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: TOKEN },
});
