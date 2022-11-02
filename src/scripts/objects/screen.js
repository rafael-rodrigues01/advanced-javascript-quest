const screen = {
  profileData: document.querySelector(".profile-data"),
  showData(newUserData) {
    this.profileData.innerHTML = `<div class="info">
                                        <img src="${
                                          newUserData.avatarUrl
                                        }" alt="image-profile">
                                        <div class="data" id="data">
                                            <h1>${
                                              newUserData.name ??
                                              "que pena usuário não tem um nome 😥"
                                            }</h1>
                                            <p>${
                                              newUserData.bio ??
                                              "que pena usuário não tem uma bio 😥"
                                            }</p>
                                            <p>👥Seguidores ${
                                              newUserData.followers ??
                                              "que pena usuário não tem seguidores 😓"
                                            }</p>
                                            <p>👥Seguindo ${
                                              newUserData.following ??
                                              "que pena usuário não tem seguidores 😓"
                                            }</p>
                                        </div>
                                      </div>`;
  },

  showNewEvents(newUserData) {
    let eventMessage = "";
    let eventName = "";
    newUserData.events.forEach((event) => {
      if (event.payload.commits !== undefined) {
        eventMessage += `<li>-${event.payload.commits[0].message}</li>`;
        eventName += `<li><p>${event.repo.name}</p></li>`;
      } else {
        return;
      }
    });

    this.profileData.innerHTML += ` <h1>Eventos</h1>
                                        <div class="events">
                                            <ul>${eventName}</ul>
                                            <ul>${eventMessage}</ul>     
                                        </div>`;
  },

  showRepositories(newUserData) {
    let numberOfRepositories = "";
    newUserData.repositories.forEach((repo) => {
      repo.repositories = `<li>
                                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                    <p>🍴${repo.forks}</p>
                                    <p>⭐${repo.stargazers_count}</p>
                                    <p>👀${repo.watchers}</p>
                                    <p>👨‍💻${repo.language ?? "Linguagem não definida"}</p>
                                </li>`;
      numberOfRepositories += repo.repositories;
    });

    if (newUserData.repositories.length > 0) {
      this.profileData.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${numberOfRepositories}</ul>
                                            </div>`;
    }
  },

  showError() {
    this.profileData.innerHTML += "<h1>Erro! usuário não encontrado 😥</h1>";
  },
};

export { screen };
