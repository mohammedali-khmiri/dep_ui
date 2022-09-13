import { loginFailure, loginStart, loginSuccess } from "./userRedux";

import { publicRequest } from "../requestMethods";
import {
	RegisterStudentFailure,
	RegisterStudentStart,
	RegisterStudentSuccess,
} from "./studentRedux";

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("/auth/login", user);
		dispatch(loginSuccess(res.data));
	} catch (err) {
		dispatch(loginFailure());
	}
};

//Register STUDENT
export const registerStudent = async (student, dispatch) => {
	dispatch(RegisterStudentStart());
	try {
		const res = await publicRequest.post("/auth/studentRegister", student);
		dispatch(RegisterStudentSuccess(res.data));
	} catch (err) {
		dispatch(RegisterStudentFailure());
	}
};
