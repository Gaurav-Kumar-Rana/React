import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editeSkill, clearSkill } from "../utils/userSlice";

const Skill = () => {
  const [userSkill, adduserSkill] = useState("");
  const skillsFromStore = useSelector((state) => state.user.skill);
  const dispatch = useDispatch();
  const handleChangeSkill = (value) => {
    adduserSkill(value);
  };
  const handleSkillClear = () => {
    dispatch(clearSkill());
  };
  return (
    <div className="text-center m-10 p-10">
      <h1>Your Skills:</h1>
      <input
        type="text"
        className="border-2 border-solid border-gray p-5 cursor-pointer hover:border-black"
        placeholder="Enter your skill"
        onChange={(e) => {
          handleChangeSkill(e.target.value);
        }}
        value={userSkill}
      />
      <input
        className="border-2 border-solid border-gray p-5 cursor-pointer hover:border-black hover:bg-amber-300"
        type="button"
        name="add"
        value="Add"
        onClick={() => {
          dispatch(editeSkill(userSkill));
        }}
      />
      <h1>
        Added Skills{" "}
        <button
          className="border-2 border-solid border-gray p-5 cursor-pointer hover:border-black hover:bg-amber-300"
          type="button"
          onClick={handleSkillClear}
        >
          Clear all skills
        </button>
      </h1>
      <div className="">
        {skillsFromStore.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </div>
    </div>
  );
};
export default Skill;
