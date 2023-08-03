import { mastodon } from "masto";
import { StatusProps } from "../types/StatusProps";

export function timelineService(mastoClient: mastodon.rest.Client) {
  return {
    public: async function (): Promise<StatusProps[]> {
      const result = await mastoClient.v1.timelines.public.list({
        limit: 30,
      });

      const statusProps: StatusProps[] = result.map((status) => {
        const statusProps: StatusProps = {
          name: status.account.displayName,
          avatar: status.account.avatar,
          authorUrl: status.account.url,
          createdAt: status.createdAt,
          text: status.content,
        };

        return statusProps;
      });

      return statusProps;
    },
  };
}
