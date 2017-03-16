import Config from "./Config";
import Store from 'react-native-simple-store';

class Api {
  constructor() {
    // Création d'un clone de l'objet defaultUser
    this.user = Object.assign({}, this.defaultUser);
  }

  defaultUser = {
    _id: null,
    token: null,
    account: {
      username: null,
      description: null,
      rooms: [],
      favorites: [],
      photos: []
    }
  };

authenticate(key,{user}) {
  Store.save(key, {user})
    .then(() => {
      console.log('Saved');
    });
  this.setUser({user});
}

get(key) {
  Store.get(key)
  .then((user) => {
    console.log(user.username); // Charlemagne
  });
}

setUser(user) {
  this.user = user;
}

getUser() {
  return this.user;
}

  isAuthenticated() {
    if (this.user._id) {
      return true;
    }
    return false;
  }



  signUp(user, callback) {
    fetch(`${Config.host}/api/user/sign_up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(json => {
        if (!json.error) {
          this.authenticate(json);
        }
        callback(json);
      });
  }


  logIn(user = {}, callback) {

    fetch(`${Config.host}/api/user/log_in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        if (!json.error) {
          this.authenticate('user',json);
        }
        callback(json);
      });
  }

  /*

  logOut(callback) {
    Cookies.remove("user");
    this.setUser(Object.assign({}, this.defaultUser));
    callback();
  }


  // Authentification obligatoire
  getProfile(profile = {}, callback) {
    if (this.isAuthenticated()) {
      fetch(`${Config.host}/api/user/${profile.id}`, {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      })
        .then(res => res.json())
        .then(json => {
          callback(json);
        });
    } else {
      callback({
        error: "You must be authenticated"
      });
    }
  }

*/
  getHome(callback) {
    fetch(`${Config.host}/api/home`).then(res => res.json()).then(json => {
      callback(json);
    });
  }

  getRoom(roomId, callback) {
    fetch(`${Config.host}/api/room/${roomId}`)
      .then(res => res.json())
        .then((json) => {
          callback(json);
      });
  }

  getRooms(cityId, callback) {
    // console.log('test api')
    console.log("config:", Config.host)
    console.log("city:", cityId)
    // fetch(`${Config.host}/api/room/?city=${cityId}`)

    const url = Config.host + '/api/room?city=' + cityId ;
    // const url = 'http://localhost:3001/api/room?city=paris';

    console.log("url", url)

    fetch(url)
      .then(res => res.json())
        .then((json) => {
          callback(json);
      });
  }

}

export default new Api();
