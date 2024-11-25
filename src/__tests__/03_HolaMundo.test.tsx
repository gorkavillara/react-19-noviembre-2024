import { render, screen } from "@testing-library/react"
import { beforeAll, beforeEach, describe, expect, it } from "vitest"
import HolaMundo from "../components/HolaMundo"
import { afterEach } from "node:test"


describe("Testing HolaMundo React", () => {
    beforeAll(() => {
        render(<HolaMundo />)
    })
    afterEach(() => {
        // Desmontar el render
    })
    it("renders correctly", () => {
        expect(screen).toBeDefined()
    })
    it("should have text HolaMundo", async () => {
        // screen.getByText("HolaMundo")
        await screen.findByText("HolaMundo")
    })
})