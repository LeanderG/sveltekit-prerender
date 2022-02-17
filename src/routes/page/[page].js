//import museums from '../files/Museum_sm.json';

import { db } from '$lib/db';
const stmt = db.prepare('SELECT MID, DISCIPL FROM museum LIMIT ?, ?');

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ request, params }) {
	const page = params.page;

	if (!(page > 0 && page <= 40)) {
		return {
			status: 404
		};
	}

	const museums = stmt.all(100 * page, 100 * (page - 1));
	return {
		body: { museums, page }
	};
}
