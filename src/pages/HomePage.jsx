import ListaViaggi from "../components/ListaViaggi";
import { plannedTrips } from "../data/trips";

export default function HomePage() {
  return (
    <>
      <h1>Hello World</h1>
      <ListaViaggi viaggi={plannedTrips} />
    </>
  );
}
