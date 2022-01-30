import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const backend = axios.create({
  baseURL: publicRuntimeConfig.backend,
});

export default backend;
