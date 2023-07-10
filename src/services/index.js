import axios from "axios";
import $router from "@/router";

let Service = axios.create({
  baseURL: "https://backend-0epy.onrender.com",
  timeout: 1000,
});

Service.interceptors.request.use((request) => {
  try {
    request.headers["Authorization"] = "Bearer " + Auth.getToken();
  } catch (e) {
    console.error(e);
  }
  return request;
});

Service.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status == 401 || error.response.status == 403) {
      Auth.logout();
      //$router.go();
    }
  }
);
let Disable = {
  async disableSurf() {
    let response = await Service.get("/surfmaniabeach");

    let user = response.data;

    //console.log(user.disabledParasols);

    return user.disabledParasols.SurfmaniaBeach;
  },
  async disableMaro() {
    let response = await Service.get("/maro");

    let user = response.data;

    //console.log(user.disabledParasols);
    //console.log(Object.values(user.disabledParasols)[1]);
    //console.log(user.disabledParasols.Reverol);
    return user.disabledParasols.MaroFamilyBeach;
  },
  async disableReverol() {
    let response = await Service.get("/reverolbeach");

    let user = response.data;

    // console.log(user.disabledParasols.Reverol.parasol);

    return user.disabledParasols.Reverol;
  },
  async disableSunset() {
    let response = await Service.get("/sunsetbeach");

    let user = response.data;

    //console.log(user.disabledParasols);

    return user.disabledParasols.SunsetBeach;
  },
  async disableMarina() {
    let response = await Service.get("/marinabeach");

    let user = response.data;

    //console.log(user.disabledParasols);

    return user.disabledParasols.MarinaBeach;
  },
};
let Posts = {
  async deleteOne(id) {
    let response = await Service.delete(`/admin/${id}`);
    return true;
  },
  async getChange(id, new_password, new_username, old_username) {
    await Service.patch("/admin", {
      id: id,
      new_password: new_password,
      new_username: new_username,
      old_username: old_username,
    });

    return true;
  },
  async getAll() {
    let response = await Service.get("/admin");

    let doc = response.data;

    doc = doc.map((doc) => {
      return {
        _id: doc._id,
        chairs: doc.sumChairs,
        total: doc.total,
        days: doc.days,
        one: doc.one,
        three: doc.three,
        seven: doc.seven,
        id: doc.id,
      };
    });

    return doc;
  },

  async getUserData() {
    let response = await Service.get("/");

    //let response = { id: ["q", "2"], id: "dd" };
    let doc = response.data[0];
    //console.log(doc);

    return doc;
  },
};

let ajD;

let Payment = {
  async payment(
    beach,
    cashier,
    username,
    chairs,
    date,
    parasol,
    gname,
    gsurname,
    roomnb,
    cashState
  ) {
    let response = await Service.post("/payment", {
      // FAli jos ruta za admina!!!
      beach: beach,
      cashier: cashier,
      username: username,
      chairs: chairs,
      date: date,
      parasol: parasol,
      gname: gname,
      gsurname: gsurname,
      roomnb: roomnb,
      cash: cashState,
    });

    ajD = response.data.id;

    return true;
  },

  async getOne(id) {
    let response = await Service.get(`/invoice/${id}`);

    let doc = response.data;

    return {
      beach: doc.beach,
      cashier: doc.cashier,
      chairs: doc.chairs,
      parasol: doc.parasol,
      days: doc.days,
      one: doc.one,
      three: doc.three,
      seven: doc.seven,
      extraChairs: doc.extraChairs,
      gname: doc.gname,
      gsurname: doc.gsurname,
      roomnb: doc.roomnb,
      dateBegin: doc.dateBegin,
      dateEnd: doc.dateEnd,
      time: doc.time,
      cash: doc.cash,
      total: doc.total,
    };
  },
};

let Auth = {
  async register(name, surname, username, password) {
    let response = await Service.post("/admin", {
      // FAli jos ruta za admina!!!
      name: name,
      surname: surname,
      username: username,
      password: password,
    });

    return true;
  },

  async loginAdmin(username, password) {
    let response = await Service.post("/loginadmin", {
      username: username,
      password: password,
    });
    let user = response.data;

    localStorage.setItem("user", JSON.stringify(user));

    return true;
  },

  async login(username, password) {
    let response = await Service.post("/login", {
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

  getNameId() {
    return JSON.parse(localStorage.getItem("id"));
  },

  getId() {
    let user = Auth.getNameId();
    if (user && user.id) {
      return user.id;
    } else {
      return false;
    }
  },

  getName() {
    let user = Auth.getNameId();
    if (user && user.name) {
      return user.name;
    } else {
      return false;
    }
  },
  getToken() {
    let user = Auth.getUser();
    if (user && user.token) {
      return user.token;
    } else return false;
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
    get userUsername() {
      let user = Auth.getUser();

      if (user) {
        return user.username;
      }
    },
    get userName() {
      let user = Auth.getUser();

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

    get isAdmin() {
      let user = Auth.getUser();
      if (user && user.username === "admin") {
        return user.username;
      }
    },
    get id() {
      let user = Auth.getId();

      if (user) {
        return user;
      }
    },

    get name() {
      let user = Auth.getName();

      if (user) {
        return user;
      }
    },
  },
};
export { Service, Posts, Auth, Payment, ajD, Disable }; // exportamo Service za ručne pozive ili Posts za
