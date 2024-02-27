# List Conversations

## Overview

This use case allows users to get the list of their private messages sent to them within the Mastodon platform. This is the list of the conversations - not the messages themselves, which also happens to be the list of users who have sent the user a direct message.


## Actors

- End user: A user of the Mastodon platform who is intending to read the list of their conversatrion.

## Preconditions

- The data source is accessible.
- The user is logged in.
- The user has a valid session token.

## Postconditions

- The list of users is retrieved from the datasource, who have sent the user a direct message.
- No changes to the datasource are made.

## Input

Table of inputs:

| Parameter     | Type   | Description      | Required |
| --------------| ------ | -----------------| -------- |
|               |        |                  |          |

There are no inputs for this use case.

## Output

/lib/data/core/entities/DmListItem[]

## Error States

- The user is not logged in.
- The user does not have a valid session token.
- The data source is not accessible.

## Flow

1. The user clicks on the "Direct Messages" button in the navigation bar.
2. The user is presented with the list of users who have sent them a direct message.
3. The user can click on a user to view the conversation.

## Dependencies

- DmPort




