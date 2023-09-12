# Fetch Status

## Overview

This use case is responsible for fetching status based on its id.

## Actors

- End user: Wants to read the status of a specific id.

## Preconditions

- The data source is accessible.

## Postconditions

- The status object is retreived based on the status id.
- No changes to the datasource are made.

## Input

Table of inputs:

| Parameter     | Type   | Description      | Required |
| --------------| ------ | -----------------| -------- |
| id            | number | id of the status.| Yes      |

## Output

- Status object

## Error States

- The data source is not accessible.
- The status with id X does not exist.
- Requester does not have permission to read the status.

## Flow

1. The user requests the status based on id.
2. The system fetches the status from the data source.
3. The system returns the status to the user.

## Dependencies

- StatusPort




