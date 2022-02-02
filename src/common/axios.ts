import axios from "axios";

const backend = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export default backend;
