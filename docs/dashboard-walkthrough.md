# Public dashboard walkthrough and preparation scenarios

Reviewed against the dashboard ZIP supplied by CNM on 19 October 2026. The website contains a simplified React preview, not a running WordPress dashboard or a recording. Example records are fictional and remain in component state; no dashboard, audit, booking or messaging API is called.

## Source-backed connections

- `templates/dashboard/refocus/mock-autopsy.php`: saved test attempts, one primary cause per reviewed question, partial review coverage, publish corrective task to Weekly Planner, Review Queue and separate follow-up practice. Task completion is not mistake resolution.
- `templates/dashboard/refocus/power-planner.php`: planner and Review Queue.
- `templates/dashboard/refocus/daily-missions.php`: reads today's planner blocks, including corrective-task references.
- `templates/dashboard/refocus/blueprint.php` and `app/Services/BlueprintReadModelService.php`: capacity-bounded roadmap, declared assumptions, next-seven-day planner publishing and review evidence.
- `app/Services/ProgressRadarReadModelService.php`: recorded activity in complete comparison periods, distinguishing sources and missing evidence.

This is source inspection, not verification of the hosted WordPress environment. Programme access and human review arrangements must be confirmed separately. Existing image-based tool previews remain labelled as designed previews.

## Content boundary

`/case-studies` presents general illustrative preparation scenarios. No real student identities, consented case histories, testimonials, starting-to-ending marks or achieved outcomes are implied. There are no external research claims needing attribution. Replace a scenario with an actual case only after verifying its evidence and obtaining permission.

## Review checklist

- All three scenario buttons reset demo state.
- Skipping to Daily Missions shows an empty state until a task is scheduled.
- Scheduling adds one sample task and disables duplicate publishing.
- Completion changes the review count but does not produce marks, mastery or rank claims.
- Reset clears scheduled/completed state. No network writes or persistent student data.
- Student, parent and partner pages link to the workflow; home and footer expose the scenarios.
