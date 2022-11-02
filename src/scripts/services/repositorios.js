import { baseUrl, numberOfRepositories } from '../variables.js'


async function getRepositories(user){
  const response = await fetch(`${baseUrl}/${user}/repos?per_page=${numberOfRepositories}`)
  return await response.json();
}

export { getRepositories }