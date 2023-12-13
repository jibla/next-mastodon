import fetchMock from "jest-fetch-mock";
const { TextEncoder, TextDecoder } = require("text-encoding");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    usePathname: () => ({
      pathname: "",
    }),
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
      get: () => {},
    }),
  };
});

fetchMock.enableMocks();
