import { writable, readable } from "svelte/store";

const BASE_URL = readable("http://localhost:8080");
const myUsername = writable();

export {BASE_URL, myUsername}