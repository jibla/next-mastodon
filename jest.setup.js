import fetchMock from "jest-fetch-mock";
const { TextEncoder, TextDecoder } = require("text-encoding");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

fetchMock.enableMocks();
