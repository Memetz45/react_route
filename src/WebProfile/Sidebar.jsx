import "./Style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="sidenav">
            <NavLink 
            className={({ isActive }) => (isActive ? "link-active" : "link")} 
            to="/profile">Profile</NavLink>
            <NavLink 
            className={({ isActive }) => (isActive ? "link-active" : "link")} 
            to="/education">Education</NavLink>
            <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")} 
            to="/skill">Skill</NavLink>
            <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")} 
            to="/jobTraining">Job Training</NavLink>
            <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")} 
            to="/project">Project</NavLink>
        </div>
    )
}

export default Sidebar;