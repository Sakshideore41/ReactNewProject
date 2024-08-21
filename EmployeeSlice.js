import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const
fetchEmployees=createAsyncThunk('employees/fetchEmployees',async()=>{
const response=await axios.get(`http://localhost:3001/employees`);
return response.data;
});
const EmployeeSlice=createSlice({
name:'employees',
initialState:{ list:[] ,status:null},
extraReducers: (builder)=>{
builder
.addCase(fetchEmployees.pending,(state)=>{state.status="loading"})
.addCase(fetchEmployees.fulfilled,(state,action)=>{
state.list=action.payload;
state.status="success"
})
.addCase(fetchEmployees.rejected, (state)=>{
state.status='failed'
})
}
});
export default EmployeeSlice.reducer;