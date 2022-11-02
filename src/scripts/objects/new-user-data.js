const newUserData = {
  avatarUrl: "",
  name: "",
  bio: "",
  userName: "",
  followers: 0,
  following: 0,
  repositories: [],
  events: [],
  setData(userData) {
    this.avatarUrl = userData.avatar_url;
    this.name = userData.name;
    this.bio = userData.bio;
    this.userName = userData.login;
    this.followers = userData.followers;
    this.following = userData.following;
  },
  setRepositories(repositoriesData) {
    this.repositories = repositoriesData;
  },
  setEvents(events) {
    this.events = events;
  },
};

export { newUserData };
