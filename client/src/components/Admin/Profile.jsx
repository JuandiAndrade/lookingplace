import React, { useEffect } from "react";
import useAuth from "../Acceso/hooks/useAuth.jsx";
import { getUserById } from "./Api.js";

export const Profile = () => {
  const [users, setUsers] = React.useState([]);
  const [about, setAbout] = React.useState([]);
  const { auth, setAuth } = useAuth();

  if (auth.role === "Client") {
    useEffect(() => {
      const fetchUsers = async () => {
        //const storedAuth = JSON.parse(localStorage.getItem("auth") || "{}");
        const idClient = auth.idClient;

        const users = await getUserById(idClient);
        const about = users.data.Aboutmes;

        setAbout(about);
        setUsers(users.data);
      };
      fetchUsers();
    }, []);
  } else if (auth.role === "Tenant") {
    useEffect(() => {
      const fetchUsers = async () => {
        //const storedAuth = JSON.parse(localStorage.getItem("auth") || "{}");
        const idTenant = auth.idTenant;

        const users = await getUserById(idTenant);
        const about = users.data.Aboutmes;

        setAbout(about);
        setUsers(users.data);
      };
      fetchUsers();
    }, []);
  }

  const hobbie = about[0]?.hobbies;
  const aboutMe = about[0];

  console.log(aboutMe);
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-header-title">
          <img className="image-profile" src={users.avatar} alt="profile" />
          <span className="content-profile-name">
            <h1 className="name-profile">{users.fullName} </h1>
          </span>
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-content-title-description">
          <h1 className="title-profile">Descripción</h1>
          <p className="description-profile">
            {aboutMe ? aboutMe.description : "No hay descripción"}
          </p>
          <div className="hobbies-content">
            <h1 className="title-profile">Hobbies</h1>
            <div className="hobbies-profile">
              {hobbie ? (
                hobbie?.map((hobbie, index) => {
                  return (
                    <div key={index} className="hobby-profile">
                      <p className="text-hobbie">{hobbie}</p>
                    </div>
                  );
                })
              ) : (
                <p className="hobby-profile">No hay hobbies</p>
              )}
            </div>
          </div>
          <div className="profile-detail">
            <div className="detail-profile">
              <h2 className="detail-profile-title">Pais</h2>
              <p className="detail-profile-text">
                {aboutMe ? aboutMe.from : "No hay pais"}
              </p>
            </div>
            <div className="detail-profile">
              <h2 className="detail-profile-title">Ciudad</h2>
              <p className="detail-profile-text">Medellin</p>
            </div>
            <div className="detail-profile">
              <h2 className="detail-profile-title">Telefono</h2>
              <p className="detail-profile-text">
                {aboutMe ? users.phone : "No hay telefono"}
              </p>
            </div>
            <div className="detail-profile">
              <h2 className="detail-profile-title">Correo</h2>
              <p className="detail-profile-text">felipeduque557@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
