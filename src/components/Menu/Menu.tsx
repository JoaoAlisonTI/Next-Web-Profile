import { useState } from "react";
import styles from './Menu.module.css'

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
    <div className={styles.menu}>
      <button>Abrir Menu</button>
      {menuOpen && (
        <div className={styles.menuContent}>
          <h1>Olá mundo</h1>
          <button onClick={handleMenuClose}>Fechar Menu</button>
        </div>
      )}
    </div>
  );
};

export default Menu;