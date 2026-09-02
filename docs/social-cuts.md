# Social cuts — 12 clip recipes from the 2024 album

Paper edit, 2 September 2026. For the lead to cut in the media sandbox. Nothing here has been rendered.

Twelve recipes: ten in 9:16 for Instagram Reels / TikTok (6–15 s including the end card) and two in 16:9 for Facebook (15–25 s). Grouped by the hero's-journey beats the site plan uses (`docs/plan-v3-the-threshold.html`): The Call, The Threshold, Trials, The Ordeal, The Return, The Men. Every 9:16 is also the clip the "Send this to a dad" button attaches.

## Sources and their limits

| Input | What it gave | Gap |
|---|---|---|
| `.cache/gp/scenes.json` | Scene-by-scene text (visual, audio, shot type, timestamps) for **50 clips: a1-070 … a1-218** | The ledger lists 94 analysed clips; the 44 below a1-070 (000–069) plus 073, 076, 080, 092, 207, 208, 212, 215, 220–232 have **no scene text** in the file. |
| `.cache/gp/shortlist.md` | The lead's survey notes, consent flags, landing-page picks, and five hand-timed ranges (a1-220 0:00–4.6, a1-065 2.0–7.5, a1-092 0–6, a1-089 1.2–5.9, a1-076 0:03–0:56) | One-line notes only for clips without scene text. |
| `.cache/gp/ledger.tsv` | clip → media id → analysis id | — |
| `.cache/gp/videos.tsv` | clip → source URL | **No durations or dimensions** despite the brief; durations quoted below are the last scene's end time, a floor, not the true length. Assume 16:9 phone footage unless the sandbox says otherwise. |

**Timecode convention.** `m:ss.s`, taken from scene boundaries in `scenes.json`. Scene boundaries are ±0.5 s, so trim to the action in the sandbox. Where a clip has no scene text the row is marked **CONFIRM** — the IN/OUT is a target length from the lead's note, to be set by eye.

**Consent legend (per recipe and per row).**
- **GREEN** — no identifiable young men (landscape, backs, legs, hands, silhouettes, or adults only). Adults (production men) can consent for themselves; show a man the cut before it posts if his face reads.
- **AMBER** — an identifiable young man is in frame; Dorian must approve; the clips are named.
- **RED** — excluded, with the reason.

**Rules applied throughout.** "Young men", never the other word. No invented numbers — the only figures on screen are the price ($320 flat), the dates (Sept 11–13, 2026), the place (Squamish region, BC), the ages (12–17) and "since 1990". Only public contact: info@ymaw.com. Mixed-gender clips and on-camera interviews are out. **Nothing spoken in any circle is ever used** — clips a1-172, a1-201 and a1-138 are muted wherever they appear. Phone-free weekend. Non-denominational. Captions are the Society's own lines or plain facts; no quotes from anyone without a release, and no young man's voice is used as a quote.

**Names in audio — never on the timeline.** a1-093 0:01–0:03 ("Jackson! Patton!"), a1-184 0:00–0:08 ("Tyler", "Logan"), a1-186 0:15–0:20 ("Quinn"), a1-139 0:02–0:07 ("Keon"), a1-175 0:00–0:10 ("Jacob"), a1-020 ("Mr. Leslie"), a1-070 (off-camera woman counting). The ranges used below avoid them.

---

## The recipes

Reading a cut list: **#** order · **Clip** · **IN–OUT** (source time) · **s** (seconds used) · **On screen** · **9:16 framing** (where the subject sits in the 16:9 frame and how to get the vertical: *centre* = `crop=ih*9/16:ih` centred; *left/right bias* = same crop with the x offset moved; *keyframe* = slide the crop window across the shot; *letterbox* = keep the full width and pad top/bottom in the site's canvas colour `#0C110D`).

### THE CALL — bus, gear, the truck

#### 1. "Ready?" — 9:16 · 15 s · GREEN

The decision to go: the road in, a man packing, the truck, "Ready?", the first steps.

**Hook (0–1.5 s):** `Your phone stays in the bag.`

| # | Clip | IN–OUT | s | On screen | 9:16 framing |
|---|---|---|---|---|---|
| 1 | a1-223 | CONFIRM ~0:00–0:02.5 | 2.5 | POV from a car climbing the forest road, no people (lead's note) | Vanishing point centre → **centre** |
| 2 | a1-117 | 0:00–0:02.5 | 2.5 | High angle: a production man's hands sort sunscreen, sanitizer, wallet into a big blue backpack on a folding table | Bag sits centre-left under him → **left bias** (x ≈ 0.25·iw) so the bag fills the frame; his hat/face at top may stay in — adult |
| 3 | a1-022 | CONFIRM ~2.5 s | 2.5 | Truck liftgate and the meadow (lead's note) | Liftgate presumably centre → **centre**; confirm |
| 4 | a1-101 | 0:00–0:03.5 | 3.5 | Sun-dappled clearing: a man walks right-to-left past a hollow trunk while others load a silver sedan. Cut after "Yeah." | Walker crosses the whole frame → **centre**, let him exit; or **keyframe** to follow him |
| 5 | a1-121 | 0:00–0:02 | 2 | POV: first steps down a fern-lined dirt trail | Path centre → **centre** |
| 6 | End card | — | 2 | | |

**Captions (≤8 words):** #1 hook · #2 `Pack light.` · #3 `Sept 11–13 · Squamish region` · #4 `Since 1990.` · #5 `Register at ymaw.com`

**Sound:** natural. a1-117's voice listing gear (cut before "too many in team number one"), a1-101's "Ready?" — "Yeah.", a1-121's footsteps. No music.

**End card:** `Register Now · ymaw.com · Sept 11–13`

**Consent:** GREEN. No people in 223/022 (lead's note); adult hands in 117; adults in 101; nobody in 121.

**Notes.** There is no clean, GREEN footage of the bus itself in 2024 — a1-175 and a1-190 are faces to camera. *AMBER upgrade if Dorian gets releases:* open with a1-175 0:10–0:14 (two young men on the bus, one cheering "I'm gonna bring my dad!") — the best Call line in the archive, but it needs both young men's releases (and the voice is a young man's). Put "bus at dusk, exterior, from behind the queue" on the documentarian's September shot list.

---

### THE THRESHOLD — the walk in, dusk, the beach at twilight

#### 2. "The Walk In" — 9:16 · 15 s · GREEN

**Hook (0–1.5 s):** `The walk in.`

| # | Clip | IN–OUT | s | On screen | 9:16 framing |
|---|---|---|---|---|---|
| 1 | a1-121 | 0:02–0:08 | 6 | POV forest trail; at 0:04 the camera tilts up to the canopy, sun flares through the branches, tilts back to the path | Path centre → **centre**; the tilt is vertical motion and suits 9:16 |
| 2 | a1-103 | 0:01–0:04 | 3 | Slow pan left→right: evergreens open onto a wide clearing and calm blue water, islands faint on the horizon | Water reveal is centre-right at mid-pan → **centre** |
| 3 | a1-196 | 0:00–0:01 | 1 | Top-down: a cap, a shirt and a pair of worn hiking boots left on the pebbles | Top-down → **centre** |
| 4 | a1-220 | 0:00–0:03.5 | 3.5 | Slow pan across the pebble beach and driftwood at twilight, crescent moon (lead's leg 1) | Pan → **centre**; check where the moon sits and bias toward it |
| 5 | End card | — | 1.5 | | |

**Captions:** #1 hook · #2 `Squamish region.` · #3 `Phones stay in the bag.` · #4 `Friday, dusk.`

**Sound:** natural — footsteps and the bird from a1-121, wind from a1-103, waves from a1-196 carried under a1-220 (its own audio is unlogged). No music.

**End card:** `Register Now · ymaw.com · Sept 11–13`

**Consent:** GREEN. No people in any frame. (Leg 1 clip a1-220 appears inside a montage, not alone.)

**Framing note.** Captions sit in the top third on #1 and #2 (the path fills the lower half), bottom third on #4 (the moon is up).

#### 3. "A Weekend Without a Screen" — 9:16 · 15 s · GREEN

The beach in daylight; backs to camera; the sea does the talking.

**Hook (0–1.5 s):** `A weekend without a screen.`

| # | Clip | IN–OUT | s | On screen | 9:16 framing |
|---|---|---|---|---|---|
| 1 | a1-141 | 0:00–0:02 | 2 | A wave bursts white on moss-covered rocks; a man in the lower-left foreground, back to camera | Subject lower-left → **left bias** (x = 0) to keep him, or **centre** to keep only the wave |
| 2 | a1-098 | 0:00–0:04 | 4 | A man stands on a driftwood log, hands clasped behind his back, looking out to sea; others far down the shoreline; a jet trail | Subject centre → **centre** |
| 3 | a1-160 | 0:00–0:04 | 4 | From behind: a barefoot man winds up and throws a stone; splash upper right at ~0:02.5 | Thrower centre, splash upper-right → **slight right bias** (x ≈ 0.6·(iw−cw)); the second figure entering bottom-left is cropped out, which is fine |
| 4 | a1-156 | 0:07–0:10 | 3 | Steady wide: driftwood framing bottom-right, a group far away on the rocks, contrail in a pale sky | Group distant left → **centre** |
| 5 | End card | — | 2 | | |

**Captions:** #1 hook · #2 `No phone in your hand.` · #3 `Sept 11–13 · Squamish region` · #4 `Since 1990.`

**Sound:** natural waves. The wind hits the microphone hard in 098/141/160 — high-pass at ~120 Hz and use a1-160's wave bed under the whole cut; if it is still harsh, music, low, no lyrics.

**End card:** `Register Now · ymaw.com · Sept 11–13`

**Consent:** GREEN. Adults from behind (141, 098, 160); the group in 156 is too distant to read.

---

### TRIALS — quests, archery from behind, the field game, slip-n-slide POV

#### 4. "One Arrow at a Time" — 9:16 · 15 s · GREEN

Five archers, every one from behind. The sound is the edit.

**Hook (0–1.5 s):** `One arrow at a time.`

| # | Clip | IN–OUT | s | On screen | 9:16 framing |
|---|---|---|---|---|---|
| 1 | a1-142 | 0:00–0:02 | 2 | Low angle from directly behind: draw to the cheek, release, arrow lands — twang, thud | Archer centre, targets ahead → **centre**; the best natural vertical in the set |
| 2 | a1-116 | 0:01–0:05 | 4 | Extreme slow-mo: the yellow-fletched arrow leaves the bow and wobbles across the range toward the middle target | Archer left foreground, target centre-right → **keyframe** the crop from left to centre-right over 4 s, or **letterbox** with the caption in the bar |
| 3 | a1-153 | 0:15–0:19 | 4 | Slow-mo hold at full draw from behind the left shoulder; real-speed release at 0:17, dead centre; he lowers the bow and his hair falls over his face | Archer centre-left → **left bias** (x ≈ 0.35·(iw−cw)) |
| 4 | a1-137 | 0:02–0:04 | 2 | Over the shoulder: release, arrow strikes near centre, bow lowers | **centre** |
| 5 | a1-197 | 0:01–0:02 | 1 | Behind the left shoulder: release, strikes near centre. **Cut at 0:02** before he spins round | **left bias** |
| 6 | End card | — | 2 | | |

**Captions:** #1 hook · #2 `Archery is one of the Quests.` · #3 `Saturday: the Quests.` · #4 `Sept 11–13 · Squamish region` · #5 `$320 flat.`

**Sound:** natural only — the twang/thud chain from 142, 153 ("thwack") and 137, with a1-116's pitched-down slow-mo drone as the bed. No music; it would fight the thuds.

**End card:** `Register Now · ymaw.com · Sept 11–13`

**Consent:** GREEN — every archer is filmed from behind or over the shoulder; no face is visible (153's hair covers his face at the end; 197 is cut before he turns). Identifiability from behind is low but not zero (hair, shirt) — Dorian should glance at the finished cut. *AMBER option:* a1-197 0:02–0:03, the archer spins to camera and yells "Whoa!" — the best reaction in the archive; needs his release.

#### 5. "Game On" — 9:16 · 15 s · GREEN

**Hook (0–1.5 s):** `Saturday noon. Game on.`

| # | Clip | IN–OUT | s | On screen | 9:16 framing |
|---|---|---|---|---|---|
| 1 | a1-065 | 0:02.0–0:05.0 | 3 | "Game on!" — the young men charge across the field, camera running behind them, backs only (lead's leg 3 pick, first half) | Group centre → **centre** |
| 2 | a1-130 | 0:00–0:05 | 5 | POV slip-n-slide: wet white plastic, whip-tilt to the sun through the pines at 0:01, bare legs enter the bottom of frame, slide off onto the grass | **centre**; legs bottom-centre |
| 3 | a1-093 | 0:09–0:12 | 3 | Top-down: an adult's sandalled feet step onto sun-cracked dry grass, hard shadow; the crowd roars "Yeah! Touchdown!" | Top-down → **centre** |
| 4 | a1-184 | 0:11–0:14 | 3 | Wide: a pack of men sprint right across the field toward the tree line — "Go, go! Get him!" | Runners mid-frame → **centre**, follow the pan |
| 5 | End card | — | 1 | | |

**Captions:** #1 hook · #2 `The slide.` · #3 `The field game.` · #4 `Register at ymaw.com`

**Sound:** natural — a1-065's "Game on!" **only if it is a man's voice** (if a young man's, keep the ambient and drop the word), 130's slide splash, 093's crowd at 0:09–0:12 (the names at 0:01–0:03 are not used), 184's shouts at 0:11–0:14 (no names in this range).

**End card:** `Register Now · ymaw.com · Sept 11–13`

**Consent:** GREEN. Backs (065), legs (130, 093), adults in wide motion (184 — the lead's note says adults; if any late-teen face reads at 9:16, it becomes AMBER).

#### 6. "Count to Ten" — 9:16 · 15 s · AMBER

Push-ups, pads, ice. Two of the three rows need approval; the GREEN fallback is a one-clip reel.

**Hook (0–1.5 s):** `Count to ten.`

| # | Clip | IN–OUT | s | On screen | 9:16 framing |
|---|---|---|---|---|---|
| 1 | a1-075 | 0:08–0:13 | 5 | Low wide: three men do push-ups in a clearing, a semicircle watching; the count "seven, eight, nine, ten", then a laugh — "He's doing the easy ones" | Three men centre → **centre**; the semicircle of spectators is cropped to the middle third |
| 2 | a1-186 | 0:05–0:09 | 4 | Boxing pads in the ferns: the trainer's back to camera, the trainee throws hooks — "Don't be shy. Punch through the bag." | Pair centre → **centre**; try a tighter crop on pads and gloves so the trainee's face sits above frame — not guaranteed |
| 3 | a1-070 | 0:08–0:12 | 4 | A man in an inflatable pool full of ice leans back under and sits up in a burst of water | Pool centre → **centre**; **strip the audio** (an off-camera woman is counting) |
| 4 | End card | — | 2 | | |

**Captions:** #1 hook · #2 `Boxing pads. Push-ups. Ice.` · #3 `Sept 11–13 · $320 flat`

**Sound:** natural — 075's count and laugh (cut before 0:08; the earlier audio mentions a "weightlifting champion", not ours to use), 186's adult trainer (no names in 0:05–0:09), 070 splash only. No music.

**End card:** `Register Now · ymaw.com · Sept 11–13`

**Consent:** AMBER — **a1-186** (trainee, mid-teens, face visible) and **a1-070** (face to camera; the scene text guesses "about 20" — confirm he is an adult participant, otherwise a release). **Two checks on a1-075 before it is GREEN:** (1) that the push-ups are not part of The Push — the plan says The Push is never filmed, and a1-165's background audio has a child shouting "Push!", so push-ups may be sacred here; (2) that the seated spectators (the scene text says children are among them) are unreadable at the centre crop. *GREEN fallback:* a1-075 0:08–0:17 alone (9 s) if both checks pass.

---

### THE ORDEAL — the fire circle at night, silhouettes

#### 7. "The Fire" — 9:16 · 15 s · GREEN

**Hook (0–1.5 s):** `Saturday night. No phones.`

| # | Clip | IN–OUT | s | On screen | 9:16 framing |
|---|---|---|---|---|---|
| 1 | a1-023 | CONFIRM ~4 s | 4 | Twilight sky above the fire, pan across ~20 seated in silhouette (lead's note) | Pan → **centre**; keep sky in the top third |
| 2 | a1-092 | 0:00–0:05 | 5 | Night fire circle, slow zoom, the speaker fire-lit, seated young men in silhouette (lead's leg 4 pick) | Fire centre → **centre** |
| 3 | a1-059 | CONFIRM ~3 s | 3 | Static wide of the circle, a headlamp beam crossing (lead's note) | Beam position unknown → set by eye |
| 4 | a1-030 | CONFIRM ~1.5 s | 1.5 | Night fire, silhouettes (lead's note) | **centre** |
| 5 | End card | — | 1.5 | | |

**Captions:** #1 hook · #2 `What's said here stays here.` · #3 `No phones. No audience.` · #4 `Non-denominational. Since 1990.`

**Sound:** natural fire crackle from a1-092 if it is clean; **no voice from any circle clip, ever** — mute all speech. If the crackle is not clean, music, low, no lyrics.

**End card:** `Register Now · ymaw.com · Sept 11–13`

**Consent:** GREEN — silhouettes throughout; the fire-lit speaker in 092 is already live on the landing page. **Excluded:** a1-073 (faces fire-lit). **Not in the base cut:** a1-172 0:00–0:05 (fire-lit man standing, heartbeat sound effect, a story being told) — it may be the ceremony, which is never shown; ask Dorian, and its audio is never used in any case.

---

### THE RETURN — Sunday, every hand up, the long table

#### 8. "Every Hand Goes Up" — 9:16 · 11 s · AMBER

**Hook (0–1.5 s):** `Sunday. Every hand goes up.`

| # | Clip | IN–OUT | s | On screen | 9:16 framing |
|---|---|---|---|---|---|
| 1 | a1-111 | 0:06–0:08 | 2 | Low angle: two men's legs and boots stride across the grass | Feet centre → **centre** |
| 2 | a1-089 | 0:01.2–0:05.9 | 4.7 | High angle down the long white table in the clearing, three canvas tents behind; the cheer builds from 0:02 until nearly every arm is up; a black dog crosses | The table runs bottom→top — a natural vertical → **centre**. The centre crop (56 % of the width) drops most of the near-left/near-right foreground seats, where the four readable faces sit. Verify frame by frame. |
| 3 | *(optional)* a1-111 | 0:00–0:02 | 2 | A young man with a backpack and water bottle walks between two rows of men facing each other — **the walk between the lines** | Rows either side, walker centre → **centre** |
| 4 | End card | — | 2 | | |

**Captions:** #1 hook · #2 `Sunday dinner. Every hand up.` · #3 `He comes home Sunday night.`

**Sound:** natural — the collective cheer from a1-089 0:02–0:06 only; drop the spoken lines around it ("How's dinner?", "Lentil beans…"). No music, or music low, no lyrics if the cheer is thin.

**End card:** `Register Now · ymaw.com · Sept 11–13`

**Consent:** AMBER — **a1-089** (faces small but present; the lead flagged it for Dorian's OK). If the centre crop removes the near-right pair, what remains is tiny, but still show Dorian. **a1-111 0:00–0:02** is AMBER pending one fact: the scene text does not say whether the young man faces the camera. If he is filmed from behind, this is the only footage of the walk between the lines in the archive and it becomes the hero shot for the plan's "walk out" confirmation page. Row 1 (0:06–0:08) is GREEN.

---

### THE MEN — kitchen, production men, adults' circles (for recruiting men)

#### 9. "Production Men" — 9:16 · 15 s · GREEN

**Hook (0–1.5 s):** `Production men. Since 1990.`

| # | Clip | IN–OUT | s | On screen | 9:16 framing |
|---|---|---|---|---|---|
| 1 | a1-050 | CONFIRM ~3 s | 3 | Adults cooking (lead's note) | Set by eye; hands and pans over faces |
| 2 | a1-062 | CONFIRM ~3 s | 3 | Adults cooking | Set by eye |
| 3 | a1-229 | CONFIRM ~3 s | 3 | Adults cooking | Set by eye |
| 4 | a1-128 | 0:04–0:06 | 2 | Two men's hands anchor the white floor tarp with a big grey rock — "I think we're good." | Rock placed at right of frame → **right bias**; **confirm the child from 0:00–0:03 has left the frame after the pan** |
| 5 | a1-169 | 0:04–0:07 | 3 | Pan left onto a portable fire pit on the lawn, a man with a drink beside it, another walking through, laughter | Fire pit ends centre → **centre** |
| 6 | End card | — | 1.5 | | |

**Captions:** #1 hook · #2 `You cook. You carry. You show up.` · #3 `Non-denominational. Volunteer-run.` · #4 `Sept 11–13 · Squamish region` · #5 `info@ymaw.com`

**Sound:** natural kitchen clatter (confirm it is usable), 128's "I think we're good." (adult), 169's laughter and crackle. Music, low, no lyrics under, optional.

**End card:** `Come as a Production Man · ymaw.com · info@ymaw.com`

**Consent:** GREEN by definition (adults only). The men can consent for themselves — show the kitchen crew the cut before it posts. a1-128 row 4 depends on the child being out of frame; if not, use 0:04.5–0:06 tighter on the rock, or drop the row.

#### 10. "Who Were the Men for You?" — 9:16 · 15 s · GREEN

**Hook (0–1.5 s):** `Who were the men for you?`

| # | Clip | IN–OUT | s | On screen | 9:16 framing |
|---|---|---|---|---|---|
| 1 | a1-101 | 0:00–0:03.5 | 3.5 | Men walk to the car in the clearing — "Ready?" "Yeah." | **centre**, let the walker cross |
| 2 | a1-201 | 0:03–0:06 | 3 | Pan across men seated on the ground in the ferns; one with his back to camera, one in a red hoodie, chin on hand — **MUTED** | Seated low, pan right → **centre**, follow the pan |
| 3 | a1-037 | CONFIRM ~2 s | 2 | Propane fire and the gazebo, men gathered (lead's note) | Set by eye |
| 4 | a1-184 | 0:11–0:14 | 3 | Men sprint right across the sunlit field | **centre** |
| 5 | a1-169 | 0:04–0:07 | 3 | Fire pit on the lawn, laughter | **centre** |
| 6 | End card | — | 1.5 | | |

**Captions:** #1 hook · #2 `Be one for someone else.` · #3 `One weekend. Sept 11–13.` · #4 `Squamish region.` · #5 `info@ymaw.com`

**Sound:** 101 natural ("Ready?" "Yeah."), **201 muted — what is said in a circle is never used**, 184's shouts (no names in this range), 169 laughter and crackle. Music, low, no lyrics under.

**End card:** `Join the men · ymaw.com · info@ymaw.com`

**Consent:** GREEN (adults). Confirm every seated figure in a1-201 0:03–0:06 is an adult man (one is described only as "long hair and a blue cap"); if not, swap in a1-037. a1-184: the lead's note says adults.

---

### FACEBOOK 16:9

#### 11. "One Weekend" — 16:9 · 25 s · GREEN (AMBER tail optional)

The whole arc, Friday to Sunday, every frame real.

**Hook (0–1.5 s):** `One weekend. Since 1990.`

| # | Clip | IN–OUT | s | On screen | Caption |
|---|---|---|---|---|---|
| 1 | a1-223 | CONFIRM ~3 s | 3 | Forest road POV | hook |
| 2 | a1-121 | 0:00–0:03 | 3 | POV forest trail | `The walk in.` |
| 3 | a1-220 | 0:00–0:03 | 3 | Twilight beach, moon | `Friday, dusk.` |
| 4 | a1-142 | 0:00–0:02 | 2 | Archer from behind, twang, thud | `Saturday: the Quests.` |
| 5 | a1-130 | 0:00–0:03 | 3 | Slide POV | — |
| 6 | a1-065 | 0:02.0–0:05.0 | 3 | The charge, backs | `Game on.` |
| 7 | a1-092 | 0:00–0:04 | 4 | Night fire, silhouettes | `Saturday night: the fire.` |
| 8 | a1-111 | 0:06–0:08 | 2 | Boots across the grass | `Sunday: he comes home.` |
| 9 | End card | — | 2 | | |

**Sound:** music, low, no lyrics as the bed; natural hits laid on top — 121 footsteps, 142 twang/thud, 130 slide, 065 "Game on!" (man's voice only), 092 crackle. Nothing spoken from 092.

**End card:** `Register Now · ymaw.com · Sept 11–13 · $320 flat`

**Consent:** GREEN as written. *AMBER alternative ending:* replace row 8 with a1-089 0:02–0:06 (every hand up) and trim rows 1 and 7 by a second each — needs Dorian's OK on 089.

**Framing:** native 16:9, no crop; everything is landscape source. If any row proves to be portrait, letterbox on `#0C110D`.

#### 12. "Men, We Need You Too" — 16:9 · 23 s · GREEN

For the men's door: the work, the play, the circle — in that order.

**Hook (0–1.5 s):** `Men, we need you too.`

| # | Clip | IN–OUT | s | On screen | Caption |
|---|---|---|---|---|---|
| 1 | a1-117 | 0:00–0:02.5 | 2.5 | Hands packing the backpack — "Sunscreen, sanitizer, wallet…" | hook |
| 2 | a1-101 | 0:00–0:03.5 | 3.5 | Men to the car — "Ready?" "Yeah." | `Production men run the weekend.` |
| 3 | a1-050 | CONFIRM ~3 s | 3 | Kitchen | `Cook. Carry.` |
| 4 | a1-062 | CONFIRM ~3 s | 3 | Kitchen | `Hold the circle.` |
| 5 | a1-184 | 0:11–0:14 | 3 | Men sprint across the field | `Play.` |
| 6 | a1-169 | 0:04–0:07 | 3 | Fire pit, laughter | `Since 1990. Non-denominational.` |
| 7 | a1-201 | 0:03–0:06 | 3 | Men seated in the ferns — **MUTED** | `Be the man you needed.` |
| 8 | End card | — | 2 | | |

**Sound:** natural — 117's voice, 101's "Ready?", kitchen clatter, 184's shouts, 169's laughter; **201 muted**. Music, low, no lyrics under.

**End card:** `Come as a Production Man · ymaw.com · info@ymaw.com`

**Consent:** GREEN (adults). Same a1-201 check as recipe 10. *Optional row* between 4 and 5: a1-075 0:08–0:12 (push-up count) once the two checks in recipe 6 clear.

---

## (a) Top 20 freeze frames

Stills for posts, the field card and the poster. Timestamps from the scene text; pick the sharpest frame within ±0.5 s. GREEN unless marked.

| # | Clip | Time | Why |
|---|---|---|---|
| 1 | a1-220 | ~0:02 (mid-pan) | Pebble beach, driftwood, crescent moon at twilight. The Threshold hero still; no people. |
| 2 | a1-098 | 0:03 | A man on a driftwood log, back to camera, hands clasped, sea and jet trail. The "Bringing Him" still: the man who waits. |
| 3 | a1-160 | 0:01 | The stone leaving his hand, from behind, mossy rocks and surf. Motion frozen. |
| 4 | a1-141 | 0:01 | The wave bursting white on the moss; man lower-left, back turned. |
| 5 | a1-153 | 0:12 | Full draw held in slow-mo from behind the left shoulder, three targets ahead. Poster candidate. |
| 6 | a1-116 | 0:04 | The arrow itself, mid-flight and wobbling, slow-mo. Rare. |
| 7 | a1-142 | 0:01 | Low angle from behind, string at the cheek, forest light. The cleanest vertical. |
| 8 | a1-137 | 0:03 | Arrow striking near centre, bow still up. |
| 9 | a1-130 | 0:03 | Slide POV: wet plastic, bare feet, forest ahead. "His Path" energy without a face. |
| 10 | a1-121 | 0:05 | Canopy silhouetted, sun flaring through the branches. The "look up" frame. |
| 11 | a1-103 | 0:03 | Mid-pan: the clearing opening onto blue water and distant islands. Squamish region, no people. |
| 12 | a1-196 | 0:00 | Cap, shirt and worn hiking boots left on the pebbles. Gear laid down. |
| 13 | a1-092 | ~0:03 | Night fire circle, speaker fire-lit, silhouettes (lead's leg 4). |
| 14 | a1-023 | CONFIRM | Twilight sky over the fire, ~20 seated in silhouette. |
| 15 | a1-059 | CONFIRM | The headlamp beam crossing the dark circle. |
| 16 | a1-065 | ~0:04 | The charge, mid-stride, backs only (lead's leg 3). |
| 17 | a1-128 | 0:05 | Two hands setting a grey rock on the tarp corner. The "hands" still the plan asks for. |
| 18 | a1-117 | 0:11 | Wide clearing, twenty-odd figures with backpacks under tall evergreens. Arrival, faces unreadable. |
| 19 | a1-169 | 0:05 | The portable fire pit on the lawn, men around it, evergreens. The Men. |
| 20 | a1-089 | 0:05 | Every hand up down the long table, high angle. **AMBER** — Dorian's OK. |

Spares: a1-111 0:01 (a young man walking between the two rows of men — **AMBER** until orientation is known; if from behind, it moves to #1 for the Return); a1-184 0:12 (men running right across the field); a1-093 0:10 (a sandal on cracked dry grass, hard shadow); a1-156 0:08 (driftwood framing, group distant on the rocks, contrail); a1-201 0:07 (white-bearded man gesturing, seated in the ferns — adult; a circle visual, so never with a caption that implies what was said).

## (b) Do not use

**RED — excluded.**

| Clip(s) | Reason |
|---|---|
| a1-017, 039, 145, 152, 158, 165, 212 | On-camera interviews with young men — interviews are out, and each is an identifiable face. (a1-165 also has a child shouting "Push!" in the background.) |
| a1-064, a1-112 | On-camera interviews with adults — interviews are out. |
| a1-067, a1-146 | Interview with a named production man — interviews are out. |
| a1-138 | Mixed-gender (young woman in the drum circle); also spoken circle content. Its first 3 s (tents, no people) are the lead's call — the flag says keep the whole clip off young-men imagery. |
| a1-139 | Girl in frame; children walking toward camera with gear; a name in the audio. |
| a1-171 | Girl in frame; young men facing camera. |
| a1-218 | Selfie with a girl. |
| a1-221 | Adult woman in frame (tarps, wide). |
| a1-080 | Men and women in a circle. |
| a1-148 | Woman in the game briefing; young men facing camera. |
| a1-163 | A figure of unstated gender in a long coat; a swimmer; a teen in profile — too many unknowns for a paper edit. |
| a1-190 | A bus of children in uniform shirts looking at camera — identifiable, and confirm it is a YMAW group at all before it is ever considered. |
| a1-166 | A line of young men facing and addressing the camera. |
| a1-100, a1-115 | Boxing pads with a young man's face. |
| a1-088, a1-099 | Archers who turn to face the camera at 0:02 / 0:01; the release frames before that are too short to carry a cut. |
| a1-073 | Fire circle, faces fire-lit. |
| a1-172 audio, a1-201 audio, a1-138 audio | Words spoken in a circle. Never, in any cut. |
| a1-020 audio | Names a man ("whatever Mr. Leslie says"). |
| a1-175 0:00–0:10 | Adult speaking, names another ("Jacob"), talks about the kitchen budget. |

**AMBER register — needs Dorian's approval (identifiable young men), listed where they appear above.**

| Clip | Range | Where | What Dorian is approving |
|---|---|---|---|
| a1-089 | 0:01.2–0:05.9 | Recipe 8; recipe 11 alt ending; still #20 | Faces at the long table, small but present. |
| a1-111 | 0:00–0:02 | Recipe 8 optional row; still spare | A young man walking between the two rows — orientation unknown. |
| a1-186 | 0:05–0:09 | Recipe 6 | Trainee's face at the pads. |
| a1-070 | 0:08–0:12 | Recipe 6 | Face to camera in the ice pool; age estimate ~20, confirm. |
| a1-175 | 0:10–0:14 | Recipe 1 upgrade | Two young men on the bus, one cheering "I'm gonna bring my dad!" — faces and a voice. |
| a1-197 | 0:02–0:03 | Recipe 4 option | Archer spins to camera and yells. |
| a1-183 | 0:02–0:04 | not used | Archer turns to profile. (0:00–0:02, from behind, is a GREEN spare for recipe 4.) |
| a1-189 | 0:07–0:13, 0:16–0:19 | not used | Line of teens with loaded backpacks on the trail — great Call imagery if faces are unreadable; the bag-check audio is not for the public. |
| a1-192 | 0:00–0:15 | audio only, not used | Young children face the activity; the AUDIO "Am I allowed to tackle people?" — "Yes!" (0:05–0:08) is a usable natural-sound bed over GREEN visuals if the lead wants it. |
| a1-203 | 0:00–0:11 | not used | Teens planning a water-gun quest on the path; faces at distance and in profile; their voices are not used. |
| a1-128 | 0:00–0:03 | avoided in recipe 9 | Child holding the tarp pole, centre frame. |
| a1-182 | 0:00–0:05 | not used | Young men on the beach facing the water; 0:05–0:06 (a man looking out to sea, back turned) is GREEN but 1 s. |
| a1-075 | 0:00–0:17 | Recipe 6, 12 optional | Not a face issue — confirm push-ups are not The Push, and spectators unreadable. |

## (c) ffmpeg recipes (generic, reuse per clip)

Two-pass approach: trim and normalise every segment to identical parameters first, then concatenate with stream copy. `IN`/`OUT` are the source times from the tables; `-ss` before `-i` seeks fast, `-to` is then relative to the seek. Add `-an` to any circle clip (a1-172, a1-201, a1-138) and to a1-070.

**9:16 segment — centre crop, 1080×1920, 30 fps, libx264 CRF 22, faststart**

```bash
ffmpeg -y -ss IN -to OUT -i SRC.mp4 \
  -vf "crop=ih*9/16:ih:(iw-ih*9/16)/2:0,scale=1080:1920:flags=lanczos,fps=30,format=yuv420p" \
  -c:v libx264 -preset slow -crf 22 -g 60 -fps_mode cfr \
  -c:a aac -b:a 160k -ar 48000 -movflags +faststart seg-01.mp4
```

Framing variants for the third `crop` argument (x offset; `cw = ih*9/16`):

```
left bias     crop=ih*9/16:ih:0:0
25 % left     crop=ih*9/16:ih:(iw-ih*9/16)*0.25:0
right bias    crop=ih*9/16:ih:(iw-ih*9/16):0
keyframed     crop=ih*9/16:ih:'(iw-ih*9/16)*min(1\,t/4)':0     # slides left→right over 4 s (a1-116)
letterbox     scale=1080:-2,pad=1080:1920:0:(1920-ih)/2:color=0x0C110D
```

**16:9 segment — 1920×1080, 30 fps (letterboxes any odd aspect on the site's canvas colour)**

```bash
ffmpeg -y -ss IN -to OUT -i SRC.mp4 \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease:flags=lanczos,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=0x0C110D,fps=30,format=yuv420p" \
  -c:v libx264 -preset slow -crf 22 -g 60 -fps_mode cfr \
  -c:a aac -b:a 160k -ar 48000 -movflags +faststart seg-01.mp4
```

**Concatenate normalised segments**

```bash
printf "file '%s'\n" seg-*.mp4 > list.txt
ffmpeg -y -f concat -safe 0 -i list.txt -c copy -movflags +faststart cut.mp4
```

**Music bed under natural sound (low, no lyrics)** — mixes the concatenated cut's own audio over a bed at −18 dB, trimmed to the cut's length:

```bash
ffmpeg -y -i cut.mp4 -i bed.mp3 \
  -filter_complex "[1:a]volume=-18dB,afade=t=out:st=13:d=2[bed];[0:a][bed]amix=inputs=2:duration=first:dropout_transition=0,highpass=f=120[a]" \
  -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 160k -movflags +faststart cut-music.mp4
```

**Freeze frame**

```bash
ffmpeg -y -ss 0:03 -i SRC.mp4 -frames:v 1 -q:v 2 still.jpg
```

Notes: phone footage is often variable frame rate — `fps=30` plus `-fps_mode cfr` (older ffmpeg: `-vsync cfr`) keeps the concat in sync. Captions and the end card are best added in the editor; if you must burn them, `drawtext` with a real font path, ink `#F2EFE7` on a `#0C110D` box, accent `#E4572E` for the end card rule — never pure white. Keep the slow-motion clips (a1-116, a1-153) at native speed; they are already slow in the source.

---

## Order of work

Cut these three today; none needs an approval or a clip without scene text (except a1-220, which the lead has already trimmed for leg 1):

1. **Recipe 2 — "The Walk In"** (9:16). All GREEN, all timecodes logged, natural sound throughout. The first "Send this to a dad" clip.
2. **Recipe 4 — "One Arrow at a Time"** (9:16). All GREEN, five backs, the twang-thud chain does the editing.
3. **Recipe 11 — "One Weekend"** (16:9). GREEN base for Facebook; reuses the four landing legs inside a montage, so most of it is already trimmed.

Then recipes 3, 5 and 10 (GREEN, no confirms except a1-037). Recipes 1, 7, 9 and 12 wait on the CONFIRM rows (223, 022, 023, 059, 030, 050, 062, 229, 037) being eyeballed in the sandbox. Recipes 6 and 8 wait on Dorian.

For the September documentarian (plan §06), the gaps this edit exposed: the bus exterior at dusk from behind the queue; the walk between the two lines from behind; a clean minute of fire crackle with no voices; the kitchen from the hands down; a slow pan of loaded backpacks with no faces.
