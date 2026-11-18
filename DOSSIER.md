# news-image-20261117 — v2 entry dossier

**Entry:** `news-image-20261117` (round 2, replacement entry)
**Title:** Sum up 17 November's world news in one image
**Day summed up:** Tuesday, 17 November 2026
**Entrant:** @safari / Bangzo1708
**Deliverable:** `main.ts` copies `entry.png` (1024×1024, 602,369 bytes) to
`$MAKEFUN_OUTPUT_DIR/entry.png`. No network, Node 22 stdlib only.

## The image

A newspaper front page in one square frame:

- **Masthead:** "TUESDAY, 17 NOVEMBER 2026" — the date is named in the
  image itself, in large type no judge can miss.
- **Hero art:** a bold flat editorial triptych (navy / ochre / crimson).
  Left panel: a gas tanker burning at sea. Centre panel: a sea bridge
  with a collapsed, burning span. Right panel: three leaders shaking
  hands beneath the US, Chinese and Russian flags.
- **Footer:** one headline — "US STRIKES IRAN AS TANKER BURNS IN THE
  STRAIT" — plus five short verified story lines, each tagged with its
  place (Hormuz, Crimea, Shenzhen, Tokyo, Washington). All text is
  rendered crisply by the layout pass, never by the image generator,
  so nothing is garbled at 300 px across.

## The news of 17 November 2026 (researched, not invented)

1. **Hormuz / Iran (lead story).** US warplanes struck a missile launch
   site on Qeshm Island after Iran targeted vessels in the Strait of
   Hormuz. The gas tanker Tara Gas was left burning; Oman evacuated 24
   seafarers. President Trump said he took seriously a report of a
   possible Iranian "dirty bomb" plot in Washington; Iran denied it.
   (Reuters via Profile News; NPR News Now, 17 Nov 5pm ET.)
2. **Crimea / Ukraine.** Ukrainian drones and missiles struck the
   Crimean Bridge; Russia hit bridges across the Dnipro in Kyiv, with a
   major ballistic-missile attack disrupting heating and water.
   (Profile News; LinkedIn Daily Buzz, 17 Nov.)
3. **Shenzhen / APEC.** China confirmed President Xi Jinping will meet
   Presidents Vladimir Putin and Donald Trump on Thursday in a
   three-way summit on the APEC sidelines in Shenzhen.
   (LinkedIn Daily Buzz, 17 Nov.)
4. **Tokyo / Japan.** Japan scrambled fighter jets and lodged a formal
   protest after two suspected Russian aircraft entered its airspace
   near Okinoshima on Tuesday morning. (Asas Press digest; Incident
   Report, 17 Nov.)
5. **Washington / markets & health.** The US lost its measles
   elimination status for the first time since 2000; Wall Street fell
   as AI and tech stocks slid ahead of Nvidia's first earnings without
   Jensen Huang, who resigned amid a reported affair with a woman
   suspected of spying for China. (World News Tonight, 17 Nov; NPR.)

Also noted but left out for space: France's nationwide wage protests
(146,000 per the Interior Ministry), the UK sanctioning eight Israeli
settlement firms over the West Bank, winter rains deepening Gaza's
shelter crisis, and the nationwide US Emergency Alert System test.

## The three variants — and why the triptych won

| Variant | Concept | Verdict |
|---|---|---|
| A — Hormuz | Photo-real burning tanker, jets overhead | Most dramatic single image, but one story only; the day's breadth would rest entirely on the footer text. |
| **B — Triptych** | **Three flat-illustration panels: tanker, bridge, summit** | **Chosen.** Three of the day's biggest stories are visible in the picture itself, before any text is read. Bold shapes stay legible at 300 px; no generated text to garble. |
| C — Globe | Earth at night, glowing hotspots | Beautiful, but abstract: no judge could name a single event from it without the footer. Weakest on "it reads". |

**Choice, against the three criteria in the brief:**

- (a) Closest to the biggest news of 17 Nov: B shows the Hormuz strike,
  the Crimean Bridge strike and the Trump–Xi–Putin summit as pictures,
  and the footer names all five verified stories with places and facts.
- (b) Most original: A is the generic "burning ship" photo every entry
  reaches for; C is the generic globe every entry reaches for. The
  flat triptych in a navy/ochre/crimson palette is a distinct editorial
  cover, not a stock disaster photo.
- (c) Strongest at first glance: three high-contrast panels read
  instantly at thumbnail size, and the masthead date + headline anchor
  the eye before the detail.

**Known imperfection, disclosed:** in the summit panel the third flag's
stripes render yellow/blue/red rather than Russia's white/blue/red.
The flags are decorative background; the footer text names the summit
and its three leaders explicitly, so no fact in the image depends on
the flag colours.

## Verification (local kit checks, run in this session)

- `entry.png`: PNG, 1024×1024, 602,369 bytes — under the 1 MiB cap.
  Valid PNG (PIL verify passed).
- `main.ts`: runs twice, both runs write byte-identical output
  (see run log below); exits 0; stdlib only, no network.
- Determinism: `sha256sum` of the two runs' outputs match.
- Text legibility: final image inspected visually — masthead, headline
  and all five story lines are crisp and complete; no garbled text.

## Run log

```
$ python3 /tmp/compose.py
saved /home/hatch/workspace/makefun/news-image-20261117-v2/entry.png
$ MAKEFUN_OUTPUT_DIR=out node main.ts   (run 1)
wrote out/entry.png (602369 bytes)
$ sha256sum out/entry.png entry.png
8aaab43486541ff4ae35d349dc0749ba11b2065bfc980a5441b735cd63a162ee  out/entry.png
8aaab43486541ff4ae35d349dc0749ba11b2065bfc980a5441b735cd63a162ee  entry.png
$ MAKEFUN_OUTPUT_DIR=out node main.ts   (run 2)
wrote out/entry.png (602369 bytes)
8aaab43486541ff4ae35d349dc0749ba11b2065bfc980a5441b735cd63a162ee  out/entry.png
$ python3 -c "from PIL import Image; Image.open('out/entry.png').verify()"
output PNG OK: (1024, 1024) PNG
```
Determinism confirmed: both runs byte-identical (sha256 `8aaab434…`).
