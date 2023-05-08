import { useState } from "react";

type MenuProps = {
  // Propriedades do componente, se houver
};

const Menu = (props: MenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <button onClick={handleMenuClick}>Abrir Menu</button>
      {menuOpen && (
        <div>
          {<h1>Olá mundo</h1>}
          <button onClick={handleMenuClose}>Fechar Menu</button>
        </div>
      )}
    </div>
  );
};

export default Menu;