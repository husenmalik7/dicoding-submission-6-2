/**
 * test scenario for leaderboardsReducer
 *
 * - leaderboardReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the leaderboards when given by RECEIVE_LEADERBOARDS action
 *
 */

import { describe, it, expect } from "vitest";
import leaderboardsReducer from "./reducer";

describe("leaderboardReducer function", () => {
	it("should return the initial state when given by unknown action", () => {
		// arrange
		const initialState = [];
		const action = { type: "UNKNOWN" };
		// action
		const nextState = leaderboardsReducer(initialState, action);
		// assert
		expect(nextState).toEqual(initialState);
	});

	it("should return the leaderboards when given by RECEIVE_LEADERBOARDS action", () => {
		// arrange
		const initialState = {
			data: [],
			isLoading: true,
		};

		const action = {
			type: "RECEIVE_LEADERBOARDS",
			payload: {
				leaderboards: [
					{
						user: {
							id: "users-1",
							name: "John Doe",
							email: "john@example.com",
							avatar: "https://generated-image-url.jpg",
						},
						score: 10,
					},
					{
						user: {
							id: "users-2",
							name: "Jane Doe",
							email: "jane@example.com",
							avatar: "https://generated-image-url.jpg",
						},
						score: 5,
					},
				],
			},
		};

		// action
		const nextState = leaderboardsReducer(initialState, action);

		// assert
		expect(nextState).toEqual({
			...initialState,
			data: action.payload.leaderboards,
		});
	});
});
