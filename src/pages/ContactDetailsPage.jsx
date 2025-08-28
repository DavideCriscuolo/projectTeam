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

      <div className="card shadow w-100" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <h5 className="card-title mb-4">Informazioni personali</h5>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Nome:</strong> {contact.nome}
            </li>
            <li className="list-group-item">
              <strong>Cognome:</strong> {contact.cognome}
            </li>
            <li className="list-group-item">
              <strong>E-Mail:</strong> {contact.email}
            </li>
            <li className="list-group-item">
              <strong>Codice Fiscale:</strong> {contact.cf}
            </li>
            <li className="list-group-item">
              <strong>Residenza:</strong> {contact.residenza}
            </li>
            <li className="list-group-item">
              <strong>Contatti di Emergenza:</strong>{" "}
              {contact.contattiEmergenza}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
