<script lang="ts">
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';
    import Icon from '@iconify/svelte';

    let mapTab = 0;
</script>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <div class="flex flex-wrap items-center justify-between gap-4 m-3">
        <h1 class="h3">Dad's Project — Vietnam Helicopter Pilot Memorial Map</h1>
    </div>
    <p class="m-3">
        My dad flew helicopters in Vietnam as a combat pilot during the war after graduating from Texas A&M, 
        and for years he has been part of the Vietnam Helicopter Pilots
        Association's long effort to put every U.S. helicopter loss from the war on a map. The
        underlying database is the work of decades of volunteers: people filing Freedom of
        Information Act requests, cross-checking incident reports, and reconciling rosters, going
        back roughly fifty years. The idea of plotting all of it geographically goes back to a
        "Memory Map" proposal in 2010, and it kept stalling out for the usual reason: nobody had the
        time or the tooling to actually build it.
    </p>
    <p class="m-3">
        This page used to be a Google My Maps iframe, the first version of that idea as Dad worked hard taking GIS
        classes and massaging the data into a single spreadsheet that could be used via Google Earth.
        It hit a
        ceiling, mainly that all of the information lived on my father's computer, and in July of 2026 we 
        replaced it with a real application at
        <a href="https://vhpmm.com" target="_blank" rel="noreferrer" class="anchor">vhpmm.com</a>.
        It was a great project to work on with my father, he brings the domain knowledge, the VHPA relationships, and
        fifty years of context about what these records actually mean. I bring the engineering with a lot of skills that
        I have picked up at my job the last few years on full stack development, CI, test driven development, and cloud
        architecture. 
    </p>
    <a
        href="https://vhpmm.com"
        target="_blank"
        rel="noreferrer"
        class="btn variant-filled-primary m-3"
    >
        Visit vhpmm.com
    </a>
</div>

<!-- Live map, with the original My Map kept around for posterity. -->
<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <TabGroup>
        <Tab bind:group={mapTab} name="map-tab" value={0}>
            <svelte:fragment slot="lead"><Icon icon="gis:map" /></svelte:fragment>
            <span>vhpmm.com — live map</span>
        </Tab>
        <Tab bind:group={mapTab} name="map-tab" value={1}>
            <svelte:fragment slot="lead"><Icon icon="gis:contour-map" /></svelte:fragment>
            <span>The original Google My Map</span>
        </Tab>
        <svelte:fragment slot="panel">
            {#if mapTab === 0}
                <iframe
                    src="https://vhpmm.com/embed"
                    class="live-map rounded-lg"
                    title="Vietnam Helicopter Pilot Memorial Map"
                    loading="lazy"
                ></iframe>
                <p class="m-3 text-sm opacity-75">
                    This is the map-only portion of vhpmm.com, embedded from its <code>/embed</code>
                    route. Markers are coloured and iconed by unit, deliberately matching the original
                    My Map, because the people who have been reading that map for years shouldn't have
                    to relearn it. The full site adds search across names, crews, units, and aircraft,
                    plus a page for every incident and every person —
                    <a href="https://vhpmm.com" target="_blank" rel="noreferrer" class="anchor">
                        visit vhpmm.com
                    </a>
                    for the detailed information.
                </p>
            {:else}
                <iframe
                    src="https://www.google.com/maps/d/embed?mid=1DSPPBPCcPjuzuJHF2B6FeMO2TtNds0w&ehbc=2E312F&ll=16.0,107.0&z=6"
                    class="old-map rounded-lg"
                    title="The original Google My Maps version of Dad's Project"
                    loading="lazy"
                ></iframe>
                <p class="m-3 text-sm opacity-75">
                    Kept here for posterity: the Google My Maps version that lived on this page until
                    July 2026, sourced from the spreadsheet Dad maintained by hand. Use the toggle at
                    the top-left of the map to open the legend and turn the date-range layers on and
                    off — My Maps can't be told to open it for you, which is its own small argument
                    for the rewrite.
                </p>
            {/if}
        </svelte:fragment>
    </TabGroup>
</div>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <h2 class="h3 m-3">Why the My Map had to go</h2>
    <p class="m-3">
        Google My Maps is a great tool for exactly the thing it does, and it carried this project for 
        years at a cost of zero dollars and zero maintenance.
        The problems only show up once you want the map to be a research tool instead of a picture:
    </p>
    <ul class="list-disc ml-8 m-3 space-y-3">
        <li>
            <strong>The map was the database.</strong> Every fact lived inside a pin description.
            You couldn't ask "show me every 174th AHC loss in 1968", you could only scroll and
            pick points.
        </li>
        <li>
            <strong>One pin, one record.</strong> A My Map is a flat list of features, but the real
            data isn't flat, an incident has a roster and each person on that roster has their own
            rank, status, and biography. There's no way to express "many people aboard one aircraft"
            in a pin description, so the people simply weren't represented as people.
        </li>
        <li>
            <strong>Per-layer caps forced compromises.</strong> My Maps allows a limited number of
            features per layer and a limited number of layers, so a full archive has to be sliced up
            and managed by hand — and the map gets sluggish long before you hit the ceiling. Open the
            legend on the tab above and you can see the seams: the archive is chopped into ten
            date-range layers, <em>17 Feb 60 thru 13 Aug 66.csv</em> through
            <em>23 Apr 71 thru 15 May 75.csv</em>. Those boundaries mean nothing historically, they're
            just where the row limit fell. Ask "show me every loss this unit took" and you're ticking
            ten checkboxes and comparing them by eye.
        </li>
        <li>
            <strong>Editing didn't scale past one person.</strong> Corrections arrive constantly on a
            dataset like this. Hand-editing and single source of truth as an Excel spreadsheet 
            is fine for one person, but it doesn't scale past that.
        </li>
    </ul>
    <p class="m-3">
        So the goal for the rewrite wasn't "a nicer map." It was to make the data a first-class
        thing, give every incident and every person a real URL.
    </p>
</div>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <h2 class="h3 m-3">Focus on the data, not necessarily the map</h2>
    <p class="m-3">
        Dad's spreadsheet is hand-maintained and authoritative for coordinates, aircraft type,
        service branch, and Wall of Faces photo links, but its casualty cells are free text, written
        by many different people over many years, in no consistent format. Meanwhile vhpa.org's
        incident pages carry the same rosters in a much cleaner line-delimited form, plus per-pilot
        biographies and an incident narrative, but not easily mappable coordinates.
    </p>
    <p class="m-3">
        So the importer is a hybrid: parse the spreadsheet, enrich each incident from cached vhpa.org data, 
        and merge. Everything is validated against
        <code>zod</code> schemas on the way through.
    </p>
    <p class="m-3">
        Small thing that turned out to matter: the schema carries a <code>conflictId</code> from day
        one. Nothing about the architecture is Vietnam-specific, so the same archive or architecture can grow to
        other wars if anyone ever wants it to.
    </p>
</div>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <h2 class="h3 m-3">Architecture</h2>

    <h3 class="h4 m-3 opacity-90">Ingest — run on demand, not in the request path</h3>
    <div class="m-3 overflow-x-auto">
        <div class="flow">
            <div class="stage">
                <div class="stage-label">Sources</div>
                <div class="node">
                    <strong>VHPAdatabase.xlsx</strong>
                    <span>coordinates · aircraft · branch · VVMF photo links</span>
                </div>
                <div class="node">
                    <strong>vhpa.org</strong>
                    <span>rosters · pilot bios · incident narrative</span>
                </div>
            </div>
            <div class="arrow"><Icon icon="mdi:chevron-right" /></div>
            <div class="stage">
                <div class="stage-label">@vhpa/ingest + importer</div>
                <div class="node accent">
                    <strong>parse → enrich → merge</strong>
                    <span>pure parsers · HTTP cache · zod validation · deterministic ids</span>
                </div>
                <div class="node muted">
                    <strong>review workbook</strong>
                    <span>every unmatched name → human adjudication</span>
                </div>
            </div>
            <div class="arrow"><Icon icon="mdi:chevron-right" /></div>
            <div class="stage">
                <div class="stage-label">Firestore</div>
                <div class="node">
                    <strong>incidents</strong>
                    <span>one doc per loss · geohash for radius queries</span>
                </div>
                <div class="node">
                    <strong>people</strong>
                    <span>one doc per person · denormalized incident context</span>
                </div>
            </div>
        </div>
    </div>

    <h3 class="h4 m-3 opacity-90">Runtime + delivery</h3>
    <div class="m-3 overflow-x-auto">
        <div class="flow">
            <div class="stage">
                <div class="stage-label">Source</div>
                <div class="node">
                    <strong>GitHub — PR only</strong>
                    <span>build · typecheck · lint · unit tests · Firestore emulator suite · gitleaks</span>
                </div>
            </div>
            <div class="arrow"><Icon icon="mdi:chevron-right" /></div>
            <div class="stage">
                <div class="stage-label">Deploy on merge</div>
                <div class="node muted">
                    <strong>Workload Identity Federation</strong>
                    <span>no service-account keys · <code>gcloud run deploy --source .</code></span>
                </div>
            </div>
            <div class="arrow"><Icon icon="mdi:chevron-right" /></div>
            <div class="stage">
                <div class="stage-label">Serving</div>
                <div class="node accent">
                    <strong>Next.js on Cloud Run</strong>
                    <span>us-central1 · behind Firebase Hosting + CDN</span>
                </div>
                <div class="node">
                    <strong>Mapbox GL</strong>
                    <span>satellite basemap · per-unit marker icons</span>
                </div>
                <div class="node">
                    <strong>Firebase Auth</strong>
                    <span>Google sign-in · admin custom claims · Firestore rules</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <h2 class="h3 m-3">Stack notes</h2>
    <ul class="list-disc ml-8 m-3 space-y-3">
        <li>
            <strong>One language.</strong> pnpm + Turborepo monorepo, all TypeScript:
            <code>packages/</code> for zod types, the pure ingest parsers, and the Firestore data
            layer; <code>apps/</code> for the importer CLI and the Next.js 15 / React 19 web app.
            Same shape as
            <a href="/vgc" class="anchor">Virtual Geocache</a> (without a React Native App) 
            for the same reason, sharing the
            schema between the importer and the website means a data-model change breaks the build
            instead of breaking production quietly.
        </li>
        <li>
            <strong>Admin panel over spreadsheet surgery.</strong> Google sign-in, admin custom
            claims, and an editor for incidents, rosters, unit links, and even the About page itself.
            Dad can fix a rank or add a unit history link without a deploy, a pull request, or me.
            That was the single highest-leverage feature in the whole project.
        </li>
        <li>
            <strong>Deliberate visual continuity.</strong> Marker colors and per-unit icons were
            matched to the original My Map on purpose. New tech, familiar map — the audience here is
            veterans and families, not people who enjoy relearning interfaces.
        </li>
        <li>
            <strong>Same programming hygiene as work.</strong> Branch per feature, small reviewable PRs, Husky
            pre-commit running lint-staged + typecheck + tests, CI on every PR including the Firebase
            emulator integration suite, secret scanning, and continuous deployment on merge. Roughly
            twenty PRs over about two weeks, mid-July 2026, from empty repo to live site.
        </li>
    </ul>
</div>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <a
        href="https://vhpmm.com"
        target="_blank"
        rel="noreferrer"
        class="btn variant-filled-primary m-3"
    >
        Visit vhpmm.com
    </a>
</div>

<style>
    .live-map {
        width: 100%;
        height: min(75vh, 720px);
        border: 0;
    }

    /* Smaller than the live map — it's here as an artifact, not the main event. */
    .old-map {
        width: 100%;
        height: min(45vh, 440px);
        border: 0;
    }

    /* Block diagram: horizontal on desktop, stacked on narrow screens. */
    .flow {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 0.5rem;
    }

    .stage {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        flex: 1 1 0;
        min-width: 0;
    }

    .stage-label {
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        opacity: 0.6;
    }

    .node {
        border: 1px solid rgb(var(--color-surface-500) / 0.4);
        background: rgb(var(--color-surface-500) / 0.12);
        border-radius: 0.5rem;
        padding: 0.6rem 0.75rem;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        /* Size to content — a stage with one node shouldn't stretch to match
           a stage with three. */
        flex: 0 0 auto;
    }

    .node.accent {
        border-color: rgb(var(--color-primary-500) / 0.6);
        background: rgb(var(--color-primary-500) / 0.12);
    }

    .node.muted {
        border-style: dashed;
        background: transparent;
    }

    .node strong {
        font-size: 0.9rem;
    }

    .node span {
        font-size: 0.78rem;
        opacity: 0.75;
        line-height: 1.35;
    }

    .arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.5;
        font-size: 1.5rem;
        transform: rotate(90deg);
    }

    @media (min-width: 900px) {
        .flow {
            flex-direction: row;
            align-items: stretch;
            gap: 0.75rem;
        }

        .arrow {
            transform: none;
            flex: 0 0 auto;
        }
    }
</style>
