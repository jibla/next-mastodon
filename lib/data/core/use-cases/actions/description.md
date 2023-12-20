# Actions

## Overview

This use case is responsible for performing various actions for authenticated users. Actions can include reacting to a post (liking), bookmarking a post, sharing it and others. If user sends the like action, the system will check if the user has already liked the post. If yes, the system will remove the like, otherwise it will add it. The same logic applies to other actions.


## Actors

- End user: Desires to perform various actions.

## Preconditions

- The data source is accessible
- The user is authenticated
- The user has permission to perform the action


## Postconditions

- The neccessary changes are made to the data source.

## Input

Table of inputs:

| Parameter   | Type   | Description                                        | Required |
| ----------- | ------ | ---------------------------------------------------| -------- |
| actionType  | enum   | Type of the action.                                | Yes      |
| objectId    | string | Id of the object that action is performed against. | Yes      |

* actionType can be one of the following values:
- `react` - The user likes the post.
- `repost`- The user shares the post.
- `bookmark`- The user bookmarks the post.


## Output

- The result object describing the result of the action.
{
    success: boolean, * true if there were no errors during the process, false otherwise
    acted: boolean, * true if the action was performed, false if it was removed
    actionType: enum,
    objectId: string,
}

## Error States

- The data source is not accessible.
- The user is not authenticated.
- The action is not supported.
- The object does not exist, you are trying to perform the action against.
- The user does not have permission to perform the action.

## Flow

1. The user requests to perform the action.
2. The system performs the action.
3. The system returns the output based on the result.

## Dependencies

- ActionPort: The interface to the data source for performing actions.




