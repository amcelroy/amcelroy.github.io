<script lang="ts">
</script>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <div class="flex flex-wrap items-center justify-between gap-4 m-3">
        <h1 class="h3">Why Historicle?</h1>
        <a
            class="btn variant-filled-primary"
            href="https://Historicle.ai"
            target="_blank"
            rel="noreferrer"
        >
            Visit Historicle.ai
        </a>
    </div>
    <p class="m-3">
        Storage is so cheap that we keep the most worthless things and lose the most important. The
        blurry photos, the invoice emails, and the throwaway posts survive; the thoughts behind them
        do not. Our digital footprint records what we generated, never why it mattered. The dreams, the people,
        the reasons, the context — that's what goes missing.
    </p>
    <p class="m-3">
        I wanted something better: a curated, contextually rich story I could choose to tell and one
        day hand to my kids and grandkids. Not just the photo of the victory, but why it mattered;
        not just the snapshot, but the pride behind it. That is the thing worth passing on, so I
        built it. Historicle.ai is my passion project, and the rest of this page is about how it got
        made.
    </p>
</div>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <h2 class="h3 m-3">Motivation</h2>
    <p class="m-3">
        We were given some time off during Christmas 2025 and
        I kept hearing about Claude Code and how it was a game changer and this seemed like the perfect project. My
        old journaling app, DayOne, worked well, but seemed like a glorified database and not something that could really
        tell my story. 
    </p>
    <p class="m-3">
        This app has been a long time in coming. I used to write NIH SBIR grants and went down a rabbit hole about
        journaling and dementia. Turns out journaling is a remarkably healthy habit. It gives people a place to reflect 
        on what we have accomplished, celebrate the small daily moments, practice gratitude for what we have and dream 
        about what we don't, work through complex emotions, and most importantly exercise memory and recall. 
    </p>
    <p class="m-3">
        A project and a motivation and a Claude Pro Max account, and I was off. <em>Claude, make me a journaling app and make no mistakes.</em>
    </p>
</div>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <h2 class="h3 m-3">The agentic workflow, the future of coding?</h2>
    <p class="m-3">
        It was a bit of a dance at first. I've been programming
        for close to 20 years across numerous languages, projects, and platforms, so it was a little hard to let go of the reins and 
        let Claude program.
    </p>
    <p class="m-3">
        Part of this whole process was learning agentic workflow, so even
        though I picked a tech stack I knew and could step in and help with, my goal was really 0 code. I wanted to see how far I could get with just the agent.
        Claude makes mistakes. So do I. Whenever I found a bug, I would throw up a git Issue and we would work through the issue together, usually adding a 
        test to prove the bug existed and then working through the fix. The test would stick around and help with regression testing.
    </p>
    <ul class="list-disc ml-8 m-3 space-y-3">
        <li>
            <strong>Plan first, code later.</strong> The project started with a plan. Fortunately, I had been thinking about what I wanted
            in a perfect journaling app for a long while. During a solo camping trip right after the break started, I refined the plan with
            Claude: phases of development, feature roadmap, and tech stack / libraries. This code markdown document was the start of the project
            and was the basis for all future work. 
        </li>
        <li>
            <strong>Strongly typed languages.</strong> I really think that catching things at compile time is just so much more efficient than
            catching things at runtime. Weakly, dynamically typed languages work great for scripting, but they feel (to me) 
            hard to scale up and test. Rust has the opposite issue, if you can assuage the compiler up front, you are 
            much more confident that the underlying code won't have a runtime error. 
        </li>
        <li>
            <strong>Git.</strong> Version control is essential for any project, but especially an agentic one. New feature? It gets a branch.
            Bugs? They get an issue ticket. Pull request? It gets a review. This was treated with good dev practices picked up from my current
            role as a software engineer, and it really helped keep the project organized and on track.
        </li>
        <li>
            <strong>Test driven development.</strong>  Another thing I've picked up from my current role is the value of test driven development. My 
            teammates have shown me the value of automated testing and CI tests. Good unit testing ensures current code passes checks, but even better
            is regression testing, new code doesn't break old code. The Rust side has roughly 2,000 tests and the front end has ~850 tests.
        </li>
        <li>
            <strong>New feature? New Plan? New Branch.</strong> Not to re-hash a couple of prior points, but Historicle has evolved and had new features
            beyond the original plan. How users can scroll through images and entries, exporting a GIF of favorites, MCP server, emotional analysis tools,
            etc. Each was a new feature that got a new plan, a new branch, new tests, and a new PR. 
        </li>
    </ul>
</div>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <h2 class="h3 m-3">From Idea to App Store</h2>
    <p class="m-3">
        Pretty wild that I went from idea to App Store in about 3 months, with all of my effort spent planning and managing Claude as a developer. Of course,
        the hard part is getting other people to use the app and find value in it, something I'm slowly working on. My wife and I are happy users and she
        has been a great help with suggesting new features and testing the app. Next steps?
    </p>
    <ul class="list-disc ml-8 m-3 space-y-3">
        <li>
            <strong>Windows Release</strong>. The app is currently only on the macOS App Store. One of the reasons is that the M-series chips
            and unified RAM make it much easier to get the local LLM working on most M-series chips with sufficient RAM. 
        </li>
        <li>
            <strong>Test. Test. Test.</strong> This app is my daily journaling app and I want to make sure it is as bug free as possible. The good
            news is that the app is very stable and issue tickets have dropped to almost 0 after 2 months. Guess that means I will have to stop
            being lazy and start...
        </li>
        <li>
            <strong>Advertise.</strong> Definitely a huge blind spot and something I need to work on. This will require an ad budget, advertising,
            etc, and it feels a little daunting. Even with 2 users, it feels like a huge success for me. 
        </li>
    </ul>   
    <p class="m-3">
        It has been a pretty wild journey kicking the tires of a modern coding LLM. The trend seems to be heading more and more into this direction
        and this project has been a great way to see how far it has come. A lot of this was just outside of my wheelhouse, SQL database management,
        local LLM models, and a few other things, so I would estimate it would have taken me about 1 year full time to build this app myself and squash
        all the bugs that have been squashed so far. With Claude,
        I was able to build a production ready app (I think it is in fantastic production shape!) in about 3 months on my nights and weekends, which is 
        pretty amazing. 
    </p>
    <p class="m-3">
        If you've made it this far and are on macOS, check out Historicle.ai and give it a try.
    </p>
    <p class="m-3">
        <a class="anchor" href="https://Historicle.ai" target="_blank" rel="noreferrer"
            >Historicle.ai</a
        > — on the macOS App Store, free demo.
    </p>
</div>
