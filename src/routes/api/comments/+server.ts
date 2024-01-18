import { comments } from '$lib/comments';
import { json } from '@sveltejs/kit';

export function GET(): Response {
	return json(comments);
	// same as: return new Response(JSON.stringify(comments), {headers: {"Content-Type":"application/json"}});
}

// export function POST(request: Reuq) {
//     console.log(request);
// }
