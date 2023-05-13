import { useRouteData } from 'solid-start';
import { routeData } from '~/routes/blog/[slug]';
import { createEffect, Suspense } from 'solid-js';

export const BlogItemPage = () => {
	const data = useRouteData<typeof routeData>();

	createEffect(() => {
		console.log('data() = ', data());
	});

	createEffect(() => {
		console.log('data.state = ', data.state);
	});

	createEffect(() => {
		console.log('data.loading = ', data.loading);
	});

	return (
		<div>
			<div>
				<Suspense fallback={<div>Data loading...</div>}>
					<p>slug: {data()?.slug}</p>
				</Suspense>
			</div>
		</div>
	);
}