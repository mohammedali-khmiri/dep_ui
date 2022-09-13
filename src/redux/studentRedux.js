import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
	name: "student",
	initialState: {
		students: [],
		isFetching: false,
		error: false,
	},
	reducers: {
		//Register Student
		RegisterStudentStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		RegisterStudentSuccess: (state, action) => {
			state.isFetching = false;
			state.students.push(action.payload);
		},
		RegisterStudentFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const {
	RegisterStudentStart,
	RegisterStudentSuccess,
	RegisterStudentFailure,
} = studentSlice.actions;

export default studentSlice.reducer;
