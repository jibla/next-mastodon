# Use Case Title

## Overview

This use case allows users to reply to a direct messages conversation.

## Actors

- End user: A user of the Mastodon platform who is intending to reply to the conversation.

## Preconditions

- The data source is accessible.
- The user is logged in.
- The user has a valid session token.

## Postconditions

- List the postcodintions for the use case (for example, no changes to the database are made, object of specific type is returned etc.)

## Input

Table of inputs:

| Parameter     | Type   | Description          | Required |
| --------------| ------ | ---------------------| -------- |
| id            | string | The conversation ID. | Yes      |
| message       | string | The message text.    | Yes      |

## Output

- Status object of the sent reply message. See `/lib/data/core/entities/Status.ts`.

## Error States

- The user is not logged in.
- The user does not have a valid session token.
- The data source is not accessible.

## Flow

1. The user requests to send a new message to the conversation.
2. The system loads the conversation by its ID, with DirectMessagesPort, then get the last message of the conversatrion.
3. Then, the system sends the new message to the conversation using the StatusPort (technically, it is a reply to the last message in the conversation).

## Dependencies

- StatusesPort
- DirectMessagesPort




