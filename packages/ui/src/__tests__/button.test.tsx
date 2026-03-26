import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../components/primitives/button";

afterEach(() => cleanup());

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  describe("loading state", () => {
    it("shows spinner when loading", () => {
      render(<Button loading>Save</Button>);
      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    it("disables button when loading", () => {
      render(<Button loading>Save</Button>);
      expect(screen.getByRole("button")).toBeDisabled();
    });

    it("sets aria-busy when loading", () => {
      render(<Button loading>Save</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("aria-busy", "true");
    });

    it("does not set aria-busy when not loading", () => {
      render(<Button>Save</Button>);
      expect(screen.getByRole("button")).not.toHaveAttribute("aria-busy");
    });

    it("prevents click events when loading", async () => {
      const onClick = vi.fn();
      render(<Button loading onClick={onClick}>Save</Button>);
      await userEvent.click(screen.getByRole("button"));
      expect(onClick).not.toHaveBeenCalled();
    });

    it("replaces children with loadingText when provided", () => {
      render(<Button loading loadingText="Saving…">Save</Button>);
      expect(screen.getByRole("button")).toHaveTextContent("Saving…");
    });

    it("keeps original children visible when no loadingText", () => {
      render(<Button loading>Save</Button>);
      expect(screen.getByRole("button")).toHaveTextContent("Save");
    });

    it("shows only spinner for icon size when loading", () => {
      render(<Button loading size="icon">★</Button>);
      const button = screen.getByRole("button");
      expect(screen.getByRole("status")).toBeInTheDocument();
      expect(button).not.toHaveTextContent("★");
    });

    it("shows only spinner for icon-sm size when loading", () => {
      render(<Button loading size="icon-sm">★</Button>);
      const button = screen.getByRole("button");
      expect(screen.getByRole("status")).toBeInTheDocument();
      expect(button).not.toHaveTextContent("★");
    });
  });
});
