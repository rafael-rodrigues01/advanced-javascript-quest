import {baseUrl} from '../variables.js'
import {numberOfEvents} from '../variables.js'

async function getUser(user){
  const response = await fetch(`${baseUrl}/${user}`)
  return await response.json();
}

async function getEvents(user){
  const eventsResponse = await fetch(`${baseUrl}/${user}/events?per_page=${numberOfEvents}`);
  return await eventsResponse.json();
}

export { getUser, getEvents }