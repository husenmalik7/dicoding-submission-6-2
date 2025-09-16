/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import { describe, it, expect, afterEach, vi } from "vitest";
import {
	cleanup,
	render,
	screen,
	waitFor,
	fireEvent,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";
import RegisterInput from "./RegisterInput";

expect.extend(matchers);

describe("RegisterInput component", () => {
	afterEach(() => {
		cleanup();
	});

	it("should handle name typing correctly", async () => {
		// Arrange
		render(<RegisterInput register={() => {}} />);
		const nameInput = await screen.getByPlaceholderText("name");

		// Action
		await userEvent.type(nameInput, "nametest");

		// Assert
		expect(nameInput).toHaveValue("nametest");
	});

	it("should handle email typing correctly", async () => {
		// Arrange
		render(<RegisterInput register={() => {}} />);
		const emailInput = await screen.getByPlaceholderText("email");

		// Action
		await userEvent.type(emailInput, "emailtest");

		// Assert
		expect(emailInput).toHaveValue("emailtest");
	});

	it("should handle password typing correctly", async () => {
		// Arrange
		render(<RegisterInput register={() => {}} />);
		const passwordInput = await screen.getByPlaceholderText("password");

		// Action
		await userEvent.type(passwordInput, "passwordtest");

		// Assert
		expect(passwordInput).toHaveValue("passwordtest");
	});

	it("should call register function when register button is clicked", async () => {
		// Arrange
		const mockRegister = vi.fn();
		render(<RegisterInput register={mockRegister} />);

		const nameInput = await screen.getByPlaceholderText("name");
		await userEvent.type(nameInput, "nametest");
		const emailInput = await screen.getByPlaceholderText("email");
		await userEvent.type(emailInput, "emailtest");
		const passwordInput = await screen.getByPlaceholderText("password");
		await userEvent.type(passwordInput, "passwordtest");

		const form = screen.getByRole("form");

		fireEvent.submit(form);

		await waitFor(() => {
			expect(mockRegister).toHaveBeenCalledWith({
				name: "nametest",
				email: "emailtest",
				password: "passwordtest",
			});
		});
	});
});
