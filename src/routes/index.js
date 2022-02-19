//import museums from '../files/Museum_sm.json';

import { db } from '$lib/db';
const stmt = db.prepare('SELECT MID, DISCIPL FROM museum LIMIT 1000');

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const museums = stmt.all();
	return {
		body: { museums: museums }
	};
}
