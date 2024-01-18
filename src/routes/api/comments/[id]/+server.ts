import { comments } from '$lib/comments';
import { json } from '@sveltejs/kit';
import type { RequestEvent } from '../$types';

export function GET(requestEvent: RequestEvent): Response {
	const { id } = requestEvent.params as { id: string };
	return json(comments.find((c) => c.id === +id));
}
