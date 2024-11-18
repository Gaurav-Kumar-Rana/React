import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    name: "Gaurav Rana",
    address: "MFP",
    skill: ["React"],
  },
  reducers: {
    editeSkill: (state, action) => {
      state.skill.push(action.payload);
    },
    clearSkill: (state, action) => {
      state.skill.length = 0;
    },
  },
});

export const { editeSkill, clearSkill } = userSlice.actions;

export default userSlice.reducer;
