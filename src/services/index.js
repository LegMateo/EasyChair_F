import axios from "axios"; // instanca axios-a za potrebe Fipugram backenda
import $router from "@/router";

let Service = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
});

/*
Service.interceptors.request.use((request) => {
  let token = Auth.getToken();
  if (!token) {
    $router.go();
    return;
  } else {
    request.headers["Authorization"] = "Bearer" + token;
  }

  return request;
});

Service.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status == 401 || error.response.status == 403) {
      Auth.logout();
      $router.go();
    }
  }
);*/

// naš objekt za sve pozive koji se dotiču `Post`ova
let Posts = {
  getAll(searchTerm) {
    return Service.get(`/posts?title=${searchTerm}`);
  },
};

let Payment = {
  async payment(chairs, date, gname, gsurname, roomnb, cashState, roomState) {
    let response = await Service.post("/payment", {
      // FAli jos ruta za admina!!!
      chairs: chairs,
      date: date,
      gname: gname,
      gsurname: gsurname,
      roomnb: roomnb,
      cash: cashState,
      room: roomState,
    });

    return true;
  },
};

let Auth = {
  async login(username, password) {
    let response = await Service.post("/login", {
      // FAli jos ruta za admina!!!
      username: username,
      password: password,
    });

    let user = response.data;

    localStorage.setItem("user", JSON.stringify(user));

    return true;
  },
  logout() {
    localStorage.removeItem("user");
  },

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },

  getID() {
    return JSON.parse(localStorage.getItem("id"));
  },

  getToken() {
    let user = Auth.getUser();
    if (user && user.token) {
      return user.token;
    } else {
      return false;
    }
  },

  authenticated() {
    let user = Auth.getUser();
    if (user && user.token) {
      return true;
    }
    return false;
  },

  state: {
    get toAdmin() {
      $router.push("/loginadmin");
    },
    get authenticated() {
      return Auth.authenticated();
    },
    get userName() {
      let user = Auth.getUser();
      //console.log(user.name);
      if (user) {
        return user.name;
      }
    },
    get userSurname() {
      let user = Auth.getUser();
      if (user) {
        return user.surname;
      }
    },
    get id() {
      let user = Auth.getID();

      if (user) {
        return user;
      }
    },
  },
};
export { Service, Posts, Auth, Payment }; // exportamo Service za ručne pozive ili Posts za
