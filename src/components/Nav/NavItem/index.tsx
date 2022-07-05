import Link from "next/link";
import * as SC from "./styles";

interface INavProps {
  children: React.ReactNode;
  to: string;
}

export const NavItem = ({ children, to }: INavProps) => {
  return (
    <SC.MenuItem>
      <Link href={to}>{children}</Link>
    </SC.MenuItem>
  );
};
