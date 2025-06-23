<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';

	export const prerender = true;
	export const trailingSlash = 'always';

	import { page } from '$app/stores';
	//export const ssr = false;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
				<svelte:fragment slot="lead">
					<Icon icon="solar:home-outline" style="font-size: 24px;"/>
				</svelte:fragment>
				<span>Home</span>
			</AppRailAnchor>
			<AppRailAnchor href="/quotes" selected={$page.url.pathname === '/quotes'}>
				<svelte:fragment slot="lead">
					<Icon icon="jam:message-writing" style="font-size: 24px;"/>
				</svelte:fragment>
				<span>Quotes</span>
			</AppRailAnchor>
			<AppRailAnchor href="/dotstar" selected={$page.url.pathname === '/dotstar'}>
				<svelte:fragment slot="lead">
					<Icon icon="material-symbols:stars-rounded" style="font-size: 24px;"/>
				</svelte:fragment>
				<span>dotstar-rs</span>
			</AppRailAnchor>
			<AppRailAnchor href="/projects" selected={$page.url.pathname === '/projects'}>
				<svelte:fragment slot="lead">
					<Icon icon="octicon:project-symlink-16" style="font-size: 24px;"/>
				</svelte:fragment>
				<span>Projects</span>
			</AppRailAnchor>
			<AppRailAnchor href="/art" selected={$page.url.pathname === '/art'}>
				<svelte:fragment slot="lead">
					<Icon icon="mdi:paint-outline" style="font-size: 24px;"/>
				</svelte:fragment>
				<span>Art</span>
			</AppRailAnchor>
			<AppRailAnchor href="/raptoros" selected={$page.url.pathname === '/raptoros'}>
				<svelte:fragment slot="lead">
					<Icon icon="game-icons:velociraptor" style="font-size: 24px;"/>
				</svelte:fragment>
				<span>RaptorOS</span>
			</AppRailAnchor>
			<AppRailAnchor href="/dads" selected={$page.url.pathname === '/dads'}>
				<svelte:fragment slot="lead">
					<Icon icon="gis:contour-map" style="font-size: 24px;"/>
				</svelte:fragment>
				<span>Dad's Project</span>
			</AppRailAnchor>
		</AppRail>
	</svelte:fragment>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<img alt="logo" src="/logo.png" width=32 height=23/>
				<strong class="text-xl uppercase">Austin McElroy, M.S.E.E</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/resume"
					target="_self"
					rel="noreferrer"
				>
					<Icon icon="mdi:resume" style="font-size: 24px;"/>
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://scholar.google.com/citations?user=Z86_VtYAAAAJ&hl=en"
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon="academicons:google-scholar" style="font-size: 24px;"/>
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://stackoverflow.com/users/2521274/austin"
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon="logos:stackoverflow-icon" style="font-size: 24px;"/>
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/amcelroy"
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon="mdi:github" style="font-size: 24px;"/>
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/contact"
					target="_self"
					rel="noreferrer"
				>
					<Icon icon="teenyicons:contact-outline" style="font-size: 24px;"/>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
