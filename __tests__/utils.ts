import { fireEvent, screen, waitFor } from "@testing-library/react";

export async function fillAddressAndClickContinue(address: string) {
  fireEvent.change(screen.getByLabelText("Mastodon Server Address"), {
    target: { value: address },
  });

  fireEvent.click(screen.getByText("Continue"));

  await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

  expect(fetch).toHaveBeenCalledWith(`/api/validate-server/${btoa(address)}`);
}

export function mockFetchResponse(
  response: { code?: string },
  statusCode: number,
) {
  fetchMock.mockResponseOnce(JSON.stringify(response), { status: statusCode });
}

test("true equals true", () => {
  expect(true).toBe(true);
});
