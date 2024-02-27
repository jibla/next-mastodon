# Read Conversation

## Overview

This use case allows users to read the conversation between them and another user. This is the list of messages sent between the two users.

## Actors

- End user: A user of the Mastodon platform who is intending to read the conversation.

## Preconditions

- The data source is accessible.
- The user is logged in.
- The user has a valid session token.

## Postconditions

- The list of messages is retreived from the datasource, which is the conversation between the two users.
- No changes to the datasource are made.

## Input

Table of inputs:

| Parameter     | Type   | Description      | Required |
| --------------| ------ | -----------------| -------- |
| id            | string | Conversatrion ID.| Yes      |

## Output

- Array of Status entities (representing the messages in the conversation).

## Error States

- The user is not logged in.
- The user does not have a valid session token.
- The data source is not accessible.

## Flow

1. The user clicks on a particular conversation.
2. The user is presented with the list of messages in the conversation.

## Dependencies

- DmPort