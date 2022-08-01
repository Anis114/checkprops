

const Profile = ({data,handleName}) => {

return (
    <div className="aa">
   
   <image ></image>  
        <h1>{data.fullName}</h1>
        <h1>{data.bio}</h1>
        <h1>{data.profession}</h1>
    <button onClick={()=> handleName(data.fullName)}>ALERT NAME</button>
    
       
    </div>
)

}
export default Profile;