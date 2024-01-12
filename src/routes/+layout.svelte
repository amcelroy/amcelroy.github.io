<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';

	export const prerender = true;
	export const trailingSlash = 'always';
	//export const ssr = false;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<AppRailAnchor href="/art" selected={false} name="Art">
				<svelte:fragment slot="lead">
					<Icon icon="mdi:paint-outline" style="font-size: 24px;"/>
				</svelte:fragment>
				<span>Art</span>
			</AppRailAnchor>
			<AppRailAnchor href="/tools" selected={false}>
				<svelte:fragment slot="lead">
					<Icon icon="carbon:build-tool" style="font-size: 24px;"/>
				</svelte:fragment>
				<span>Tools</span>
			</AppRailAnchor>
		</AppRail>
	</svelte:fragment>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
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
					href="contact"
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
