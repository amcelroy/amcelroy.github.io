<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <h1 class="m-3">Game of Life: setup</h1>
    <p class="m-3">
        The panel has no keyboard, so it gets onto your network through your phone. The first time it powers up
        with no network saved, it puts up its own WiFi network and shows you what to do. The simulation keeps
        running the whole time.
    </p>
</div>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <h2 class="m-3">Connect it</h2>
    <ol class="list-decimal ml-8 mb-4 m-3 space-y-2">
        <li>
            Plug the panel in and wait for the <code>WIFI SETUP</code> card. It shows up right away, and then once
            a minute until setup is done.
        </li>
        <li>
            On your phone or laptop, join the WiFi network named on the card. It looks like
            <code>gol-setup-a6bc</code>. The last four characters are different on every panel. This network has
            no password.
        </li>
        <li>
            A sign-in page should open by itself. If it doesn't, open a browser and go to the address on the card
            (for example <code>192.168.71.1</code>).
        </li>
        <li>
            Pick your home network from <strong>Nearby networks</strong>, or type its name, enter the password,
            and tap <strong>Connect</strong>.
        </li>
        <li>
            The setup network goes away and your phone switches back to its usual WiFi. The panel shows
            <code>CONNECTING</code>, then <code>ONLINE</code> with its address.
        </li>
    </ol>
</div>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <h2 class="m-3">Find it afterwards</h2>
    <p class="m-3">
        When the panel is online, open <code>http://gol.local</code> from any device on the same network. If you
        have more than one panel, use the name with its four characters, like <code>http://gol-a6bc.local</code>.
        The <code>ONLINE</code> card also shows the panel's IP address, which works when <code>.local</code>
        names don't. That's common on Android.
    </p>
    <p class="m-3">
        If you missed the card or forgot the name, unplug the panel and plug it back in. The <code>ONLINE</code>
        card comes up again as soon as it reconnects.
    </p>
</div>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <h2 class="m-3">Settings</h2>
    <p class="m-3">
        The page at <code>gol.local</code> shows the panel live and holds all of its settings. Changes apply right
        away and are kept through a power cut.
    </p>
    <ul class="list-disc ml-8 mb-4 m-3 space-y-2">
        <li>
            <strong>Weather.</strong> Enter your city or postal code and click <strong>set location</strong>. This
            also sets the panel's time zone, so do it first. The clock and quiet hours depend on it.
        </li>
        <li>
            <strong>Brightness and rate.</strong> Brightness sets how bright the panel is. Rate sets how many
            generations it runs per second.
        </li>
        <li>
            <strong>Quiet hours.</strong> Choose a start and end time and whether the panel goes dark or just dims
            during them, then click <strong>save</strong>. To wake the panel during quiet hours, click
            <strong>wake now</strong> or tap the button on the back. It stays on until that night's quiet hours are
            over.
        </li>
        <li>
            <strong>Patterns and rules.</strong> Pick a starting pattern, or try a different rule such as HighLife
            or Day &amp; Night. Conway is the classic Game of Life. You can also type your own rule in
            <code>B3/S23</code> form: the numbers after B are how many neighbors bring a dead cell to life, and the
            numbers after S are how many keep a living cell alive.
        </li>
    </ul>
</div>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <h2 class="m-3">Firmware updates</h2>
    <p class="m-3">
        The panel checks for new firmware every time it starts up, but it never installs anything until you say
        so. The bottom of the <code>gol.local</code> page shows which version it's running and whether there's an
        update.
    </p>
    <ol class="list-decimal ml-8 mb-4 m-3 space-y-2">
        <li>Click <strong>check for update</strong>, then <strong>download update</strong>.</li>
        <li>When the download is done, click <strong>reboot into update</strong>. The panel restarts.</li>
    </ol>
    <p class="m-3">
        The panel keeps the old version as well as the new one. If the new version doesn't run properly in its
        first minute, the panel goes back to the old one the next time it restarts. If an update ever looks
        stuck, unplug the panel and plug it back in.
    </p>
</div>

<div class="shadow border m-8 rounded-lg variant-glass-surface p-2">
    <h2 class="m-3">If something goes wrong</h2>
    <ul class="list-disc ml-8 mb-4 m-3 space-y-2">
        <li>
            <strong>Your network isn't in the list.</strong> The panel only uses 2.4&nbsp;GHz WiFi. If your router
            has separate 2.4 and 5&nbsp;GHz networks, choose the 2.4&nbsp;GHz one. If it combines them under one
            name, that name should still work.
        </li>
        <li>
            <strong><code>CANT CONNECT</code> appears.</strong> The network name or password was probably wrong.
            The panel goes back into setup mode, so start again from step 2.
        </li>
        <li>
            <strong>The power went out.</strong> You don't need to do anything. The panel tries your saved network
            for about a minute so the router has time to come back. If it still can't connect after that, it
            forgets the network and goes back into setup mode.
        </li>
        <li>
            <strong>You changed your WiFi or moved the panel.</strong> Hold the button on the back (SW2) for three
            seconds. The panel shows <code>NETWORK FORGOTTEN</code>, restarts, and comes back in setup mode. A
            short press only skips to the next pattern.
        </li>
    </ul>
</div>

<style>
    code {
        color: orange;
        font-family: 'Fira Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
    }
</style>
