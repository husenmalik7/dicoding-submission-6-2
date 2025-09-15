/**
 * skenario test
 *
 * - threads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { describe, beforeEach, afterEach, it, vi, expect } from "vitest";
import api from "../../utils/api";
import { asyncReceiveThreads } from "./action";
import { receiveThreadsActionCreator } from "./action";

const fakeThreadsResponse = [
	{
		id: "thread-1",
		title: "Thread Pertama",
		body: "Ini adalah thread pertama",
		category: "General",
		createdAt: "2021-06-21T07:00:00.000Z",
		ownerId: "users-1",
		upVotesBy: [],
		downVotesBy: [],
		totalComments: 0,
	},
];

const fakeErrorResponse = new Error("Ups, something went wrong");

describe("asyncReceiveThreads thunk", () => {
	beforeEach(() => {
		api._getAllThreads = api.getAllThreads;
	});

	afterEach(() => {
		api.getAllThreads = api._getAllThreads;

		// delete backup data
		// biome-ignore lint/performance/noDelete: <explanation>
		delete api._getAllThreads;
	});

	it("should dispatch action correctly when data fetching success", async () => {
		// arrange
		// stub implementation
		api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);

		// mock dispatch
		const dispatch = vi.fn();

		// action
		await asyncReceiveThreads()(dispatch);

		// assert
		expect(dispatch).toHaveBeenCalledWith(
			receiveThreadsActionCreator(fakeThreadsResponse),
		);
	});

	it("should dispatch action and call alert correctly when data fetching failed", async () => {
		// arrange
		// stub implementation
		api.getAllThreads = () => Promise.reject(fakeErrorResponse);
		// mock dispatch
		const dispatch = vi.fn();
		// mock alert
		window.alert = vi.fn();
		// action
		await asyncReceiveThreads()(dispatch);

		// assert
		expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
	});
});
