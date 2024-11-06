import Groq from "groq-sdk";
import { OPEN_API_Key } from "./constants";

const groq = new Groq({ apiKey: OPEN_API_Key, dangerouslyAllowBrowser: true });

export default groq;
