import { useParams } from "react-router-dom";
//import array dei partecipanti
import { participants } from "../data/participants";

export default function ContactDetailsPage() {
  //useParams for dynamic params
  const { participantId } = useParams();
  //find del singolo contatto nell'array dei partecipanti al viaggio che si è selezionato sulla base dell'id del partecipante
  const contact = participants.find((p) => p.id === parseInt(participantId));

  //debugging
  if (!contact) {
    //fallback momentaneo in caso di id non presente in array
    return <h2>Partecipante non trovato</h2>;
  }

  return (
    //container base per i dettagli di contatto
    <div className="container p-5 d-flex align-items-center flex-column">
      <div className="pageTitle">
        <h2 className="p-3">Dettagli di Contatto</h2>
      </div>
      {/* lista con dati del partecipante*/}
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
