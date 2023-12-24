# Fetch Feeds

## Overview

This use case is responsible for fetching different feeds. After initially getting the feed, user is also able to request the next page of the feed. The feed is collection of the status items and is always returned as the portion of the whole feed.

## Actors

- End user: Wants to browse the feeds of different types.

## Preconditions

- The data source is accessible

## Postconditions

- The feed object is retreived based on the feed type.
- No changes to the datasource are made.

## Input

| Parameter     | Type   | Description                                    | Required |
| --------------| ------ | -----------------------------------------------| -------- |
| type          | enum   | Type of feed. *check below                     | Yes      |
| limit         | number | The number of items.                           | No       |
| startFrom     | string | Id of the status to start with.                | No       |
| userId        | string | Id of the user to load feed of.                | No       |



* type can be one of the following values:
- `home` - The home feed of the user (the feed of the users that the user follows).
- `federated`- The federated feed of the user.
- `local` - The local feed from the server.
- `user` - The feed of the user.


## Output

- feed: Feed Object

## Error States

- The data source is not accessible.
- The Feed of type X does not exist.
- Requester does not have permission to read the feed of type X.

## Flow

1. The user requests the feed based on feed type.
2. The system fetches the feed from the data source.
3. The system returns the feed to the user.

## Dependencies

- FeedPort - The data source to fetch the feed from.




