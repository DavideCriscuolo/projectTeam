import { useParams } from "react-router-dom"
import { plannedTrips } from '../data/trips'
import { participants } from '../data/trips'



export default function TripDetailsPage() {
    const { id } = useParams()
    const { nomeViaggio, destinazione, dataInizio, dataFine, img } = plannedTrips[id]
    const partecipanti = participants.filter((element) => {
        if (element.idViaggio == id) {
            return element


        }
    })


    return (
        <>
            <div className="container">

                <h1 className="py-3">Viaggio {id}</h1>
                <div className="py-4 row">
                    <div className="col-8">
                        <img className="img-fluid rounded" src={img} alt="" />
                    </div>
                    <div className="col-4">
                        <h1>{nomeViaggio}</h1>
                        <p>{destinazione}</p>
                        <div className="d-flex gap-3">
                            Da: <b>{dataInizio}</b>
                            Al: <b>{dataFine}</b>
                        </div>
                    </div>

                </div>


                <h2>Partecipanti</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Cognome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partecipanti.map((element, id) => {
                            return (


                                <tr key={id}>
                                    <th scope="row">{element.viaggiatore}</th>
                                    <td>{element.nome}</td>
                                    <td>{element.cognome}</td>

                                </tr>
                            )

                        })}

                    </tbody>
                </table>




            </div>



        </>
    )
}