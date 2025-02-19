import { NavLink } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="buttons">
      <NavLink to="/">
        <button className="text-white">Harita</button>
      </NavLink>

      <NavLink to="/list">
        <button className="text-white">Liste</button>
      </NavLink>
    </div>
  );
};

export default Buttons;
