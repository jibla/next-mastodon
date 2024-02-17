# Use Case Title

## Overview

This use case is responsible for fetching status thread, by its id. This means to load the feed of other statuses that are replied to the status with the given id.

## Actors

- End user: Wants to read the conversation thread of a specific status.

## Preconditions

- The data source is accessible.

## Postconditions

- The array of statuses are loaded.
- No changes to the datasource are made.

## Input

Table of inputs:

| Parameter     | Type   | Description      | Required |
| --------------| ------ | -----------------| -------- |
| id            | number | id of the status.| Yes      |


## Output

- feed: Feed Object

## Error States

- The data source is not accessible.
- The status with id `id` does not exist.

## Flow

1. The user requests the thread based on status id.
2. The system fetches the statuses from the data source.
3. The system returns the feed object to the user.

## Dependencies

- FeedPort




