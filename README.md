# How open work maps to paddles (checked against 16–17 Nov 2026 open-work sheets)

- **Report time:** garage start = paddle sign-on time; relief start = relief time − 5 min.
- **Off time** = paddle relief time (or garage arrival at end of block).
- **First run** starts at the first garage sign-on or relief at/after the spare time (12:30 booking).
- **Several runs searched:** every run except the last ends at its first relief after you take it. The last run goes to the end of the block.
- **12-hour spread:** the day can't run past 12 hours from your first on time. If the last run would finish later than that, it stops at the last relief before the limit.
- **Breaks inside a run:** 30-min break at the relief, then back on 5 min before the bus's next departure (or relief + 30 if later).
- **If the bus deadheads to another station after the break,** the report time can't be worked out from the paddle (14-16 at 20:48, 40-10 at 21:55). Check those by hand.
- **109-xxx extra runs** (St Laurent parking) are in the September 2026 paddles, but their paddle times (sign-on 15:05) don't match the 17 Nov open-work sheet (12:50). The 109-102 St-Laurent Complex run isn't in any paddle.
- **109 labels (Work Available site):** show 109-xxx work as "Extra"; **109-102 is the Employee shuttle**.
- **Garage names:** the September 2026 paddles say "St L South Garage", matching the sheets.

## Paddle sources loaded in the site
- **Fall 2026:** September 26 Paddles PDF — Weekday 848 runs (eff. Aug 31), Saturday 562 (eff. Sep 5), Sunday 511 (eff. Aug 30).
- **Winter 2027:** JANPDA27 Daily 876 runs incl. AM/PM (eff. Jan 4, 2027), JANPSA27 Saturday 437 (eff. Dec 26, 2026), JANPSU27 Sunday 385 (eff. Dec 20, 2026).

## Where the sites live (GitHub repo `fned/run-lookup`, public)
- **Run Lookup:** repo root, `index.html` (paddle data embedded as `window.RUNSETS`). https://fned.github.io/run-lookup/
- **Work Available:** `work/` folder — reads open-work screenshots on the phone (Tesseract), lists shifts, tap to mark booked / don't want. https://fned.github.io/run-lookup/work/
  - `work/paddles.json` is built from Run Lookup's `RUNSETS` (route + start/end minutes per trip, all six sets). Rebuild it whenever Run Lookup's paddles change.
  - Paddle set is picked from the sheet's Work Date (season by effective date, day type by day of week); Paddles menu overrides it.

Test result: 13 of the 16 bus duties match exactly. The other 3 are off by one break-return time (1, 2 and 23 min).
