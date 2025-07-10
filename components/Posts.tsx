'use client';

import { useEffect, useState } from 'react';
import { Post } from '../types';
import { expandUniquePosts } from '../utils';

export default function Posts({ postId = 0, postTitle = '' }) {
	const [posts, setPosts] = useState<Post[]>([]);
	const [isFetching, setIsFetching] = useState<boolean>(false);

	useEffect(() => {
		async function fetchPosts() {
			setIsFetching(true);
			const url = new URL('posts', 'https://jsonplaceholder.typicode.com');
			if (postId > 0) {
				url.pathname += `/${postId}`;
			}
			const response = await fetch(url);
			const fetchedPosts = (await response.json()) as Post[];
			let data = Array.isArray(fetchedPosts) ? fetchedPosts : [fetchedPosts];
			const ratio = 2;
			data = expandUniquePosts(data, 2);
			setPosts(data);
			setIsFetching(false);
		}

		fetchPosts();
	}, [postId]);

	const searchPostTitle = posts.filter((p) => p.title.includes(postTitle));

	if (searchPostTitle.length <= 0) {
		return <p className="pt-10 text-lg font-semibold">No any post exists</p>;
	}

	return (
		<div className="mt-10">
			<h1 className="text-2xl mb-4 font-black">
				Posts({searchPostTitle.length}):
			</h1>
			{isFetching ? (
				'Fetching posts....'
			) : (
				<div className="space-y-4 ">
					{searchPostTitle.length > 0 &&
						searchPostTitle.map((post) => (
							<div
								key={post.id}
								className="border-b-2 border-gray-300 pb-2">
								<p>
									<span className="text-lg font-bold">ID:</span>{' '}
									<span>{post.id}</span>
								</p>
								<h2>
									<span className="text-lg font-bold">Title:</span>{' '}
									<span>{post.title}</span>
								</h2>
								<p>
									<span className="text-lg font-bold">Content:</span>{' '}
									<span>{post.body}</span>
								</p>
							</div>
						))}
				</div>
			)}
		</div>
	);
}
