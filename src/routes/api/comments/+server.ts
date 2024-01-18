import { comments, type Comment } from '$lib/comments';
import { json } from '@sveltejs/kit';
import type { RequestEvent } from '../$types';

export function GET(): Response {
	return json(comments);
	// same as: return new Response(JSON.stringify(comments), {headers: {"Content-Type":"application/json"}});
}

export async function POST({ request }: RequestEvent) {
	const body = (await request.json()) as { text: string };
	const comment: Comment = {
		id: comments.length + 1,
		text: body.text
	};
	comments.push(comment);
	return json(comments, { status: 201 });
}
