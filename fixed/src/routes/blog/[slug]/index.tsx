import { RouteDataArgs, createRouteData, useIsRouting } from 'solid-start';
import { Show } from 'solid-js';
import { BlogItemPage } from '~/components/BlogItemPage';

function getStolidURL(path = '') {
	return `${import.meta.env.VITE_SOLID_URL || 'http://localhost:3000'}${path}`;
}

export async function fetchSolidAPI(path: string, urlParamsObject = {}, options = {}) {
	// Merge default and user options
	const mergedOptions = {
		headers: {
			"Content-Type": "application/json",
		},
		...options,
	};

	// Build request URL
	const requestUrl = `${getStolidURL(`${path}`)}`;

	// Trigger API call
	const response = await fetch(requestUrl, mergedOptions);

	// Handle response
	if (!response.ok) {
		console.error(response.statusText);
		throw new Error(`An error occurred please try again`);
	}
	const data = await response.json();
	return data;
}

export function routeData(props: RouteDataArgs) {
	const { params } = props;
	return createRouteData(async (key) => {
		try {
			const path = `/api/blog/${key[1]}`;
			return fetchSolidAPI(path);
		} catch (error) {
			console.error(error);
		}
	}, {
		key: () => ["blog", params.slug]
	});
}

export default function Page() {
	const isRouting = useIsRouting();

	return (
		<Show when={!isRouting()} fallback={<div></div>}>
			<BlogItemPage />
		</Show>
	);
}
