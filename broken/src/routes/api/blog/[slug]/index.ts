import { json } from "solid-start/api";

const sleep = (m: number) => new Promise(r => setTimeout(r, m))

// @ts-ignore
export async function GET({ params }) {
	const { slug } = params;
	await sleep(1000);
	return json({
		slug,
	});
}