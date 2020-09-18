import { useState } from "react";
import Filter from "../Filter";

const MobileMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <button
        className="menu-button"
        onClick={() => setShowMenu(!showMenu)}
        dangerouslySetInnerHTML={{ __html: "&equiv;" }}
      />
      {showMenu && (
        <div className="menu">
          <Filter />
        </div>
      )}
    </>
  );
};

export default MobileMenu;
