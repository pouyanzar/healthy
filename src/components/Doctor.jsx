import {useLocation} from 'react-router-dom';
function Doctor() {
  const location = useLocation();
  const {name, img, specialty}= location.state.doctor;
  console.log(location.state);
  return(
      <div className="profile">
        <div><img className="profile-img mt-5 ms-5 col-1" src={img} alt="" /></div>
        <div className="mt-5 profile-title">
        <div>name {name}</div>
        <div>specialty {specialty}</div>
        <div>Degree</div>
        <div>Bio</div>
        <div>Languages</div>
        <div>Contact</div>    
        </div>
      </div>      
  )
}

export default Doctor;