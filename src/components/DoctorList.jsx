import { Link } from "react-router-dom";

function DoctorList(props) {
  const {doctors} = props;
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Specialty</th>
        </tr>
      </thead>
      <tbody>
        {doctors.map((doctor, key) => {
          return(
            <Link key={key} to={`/doctors/${key}`} state={{doctor}}>
              <tr>
                <td><img src={doctor.img} alt="doctor-pic" /></td>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
              </tr>
            </Link>
          );
          })}
      </tbody>
    </table>
  ); 
}

export default DoctorList;