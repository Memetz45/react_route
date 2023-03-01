import {Route, Routes} from "react-router-dom"
import Education from "./Education";
import JobTraining from "./JobTraining";
import Profile from "./Profile";
import Project from "./Project";
import Skill from "./Skill";

const Router = () => {
    return(
        <Routes>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/skill" element={<Skill/>}/>
            <Route path="/jobTraining" element={<JobTraining/>}/>
            <Route path="/project" element={<Project/>}/>
        </Routes>
    )
}

export default Router;