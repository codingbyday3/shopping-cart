import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Card from "./Card"
import { describe, it, expect} from "vitest"

describe("Card component", ()=>{
    it("increment and decrement input value", async () =>{
        render(<Card item={{}} />)

        const input = screen.getByLabelText("quantity")
        const incrementBtn = screen.getByText("+")
        const decrementBtn = screen.getByText("-")

        expect(input.value).toBe("1")

        await userEvent.click(incrementBtn)
        expect(input.value).toBe("2")

        await userEvent.click(decrementBtn)
        expect(input.value).toBe("1")


    })
})