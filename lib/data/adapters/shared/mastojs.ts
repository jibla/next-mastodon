import { mastodon } from "masto";
import { Status } from "../../core/entities/Status";
import { Feed } from "../../core/entities/Feed";

export const transformMastojsStatus = (
  mastoStatus: mastodon.v1.Status,
): Status => {
  return {
    id: mastoStatus.id,
    name: mastoStatus.account.displayName,
    avatar: mastoStatus.account.avatar,
    authorUrl: mastoStatus.account.url,
    createdAt: mastoStatus.createdAt,
    text: mastoStatus.content,
  };
};

export const fetchFeedPage = async (
  paginator: mastodon.Paginator<
    mastodon.v1.Status[],
    mastodon.rest.v1.ListTimelineParams
  >,
): Promise<Feed> => {
  const results = await paginator.next();
  return {
    statuses: !results.done ? results.value.map(transformMastojsStatus) : [],
  };
};
