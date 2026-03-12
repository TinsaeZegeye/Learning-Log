import { useLoaderData } from "react-router";

import MenuItem from "./MenuItem";
import Loader from "../../ui/Loader";

export default function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
