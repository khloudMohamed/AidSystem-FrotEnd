import { Movement, Student } from "../Models/Movement";
import { variables } from "../variables";

export function refreshList(From:string,To:String):Promise<Movement[]> {
    return fetch(variables.GetList_Movement_API_URL)
    .then((response) => response.json())
    .then((responseData) => responseData);

}
export function SaveNewStudent(NewStudent:Student): Promise<boolean> {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"id": 0,
                              "name": NewStudent.name,
                              "gender": NewStudent.gender,
                              "birthday": NewStudent.birthday,
                              "nationalId": NewStudent.nationalId,
                              "nationality": NewStudent.nationality,
                              "emergencyContact": NewStudent.emergencyContact,

        })
    };
    console.log(requestOptions.method);
    return fetch(variables.Post_StudentDetails_API_URL, requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();
            if (!response.ok) {
                const error = (data && data.message) || response.status;
                return false;
            }
            console.log(data);
            return data;
        })
        .catch(error => {
            return false;
        }
    );
}