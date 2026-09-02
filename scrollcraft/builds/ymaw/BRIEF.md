# BRIEF — ymaw.com rebuild

Interviewed: Dorian (has run the weekend for 30 years), 2026-09-01, via
AskUserQuestion in-session. Answers recorded verbatim (selected options and
typed answers as given).

## The interview

1. **Vibe (3–5 words):** "Raw adventure" — mud, rope, triumph, energy. The
   physicality of the weekend front and center.
2. **The scroll journey:** "One continuous journey" — the whole page is one
   place: scrolling takes a parent through the weekend itself, Friday arrival
   to Sunday return, no visible section boundaries.
3. **The energy curve:** "Quiet open → build → peak → calm close" — arrive
   quietly Friday, energy climbs through the challenges, peaks at the
   transformation, resolves into a calm Sunday-afternoon decision to register.
4. **Feel + the ONE moment:** Peak chosen: "The transformation" — who he was
   Friday vs. who he is Sunday. The bridge line the current site already
   carries, made physical on screen.
5. **One thing no site does (signature seed):** "The trail line" — a single
   continuous hand-drawn trail line travels the entire page, tying the whole
   weekend together; it reacts to scroll and ends at the registration mark.
6. **Distance from premium-minimal:** "Premium minimal" — clean, spacious.
   (Held in tension with the raw-adventure vibe: the FOOTAGE is raw, the
   design around it stays quiet.)
7. **One unbroken world or scenes:** One unbroken world (same answer as Q2 —
   the fork was put to him explicitly).
8. **Assets owned:** Video clips of activities, lots of photos, drone/scenic
   footage, logo & brand files — in `X:\ESOS\ES Client Work\YMAW`, arriving
   via Google Drive. Until then: 11 real archive photographs already in the
   old repo (Canon/Sony EXIF, 2003–2025), which this build uses as legs.

Step-1 answers (asked in the same interview):

- **What is this / who for:** YMAW — Young Men's Adventure Weekend. A
  three-day outdoor weekend for boys 12–17 near Vancouver BC, run by a
  volunteer production team of men, for 30 years.
- **What must a parent believe by the end:** "He needs this now."
- **The one action:** Register Your Son ($279 CAD, Fall 2026, dates TBA).
  Same label everywhere.
- **Business facts to show:** Fall 2026 · dates announced soon · $279 CAD ·
  Vancouver, BC. No capacity number shown. NO invented statistics; the one
  real number besides price is "30 years", which is Dorian's own claim about
  his own event.

## The feeling curve (written before the acts)

```
1  Stillness      Friday: a boy paddles into the mist alone, vast water, quiet copy
2  Awakening      Saturday dawn: an axe overhead, work with his hands, camp waking
3  Grit           midday: setting out onto open water, effort, the challenge named
4  Intimacy       night: the fire circle under tarps, page at its darkest, 30 years surface
5  Awe            Sunday: every hand raised at the water. THE PEAK. largest leg.
6  Resolve        his face, calm, looking back at you. The decision. Register.
```

No two adjacent acts share a feeling. The silence in front of the peak is act
4's intimacy (small, dark, close) — the peak arrives as scale after closeness.

## The peak

**The sentence a parent would say to a friend:** "You scroll through his whole
weekend, and when Sunday comes the entire screen is hands in the air — and the
boy who comes home is not the one you dropped off."

Lives in leg 5. Gets: the largest weight (2.6vh vs 1.8vh), the only linger
(0.45), the strongest photograph in the archive, and the quiet act before it.

## The tell-someone sentence

> It's the site where you walk a boy's whole weekend with your thumb, and the
> trail you've walked becomes the way to sign your own son up.

The signature move (trail line) lives inside this sentence — merged, per
feel.md §3.

## Authored silence

The first 0.35 of leg 1 carries only the hero copy over water — that quiet is
authored (energy curve: quiet open), not dead scroll. Leg 4 (fire circle) is
deliberately the darkest, slowest-feeling stretch; its copy is smallest. Say so
to the verification pass.

## Structure decisions (uniqueness.md)

- **Grammar: Continuous world (worldflight).** Required by interview answers
  2 and 7. Why the other seven lost: filmic one-shot (the interview explicitly
  chose one unbroken world, and one-shot carries the burden of proof now);
  chaptered editorial (raw adventure + a weekend-as-journey is not a printed
  feature); live surface (not software); typographic poster (30 years of real
  photography is the asset — type-only wastes the archive); gallery (an
  argument, not a collection); split stage (the transformation could read as
  before/after, but the interview chose journey over comparison); rhythmic
  cutlist (bans continuity outright — the exact opposite of the chosen
  structure).
- **Nav: the trail.** The grammar requires a clickable map; the signature move
  IS the map. A vertical trail rail (desktop right edge; mobile: bottom
  hairline) drawn as one path, waypoints Fri dusk → Sat dawn → Sat noon → Sat
  night → Sun → Register. Clickable, stamps as passed, playhead marker is
  "where he is now". Ends at the register mark.
- **Hero device:** worldflight leg 1 with hero copy window (greet). No
  separate title stage.
- **Act-sequence shape:** 6 legs, 5×1.8vh + 2.6vh peak = 11.6vh + 1 spacer =
  12.6vh total (outside the 13.6–13.8 band).
- **Close:** arrival at a face. The last leg holds a boy's direct gaze, calm,
  with the register CTA as the object in that place; finale copy holds to the
  end. No footer-fade — small print lives in the finale block.
- **Signature move:** the trail line (bespoke SVG + JS in the page, driven
  from scroll/`--sc-seg`/`sc:waypoint`; engine untouched).

**Fingerprint gate:** registry is empty (first build in this workspace) —
nothing to clear; row appended after ship.

## The score (device per beat — worldflight form)

| Leg | Beat | Asset (real archive) | w | linger | Copy window |
|---|---|---|---|---|---|
| 1 | Stillness — he sets out | ymaw-mentors.jpg (kayak into mist, Sony) | 1.8 | 0 | hero (greet) |
| 2 | Awakening — the work | ymaw-adventure.jpg (axe overhead, portrait, Canon 5D) | 1.8 | 0 | plateau |
| 3 | Grit — the challenge | ymaw-challenge.jpg (kayaks off the shore) | 1.8 | 0 | plateau |
| 4 | Intimacy — the circle | ymaw-team.jpg (fire pit under tarps, 2003) + archive chips (2003/2006/2025) | 1.8 | 0 | plateau ×2 |
| 5 | Awe — THE PEAK | ymaw-weekend.jpg (hands raised at the water) | 2.6 | 0.45 | plateau (wide) |
| 6 | Resolve — the decision | ymaw-campfire.jpg (his face, direct) | 1.8 | 0 | finale (hold) |

All legs are poster + generated slow camera move (ffmpeg zoompan from the
still, dense GOP) until Dorian's real footage lands from Drive; then legs are
re-cut from footage with the same weights. Pace: every 8s clip carries 1.8vh
(0.225vh/s); the 12s peak carries 2.6vh (0.217vh/s) — rate spread under 4%.

## Palette / type (from the real logo: green wordmark, red fire, yellow sun)

- canvas #0C110D (deep forest off-black) · surface #151C16
- ink #F2EFE7 (bone) · ink-soft #A9AFA0 (tinted)
- accent #E4572E (the logo's fire red-orange) · accent-ink #16100C
- display: Archivo · text: Geist (both Google Fonts, real fallback stacks)

## Honesty rules for this brand

- The three stock photos in the old repo (hero_camp, mountain_break,
  hiking_about — not BC, not YMAW) are dropped and never used.
- No invented statistics anywhere. Price, ages, "30 years", and the archive
  years are the only numbers.
- Registration promises only what the flow does (card now / e-transfer later /
  assistance requested — nothing "instant" that isn't).

## Feel check (run cold against the contact sheets, 2026-09-01)

Felt, one word per act: stillness · work · effort · closeness · lift · calm.
Intended: stillness · awakening · grit · intimacy · awe · resolve.

Diff: acts 1, 2, 4, 5, 6 land. Act 3 reads "calm effort" rather than grit —
the serene kayak frame carries determination, not strain. Accepted for the
photo-built version and flagged: when the real challenge footage arrives from
the archive (mud, ropes, straining faces), leg 3 takes it first.

Peak confirmed on the sheet: the raised-hands frame is the largest visual
change on the page and holds the most scroll room. The act before it (the
circle) is the quietest. The end resolves and holds: face + CTA + small print
remain on the final screen.

## Verification record

- worldflight-assert: 21/24 pass. The 3 fails are documented choices/artifacts:
  lerp 0.12 (worldflight.md §7c) vs the assert's 0.18 expectation; a 68ms
  playhead residual at the fixed 70-frame trace end (software VP9 decode in the
  codec-less test Chromium; converges beyond the window); a seam-release
  sample taken exactly on the band edge where the outgoing leg is already
  fully covered by the opaque incoming leg (z-index 120) — no visible flash.
- shoot.mjs: desktop 1300×900, mobile 390×844, reduced-motion — no dead
  scroll; ALL copy clears 4.5:1 at its worst frame on all three passes.
- The band scrim breathes (0.5 base → 1.0 with copy visibility) so the
  photography carries the copy-free stretches; the circle leg adds a centre
  veil raised via the waypoint event.
- NOT verified: a real phone (decoder, autoplay policy, Low Power Mode,
  touch scrolling). Headless Chrome cannot reproduce those; check on-device
  after deploy and reach for device-diag.html on the first mobile defect.


## Facts corrected from the team's own documents (2026-09-01, later the same day)

Found in Dorian's Google Drive after the build: the 2026 flyer ("for
distribution"), the team's "YMAW Website updates" doc written today, "The Big
Why: YMAW 2026", the volunteer invitation and the friends-and-family letter.

- Dates: **September 11–13, 2026**, Squamish region, BC (was "Fall 2026, dates
  announced soon"). Pickups in Burnaby, Langley and Squamish; Vancouver Island
  carpool.
- Price: **$320 per person, everyone pays the same** (Young Men, Sponsors,
  Production). Was $279. Dorian confirmed $320 flat.
- Legacy: "since 1990", 34th annual (was "thirty years"). Society: Young Men's
  Adventure Weekend Society of BC.
- Voice: the organization refers to youth as **young men, never boys** (YMAW
  Standard 8). Every "boy" on the page was rewritten.
- The real arc (Big Why): bus and a hike in, in the dark; teams build camp;
  Saturday Quest Stations; Saturday night "The Push"; Sunday ceremony,
  closing witnessed by Shadow Watchers, the walk through two lines of men,
  the bus home. The six legs already matched it; copy now names the Quests and
  the bus.
- Registration restructured to three registrant types per the team's doc
  (Young Man / Sponsor / Production) plus a Donate/Support section (e-transfer
  to info@ymaw.com). CTA label everywhere is now "Register Now".

## v2 (2026-09-02): the legs move for real

Dorian's verdict on v1 was "not good enough" on all four axes (visuals, too
little information, structure, look and feel). v2 answers each:

- **Information + structure:** five field-guide pages (The Weekend, Why YMAW,
  The Team, FAQ, Donate and Support) behind a real menu, rendered from
  `src/pages/*.html` by `scripts/render-pages.mjs` with shared nav/footer
  partials. Content is lifted from the team's own documents (The Big Why, the
  2026 flyer, the volunteer invitation, the TEAMS deck). No names are
  published; the only contact is info@ymaw.com. The journey (index) is
  unchanged as a page and gains the same menu in bone over its dark ground.
- **Look and feel:** `pages.css` puts the logo's own colours on warm paper
  (forest #3E6B43 / #2F5233, fire #C93A22, sun #E9B822, paper #F4EFE4) and
  re-points the engine tokens under `body.page`; register and success adopt it.
- **Visuals:** the six legs are now the real archive photographs brought to
  life with image-to-video (Higgsfield, kling3_0 pro, 5 s, prompts insisting on
  subtle documentary motion and exact framing; the "IN THE DARK" preset
  recommendation was declined for legs 4 and 5). Twelve clips: 16:9 for the
  desktop legs and 9:16 from the mobile crops. Each is cut into a seamless
  loop (body = clip[0.6 s : end], its last 0.6 s cross-faded into clip[0 : 0.6 s],
  so the loop point lands on itself), scaled to 1600×900 / 900×1600, H.264
  dense-GOP (g=8, crf 25) plus a VP9 copy, no audio. Verified frame-by-frame
  on the three face-critical legs (axe, raised hands, the portrait): motion is
  subtle, no warping, identity preserved.

**Where the loops live, and why.** This session's egress proxy blocks the
Higgsfield CDN, so the rendered clips could never be pulled into the repo;
all cutting and encoding ran in Higgsfield's sandbox and the results were
uploaded back to Higgsfield media storage. The page references them on
`d2ol7oe51mr4n9.cloudfront.net` (public, CORS `*`, byte-range). The codec
shim now honours explicit `data-sc-src-webm` / `data-sc-src-mobile-webm`
attributes because the VP9 copies have their own object ids (Higgsfield
normalises the extension to `.mp4`, so the WebM bytes are served under an
`.mp4` name with a video/mp4 type; Chromium sniffs the container). The
committed `assets/leg*.mp4|webm` are the v1 ffmpeg camera-move versions and
are no longer referenced; they stay as a same-origin fallback should the team
want the loops in-repo later (download the 24 objects, drop them in `assets/`,
restore the `assets/legN.mp4` attributes and the shim's regex). Posters are
unchanged: the loop's first frame is 0.6 s into a subtle clip, visually the
same still.

**One exception: mobile leg 3.** Higgsfield's media-confirm step rejected the
portrait kayak loop deterministically (four attempts, both the H.264 and VP9
copies, same file that plays fine locally and byte-identical on re-encode),
and its unconfirmed objects went 403 within minutes. Rather than gamble on an
unconfirmed object's lifetime, the 9:16 leg 3 keeps the committed v1
`assets/leg3-m.mp4` camera move (same still, slow move instead of AI motion).
The other 23 objects are confirmed and serving. If the loop is wanted on
mobile too, re-generate leg 3 from a different portrait crop and try again.

**Verified live (2026-09-02, headless Chromium in the Higgsfield sandbox
against https://ymaw.vercel.app, desktop 1300×900 and mobile 390×844):** no
console errors; the first leg fetches from the CDN with `video/mp4` (200),
decodes at 1600×900 / 900×1600 (readyState 4) and the remaining legs load on
demand as the flight advances. Note the engine SCRUBS each clip against
scroll (currentTime follows the segment's progress, paused throughout) rather
than looping it, which is why the dense GOP is kept; the crossfaded tail is
harmless there, it simply lands on the same still the segment fades out on.
ffprobe over the served objects confirms H.264 in MP4 for the primaries and
VP9 in Matroska for the `-webm` alternates, 108 frames / 4.5 s each.

## v2.1 (2026-09-02): four legs cut from the 2024 footage

The 2024 album holds 102 clips. Every one that could be imported was run through Higgsfield's
video analysis (scene-by-scene text descriptions), which is how the shortlist was made without
being able to view the frames from this session: 94 analysed; a1-003/024/027/104/217 are over the
50 MB import limit, a1-036/162/194 failed to import, a1-208 failed to analyse.

Legs now on real footage (source clip · window · what it is):

| Leg | Clip | Window | Content | Faces |
|---|---|---|---|---|
| 1 Friday, dusk | a1-220 | 0.0–4.6 s | slow pan across the pebble beach and driftwood at twilight, crescent moon | none |
| 3 Saturday, noon | a1-065 | 2.0–7.5 s | "Game on!" — the young men charge across the field, camera running behind them | backs only |
| 4 Saturday, night | a1-092 | 0.0–6.0 s | the night circle, slow zoom, one mentor standing fire-lit, the rest silhouettes | adult, fire-lit |
| 5 Sunday | a1-089 | 1.2–5.9 s | high-angle wide of the long dinner table, every arm up as the room cheers | small, many — **needs Dorian's OK**; swap candidates a1-117, a1-184 |

Legs 2 and 6 keep the AI-animated photo loops from v2. Real alternates if wanted later:
leg 2 → a1-076 (archer from behind, extreme slow-motion release), a1-153, a1-137; leg 6 → a1-059 or a1-030 (night fire, silhouettes).
Cut but not wired (also on the CDN, not confirmed): a1-223 car POV up the forest road, a1-075 push-ups, a1-130 slip-and-slide POV.

Encode: the v2 loop recipe (0.6 s head/body crossfade, H.264 g=8 + VP9 g=8, no audio). Desktop stays
1920×1080 crf 25. Mobile is now **720×1280** (crf 26 / VP9 crf 34): the 1080×1920 centre-crop of the
running clip came out at 20–31 MB, the 720 version is 6–10 MB.

Posters: the first frame of each loop, JPEG, on the same CDN, so the poster→video hand-off is
frame-identical. `assets/p1|p3|p4|p5*.webp` stay in the repo (unused) and p2/p6 are still live.

One exception: the leg 5 mobile VP9 slot was never uploaded (the upload step was refused three times
by the session's permission classifier). Its `data-sc-src-mobile-webm` therefore points at the desktop
VP9 file, so a webm-only mobile browser gets the 16:9 file cover-cropped by the stage. Everything else
serves 206/200 from the CDN (checked with ranged GETs).

CDN object ids (all under `https://d2ol7oe51mr4n9.cloudfront.net/user_30xvkrK0pKbvva4hQU0vp05t80n/<id>.mp4|.jpg`):

| Leg | mp4 | mobile mp4 | VP9 (as .mp4) | mobile VP9 | poster | mobile poster |
|---|---|---|---|---|---|---|
| 1 | dccff19d… | 1d0f11f6… | 25c83be5… | 77fedc77… | fa6f8363….jpg | 82dd6acc….jpg |
| 3 | 39132ec0… | 275732e3… | 782fb125… | 8e336758… | 17f9dfe0….jpg | 917ee16e….jpg |
| 4 | fe12096a… | 1fec6ad2… | 79dfa3db… | 03b869f7… | 8a2c132d….jpg | 785ee5e2….jpg |
| 5 | 85b22e91… | f41648d7… | d633f0d6… | (desktop VP9) | 7daa25fc….jpg | 3ce1e409….jpg |

Consent rule carried forward: nothing with an identifiable young man's face goes live without Dorian's
approval. Leg 5 is the only one of the four that shows faces at all; it ships on his say-so and is a
one-line swap otherwise.
