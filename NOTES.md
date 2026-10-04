# Notes

## Summary of Changes

- Fixed task search filtering so archived tasks are excluded and title/description search conditions are grouped correctly.
- Fixed sorting by replacing dynamic SQL ordering with explicit ascending and descending queries.
- Added support for status, priority, assignee, and sort-order filters across the frontend and backend.
- Fixed pagination behavior so changing search or filters resets the results to page 1.
- Added validation for page, page size, status, and sort order inputs.
- Improved frontend filter UX with status, priority, assignee, and sorting menus.
- Added visual priority badges and assignee indicators.

## What I Chose Not to Change

I did not redesign the application's overall architecture or replace the existing database/query approach. I kept the changes focused on the highest-value correctness and usability issues to avoid introducing unnecessary risk in a small exercise.

I also did not implement database-level pagination, although the current implementation loads matching results before paginating them in Java. This would be a worthwhile improvement for a much larger dataset.

## Biggest Remaining Risk

The biggest remaining risk is the current substring-based search behavior. For example, searching for "Eve" can also return tasks containing "Eve" as part of a larger word or text. The search currently uses wildcard matching, so it may return broader results than intended. I identified this behavior but chose not to change it because changing the search semantics could affect the existing expected behavior.

## Tools / AI Used

I identified the bugs and improvement opportunities through manual testing and reviewing the application's behavior. I used ChatGPT to explore possible causes, alternative approaches, and implementation options for the issues I found. I reviewed the suggestions as a developer, selected the appropriate approaches, and modified the existing code myself with a focus on correctness, maintainability, and performance.