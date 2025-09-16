/**
 * skenario test
 *
 * - leaderboards thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { describe, beforeEach, afterEach, it, vi, expect } from "vitest";
import api from "../../utils/api";
import { asyncReceiveLeaderboards } from "./action";
import { receiveLeaderboardsActionCreator } from "./action";

const fakeLeaderboardsResponse = [
	{
		user: {
			id: "users-1",
			name: "John Doe",
			email: "john@example.com",
			avatar: "https://generated-image-url.jpg",
		},
		score: 10,
	},
];

const fakeErrorResponse = new Error("Ups, something went wrong");

describe("asyncReceiveLeaderboards thunk", () => {
	beforeEach(() => {
		api._getAllLeaderboards = api.getAllLeaderboards;
	});

	afterEach(() => {
		api.getAllLeaderboards = api._getAllLeaderboards;

		// delete backup data
		// biome-ignore lint/performance/noDelete: <explanation>
		delete api._getAllLeaderboards;
	});

	it("should dispatch action correctly when data fetching success", async () => {
		// arrange
		// stub implementation
		api.getAllLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse);

		// mock dispatch
		const dispatch = vi.fn();

		// action
		await asyncReceiveLeaderboards()(dispatch);

		// assert
		expect(dispatch).toHaveBeenCalledWith(
			receiveLeaderboardsActionCreator(fakeLeaderboardsResponse),
		);
	});

	it("should dispatch action and call alert correctly when data fetching failed", async () => {
		// arrange
		// stub implementation
		api.getAllLeaderboards = () => Promise.reject(fakeErrorResponse);
		// mock dispatch
		const dispatch = vi.fn();
		// mock alert
		window.alert = vi.fn();
		// action
		await asyncReceiveLeaderboards()(dispatch);

		// assert
		expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
	});
});
