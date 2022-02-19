//import museums from '../files/Museum_sm.json';

import { db } from '$lib/db';
import { maxPages, museumsPerPage } from '$lib/constants';
const stmt = db.prepare('SELECT MID, DISCIPL FROM museum LIMIT ?, ?');

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	const page = params.page;

	if (!(page > 0 && page <= maxPages)) {
		return {
			status: 404
		};
	}

	const museums = stmt.all(museumsPerPage * (page - 1), museumsPerPage);
	return {
		body: { museums, page }
	};
}
