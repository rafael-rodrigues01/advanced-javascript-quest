import { getRepositories } from "./services/repositorios.js";
import { getUser } from "./services/user-and-events.js";
import { getEvents } from "./services/user-and-events.js";

import { newUserData } from "../scripts/objects/new-user-data.js";
import { screen } from "../scripts/objects/screen.js";

document.getElementById("btn-search").addEventListener("click", () => {
  const valueEnteredInInput = document.getElementById("input-search").value;
  if (validateEmptyinput(valueEnteredInInput)) return;
  showUserInformation(valueEnteredInInput);
});

function validateEmptyinput(valueEnteredInInput) {
  if (valueEnteredInInput === "") {
    alert("digite o nome do usuário do GitHub !");
    return true;
  }
}

document.getElementById("input-search").addEventListener("keyup", (e) => {
  let typedValue = e.target.value;
  let keyCode = e.keyCode || e.which;
  if (keyCode === 13) {
    if (validateEmptyinput(typedValue)) return;
    showUserInformation(typedValue);
  }
});

async function showUserInformation(user) {
  const getUserData = await getUser(user);
  if (getUserData.message === "Not Found") {
    screen.showError();
    return;
  }

  const events = await getEvents(user);

  const getRepositoriesGitHub = await getRepositories(user);
  newUserData.setData(getUserData);
  newUserData.setRepositories(getRepositoriesGitHub);
  newUserData.setEvents(events);

  screen.showData(newUserData);
  if (newUserData.events.length === 0) {
    alert("usuário não tem eventos para mostrar");
  } else {
    screen.showNewEvents(newUserData);
  }
  screen.showRepositories(newUserData);
}
