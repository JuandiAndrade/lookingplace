import axios from "axios";

export function getAllUsers() {
  try {
    const result = axios.get("http://localhost:3000/client/getuser");
    return result;
  } catch (error) {
    console.log(error);
  }
}

export function updateClient(id, data) {
  try {
    const result = axios.patch(
      `http://localhost:3000/client/updateuser/${id}`,
      data
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}

export function allPropierties() {
  try {
    const result = axios.get("http://localhost:3000/properties");
    return result;
  } catch (error) {
    console.log(error);
  }
}

export function updateAvatar(id, data) {
  try {
    const result = axios.patch(
      `http://localhost:3000/client/updateavatar/${id}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}

export function getAllTenants() {
  try {
    const result = axios.get("http://localhost:3000/tenant/gettenant");
    return result;
  } catch (error) {
    console.log(error);
  }
}

export function getUserById(id) {
  try {
    const result = axios.get(`http://localhost:3000/client/getuser/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}
