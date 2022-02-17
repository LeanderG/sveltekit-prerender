import { db } from '$lib/db';
const stmt = db.prepare('SELECT * FROM museum WHERE MID = ?');
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	const item = stmt.get(params.id);
	if (item) {
		return {
			body: { item }
		};
	}

	return {
		status: 404
	};
}
