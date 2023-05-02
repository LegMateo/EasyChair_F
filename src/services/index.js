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

let Posts = {
  async getAll() {
    let response = await Service.get("/admin");

    let doc = response.data;

    doc = doc.map((doc) => {
      return {
        id: doc._id,
        chairs: doc.sumChairs,
        total: doc.total,
        days: doc.days,
        one: doc.one,
        three: doc.three,
        seven: doc.seven,
      };
    });

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

    ajD = response.data;

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
export { Service, Posts, Auth, Payment, ajD }; // exportamo Service za ručne pozive ili Posts za
