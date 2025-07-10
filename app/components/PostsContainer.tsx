'use client';

import { useState } from 'react';
import Posts from './Posts';

export default function PostsContainer() {
	const [postId, setPostId] = useState<number>(0);
	const [postTitle, setPostTitle] = useState<string>('');

	return (
		<>
			<div className="flex gap-10">
				<div className="space-x-5">
					<label htmlFor="postTitle">Post title</label>
					<input
						type="text"
						name="postTitle"
						id="postTitle"
						className="border-2 rounded-sm p-2 w-54"
						onInput={(e) => setPostTitle((e.target as HTMLInputElement).value)}
					/>
				</div>
				<div className="space-x-5">
					<label htmlFor="postId">Post id</label>
					<input
						min={1}
						max={100}
						defaultValue={0}
						onInput={(e) => setPostId(+(e.target as HTMLInputElement).value)}
						className="border-2 rounded-sm p-2 w-54"
						type="number"
						name="postId"
						id="postId"
					/>
				</div>
			</div>
			<Posts
				postId={postId}
				postTitle={postTitle}
			/>
		</>
	);
}
