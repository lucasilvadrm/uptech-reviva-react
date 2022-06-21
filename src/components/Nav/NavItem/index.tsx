import { Link } from "react-router-dom";
import { MenuItem } from "./styles";

interface INavProps {
  children: React.ReactNode,
  to: string
}

export const NavItem = ({children, to}: INavProps) => {
  return (
    <MenuItem>
      <Link to={to}>{children}</Link>
    </MenuItem>
  )
}