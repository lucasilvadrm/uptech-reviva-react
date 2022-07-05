import { itemsNav } from "components/Nav/NavItem/itemsNav";
import Link from "next/link";
import { Title } from "../styles";
import * as SC from "./styles";

export default function MenuItem() {
  return (
    <SC.MenuItens>
      <Title>Menu</Title>
      <ul>
        {itemsNav.map((itemNav, index) => (
          <SC.MenuItem key={index}>
            <Link href={itemNav.to}>{itemNav.name}</Link>
          </SC.MenuItem>
        ))}
      </ul>
    </SC.MenuItens>
  );
}
