import { useLoaderData } from "remix";
import { Link } from "react-router-dom";
import Search from "../components/search";

import stylesUrl from "../styles/index.css";

export function meta() {
  return { title: "Remix Starter", description: "Welcome to remix!" };
}

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export function loader() {
  return { message: "this is awesome 😎" };
}

export default function Index() {
  let data = useLoaderData();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <Search />
    </div>
  );
}
