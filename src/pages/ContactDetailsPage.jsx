import { useParams } from "react-router-dom";
import { participants } from "../data/participants";

export default function ContactDetailsPage() {
  const { participantId } = useParams();
  const contact = participants.find((p) => p.id === parseInt(participantId));

  if (!contact) {
    return <h2>Partecipante non trovato</h2>;
  }

  return (
    <div className="container p-5 d-flex align-items-center flex-column">
      <div className="pageTitle">
        <h2 className="p-3">Dettagli di Contatto</h2>
      </div>
      <ul className="list-unstyled d-flex flex-column gap-3 ">
        <li>
          <strong>Nome:</strong> {contact.nome}
        </li>
        <li>
          <strong>Cognome:</strong> {contact.cognome}
        </li>
        <li>
          <strong>Codice Fiscale:</strong> {contact.cf}
        </li>
        <li>
          <strong>Residenza:</strong> {contact.residenza}
        </li>
        <li>
          <strong>Contatti di Emergenza:</strong> {contact.contattiEmergenza}
        </li>
      </ul>
    </div>
  );
}
