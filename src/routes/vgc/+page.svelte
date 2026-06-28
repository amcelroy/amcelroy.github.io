<script lang="ts">
    import PictureScroll from '$lib/PictureScroll.svelte';

    // Screenshot gallery.
    const screenshots = [
        new URL('./images/find_01.webp', import.meta.url).href,
        new URL('./images/find_02.webp', import.meta.url).href,
        new URL('./images/find_03.webp', import.meta.url).href,
        new URL('./images/find_04.webp', import.meta.url).href,
        new URL('./images/find_05.webp', import.meta.url).href,
        new URL('./images/find_06.webp', import.meta.url).href,
        new URL('./images/find_07.webp', import.meta.url).href,
        new URL('./images/find_08.webp', import.meta.url).href,
        new URL('./images/find_09.webp', import.meta.url).href,
        new URL('./images/find_10.webp', import.meta.url).href,
    ];
</script>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <div class="flex flex-wrap items-center justify-between gap-4 m-3">
        <h1 class="h3">Why Virtual Geocache?</h1>
    </div>
    <p class="m-3">
        Virtual Geocache is an AR treasure hunt for the real world. You walk a real map, your phone
        guides you warmer/colder toward hidden 3D objects, and when you arrive you see them rendered
        into the world through your camera — then you can capture, collect, and share what you find.
        It is a huge departure from my previous projects in machine learning image recognition, OCT, 
        embedded systems, GPU computing, and mixed signal circuit design.
    </p>
    <p class="m-3">
        Hiding caches is a blast. When I'm on an MTB ride in the Greenbelt, a hike in South Austin, or biking on
        the coast of San Francisco, I can just drop a virtual cache at a neat vista or interesting location and maybe
        others will enjoy finding it.
    </p>
</div>

<PictureScroll urls={screenshots} />

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <h2 class="h3 m-3">Motivation</h2>
    <p class="m-3">
        Virtual Geocache started life as an iOS prototype back in 2021/22, then
        sat dormant until June 2026. The core loop worked once — walk to a spot, see a 3D object
        in AR, and take a photo. It was a hot mess. We were just coming off a grant using Flutter, and another grant
        using Django (my first real database project), so the prototype was a Flutter app with a Django backend. That was
        a pretty bad combination. I didn't know much about scaling something like this out, hosting it, etc. So there were
        a lot of questionable choices.
    </p>
    <p class="m-3">
        Fast forward to 2026, I've been watching and learning my current company's web stack and learned enough that I thought
        Claude and I could give it a shot. This one has come together faster than Historicle, with arguably a more complex stack.
        Either I'm getting better at this or Claude is about to replace me, or maybe a bit of both.
    </p>
    <p class="m-3">
        This app may be a waste of time and resources, but I've been kicking it around for a very, very long time, since I could first
        bitblt a model onto a camera screen back in 2012. Hopefully others like it if I can get some caches hidden in other cities.
    </p>
</div>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <h2 class="h3 m-3">Resurrecting it the agentic way</h2>
    <ul class="list-disc ml-8 m-3 space-y-3">
        <li>
            <strong>One language.</strong> The whole thing is TypeScript in a pnpm +
            Turborepo monorepo — an Expo / React Native mobile app, a Next.js web app for shareable
            SEO-friendly "find" pages, and a Node server, all sharing the same <code>packages/</code>
            for types, geo math, validation, and a typed API client. Replacing Flutter/Dart actually
            <em>removed</em> a language rather than adding one. This is a lot different from Historicle (Rust + TypeScript),
            or other polyglot projects that I've done. I rather liked it and will 100% head down this route again for an
            app / web / server project.
        </li>
        <li>
            <strong>User flexibility.</strong> GPS is freaking amazing but isn't perfect. The balance is hiding a cache at a vista,
            getting a user close to it, and letting them find it in AR. The AR / GPS combo is not yet good enough to hide a cache
            behind or under real world objects, so the solution was to get the user in the ballpark, a few meters away, using haptic 
            feedback to guide them, hot / cold style, so the user can be aware of their surroundings and not turn an ankle or fall
            into poison ivy. Once there, the cache is rendered in AR and the user needs to find it, but after they have found it, they 
            can move it around in AR to get a better photo. Scale it, rotate it, move it "farther" or "closer" to get a better shot.
            Once found, they can also re-render the cache anywhere in the world, like a collectable they can take with them. 
        </li>
        <li>
            <strong>A composable cache schema.</strong> Instead of the old rigid record, a cache is a
            <em>type</em> plus composable capabilities — it can be "seasonal + lens-gated + skybox" all
            at once. I would like to eventually do things like stories, choose your own adventure, and other narrative experiences
            that geocaching can't provide, and this schema is a good foundation for that.
        </li>
        <li>
            <strong>API-first, cloud-cheap.</strong> The backend runs stateless on Cloud Run (my first approach used an always-on App Engine),
            backed by Firestore and Firebase Auth, with gated contributor roles. Mobile, web, and the model ingestion pipeline are all just
            clients of one typed API.
        </li>
        <li>
            <strong>Good dev hygiene throughout.</strong> New feature, new branch, new tests, new PR. Tons of issue tickets that break
            things up into ~500 line PRs I can review and merge. Git is just such an amazing tool to help Claude (and me) stay focused and organized. 
            Pre-commit hooks run lint-staged + typecheck + tests, and CI runs the full set
            including the Firebase emulator suite on every PR, going into continuous deployment via managed Docker
            build deployed in to Cloud Run. These are the same practices we use and I observe used at work, with slightly
            different tools.
        </li>
    </ul>
    <a
        href="https://virtualgeocache.com"
        target="_blank"
        rel="noreferrer"
        class="btn variant-filled-primary m-3"
    >
        Visit virtualgeocache.com
    </a>
</div>
