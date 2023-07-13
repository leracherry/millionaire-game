import "./MobileMenu.style.scss";
import { ReactComponent as MenuIcon } from "../../../assets/icons/menu.svg";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";
import {
  WinAmountList,
  WinAmountListProps,
} from "../../organisms/WinAmountList/WinAmountList";
import { toggleMenu } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { FC } from "react";

const MobileMenu: FC<WinAmountListProps> = ({ data }) => {
  const isMenuVisible = useSelector((state: any) => state.menu.isMenuVisible);
  const dispatch = useDispatch();

  const showMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="mobile-menu">
      <button className="menu-toggle" onClick={showMenu}>
        {isMenuVisible ? (
          <CloseIcon className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </button>
      {isMenuVisible ? <WinAmountList data={data} /> : null}{" "}
    </div>
  );
};

export default MobileMenu;
