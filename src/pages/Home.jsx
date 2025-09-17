import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveThreads } from "../states/threads/action";
import { asyncReceiveUsers } from "../states/users/action";

import ThumbsUpIcon from "../assets/icons/ThumbsUpIcon";
import ThumbsDownIcon from "../assets/icons/ThumbsDownIcon";
import CommentIcon from "../assets/icons/CommentIcon";
import PlusIcon from "../assets/icons/PlusIcon";

function Home() {
	const { data: threads, isLoading } = useSelector((state) => state.threads);
	const authUser = useSelector((state) => state.authUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(asyncReceiveThreads());
		dispatch(asyncReceiveUsers());
	}, [dispatch]);

	if (isLoading) return <p>Loading...</p>;

	return (
		<div className="p-8">
			<h2 className="mb-4 text-2xl font-medium">Diskusi Tersedia</h2>

			{threads.map((thread, index) => (
				<div key={index} className="pb-4">
					<p className="w-fit rounded-lg border-1 p-1 text-sm">
						#{thread.category}
					</p>

					<Link
						to={`/threads/${thread.id}`}
						className="text-xl font-medium text-blue-600 visited:text-purple-600"
					>
						{thread.title}
					</Link>

					<p
						className="line-clamp-2"
						dangerouslySetInnerHTML={{ __html: thread.body }}
					/>
					<div className="flex items-center gap-2.5">
						<div className="flex items-center gap-1">
							<ThumbsUpIcon />
							<p>{thread.upVotesBy.length}</p>
						</div>

						<div className="flex items-center gap-1">
							<ThumbsDownIcon />
							<p>{thread.downVotesBy.length}</p>
						</div>

						<div className="flex items-center gap-1">
							<CommentIcon />
							<p>{thread.totalComments}</p>
						</div>

						<p>{thread.postedAt}</p>
						<p>Dibuat oleh {thread.ownerName}</p>
					</div>
					<hr className="mt-4" />
				</div>
			))}

			{authUser ? (
				<button
					type="button"
					onClick={() => navigate("/new")}
					className="fixed right-8 bottom-16 cursor-pointer text-5xl"
				>
					<PlusIcon />
				</button>
			) : (
				<></>
			)}
		</div>
	);
}

export default Home;
