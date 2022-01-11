import { useState, useEffect, ChangeEvent } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Movement, Student} from './Models/Movement';
import { Button } from 'react-bootstrap';
import ModalComponent from './ModalComponent';
import { refreshList } from './Services/HttpService';

export default function MovementComponent() {

    const [showModal, SetshowModal] = useState<boolean>(false);
    const [Movements, setMovements] = useState<Movement[]>([]);
    const [DateFrom, setDateFrom] = useState<string>("");
    const [DateTo, setDateTo] = useState<string>("");

    useEffect(()=>{async function fetchMyAPI(){ let result = await refreshList(DateFrom,DateTo);
        setMovements(result);
    }
    fetchMyAPI();
    },[]);

    const toggleModal = () => {
        console.log(DateFrom);
        SetshowModal(!showModal);
    }
    return (
        <div>
            <button
                onClick={toggleModal} >
                Opem Modal
            </button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>
                            MovementId
                        </th>
                        <th>
                            StudentName
                        </th>
                        <th>
                            birthday
                        </th>
                        <th>
                            nationalId
                        </th> 
                        <th>
                            gender
                        </th> 
                        <th>
                            nationality
                        </th> 
                        <th>
                            emergencyContact
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Movements.map(movement =>
                        <tr key={movement.MovementId}>
                            <td>{movement.MovementId}</td>
                            <td>{movement.name}</td>
                            <td>{movement.birthday}</td>
                            <td>{movement.nationalId}</td>
                            <td>{movement.gender}</td>
                            <td>{movement.nationality}</td>
                            <td>{movement.emergencyContact}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <ModalComponent
                toggle={toggleModal}
                isOpen={showModal} from={DateFrom} to={DateTo}
                ChangeDateFrom={function (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
                    setDateFrom(value.target.value.toString());
                }}
                ChangeDateTo={function (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
                    setDateTo(value.target.value.toString());
                }} />
        </div>
    );
}