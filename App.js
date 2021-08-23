import React, { useState } from "react"
import { Grid } from "@material-ui/core";
import { Button } from "react-bootstrap";
import * as ReactBootstrap from "react-bootstrap";


const App = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false)



  const loadUsers = async () => {
    setIsLoading(true)
    const response = await fetch("https://reqres.in/api/users");
    const jsonResponse = await
      response.json();
      setIsLoading(false)
    console.log('the users are', jsonResponse.data)
    setUsers(jsonResponse.data);
  };



  return (
    <div className="body">
      <div className="Navbar">
        <Grid container>
          <Grid>
            <img style={{ objectFit: "contain" }} src="Brand.jpg" height="80px" width="120px" alt="brand" />
            <Button variant="info" size="lg" style={{ float: "right", marginLeft: "1250px", marginTop: "15px",color:"black",fontWeight:"1000px" }} onClick={loadUsers}>Get Users</Button>
          </Grid>
        </Grid>
        {isLoading ? <ReactBootstrap.Spinner style={{ marginLeft: "750px", marginTop: "140px", fontSize: "20px" }} animation="border" /> :
          users.map((user) =>
            <div className="data">
              <ul>
                <li><img src={user.avatar} className="img" height="200vh" width="300vw" alt='img' /></li>
                <li style={{ paddingLeft: "20px", paddingTop: "5px", }} key={user.first_name}>Name : {user.first_name} {user.last_name}</li>
                <li style={{ paddingLeft: "20px", paddingTop: "5px", }} key={user.email}>Email : {user.email} </li>
              </ul>
            </div>
          )
        }
      </div>
    </div>

  );
}

export default App;