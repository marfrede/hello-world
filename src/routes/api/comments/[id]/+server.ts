import { comments } from '$lib/comments';
import { json } from '@sveltejs/kit';
import type { RequestEvent } from '../$types';

export function GET(requestEvent: RequestEvent): Response {
	const { id } = requestEvent.params as { id: string };
	return json(comments.find((c) => c.id === +id));
}

export async function PATCH(requestEvent: RequestEvent): Promise<Response> {
	const { id } = requestEvent.params as { id: string };
	const { text } = (await requestEvent.request.json()) as { text: string };
	const commentIndex = comments.findIndex((c) => c.id === +id);
	comments[commentIndex].text = text;
	return json(comments[commentIndex]);
}

export async function DELETE(requestEvent: RequestEvent): Promise<Response> {
	const { id } = requestEvent.params as { id: string };
	const commentIndex = comments.findIndex((c) => c.id === +id);
	if (commentIndex >= 0) {
		comments.splice(commentIndex, 1);
		return json(comments);
	}
	return new Response(null, { status: 404 });
}
