import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';

function App() {
data.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession:PropTypes.string
   };
  const data= { 
  fullName:"Bruno",
  bio:"blabal",
  profession:"bla"
  }
  data.defaultProps = { fullName:"*****",
  bio:"****",
  profession:"*********"

  }
  const handleName=(fullName)=>{
   alert(`${fullName}`)
   
}
  return (
    <div className="App">
<Profile data={data} handleName={handleName}/>

    </div>
  );
}

export default App;
