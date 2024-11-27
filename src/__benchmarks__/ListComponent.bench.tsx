import { bench } from "vitest"
import { render } from "@testing-library/react"
import { ListComponent } from "./ListComponent"

const smallList = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`)
const mediumList = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`)
const largeList = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`)

bench("Render ListComponent (Small List)", () => {
  render(<ListComponent items={smallList} />)
})

bench("Render ListComponent (Medium List)", () => {
  render(<ListComponent items={mediumList} />)
})

bench("Render ListComponent (Large List)", () => {
  render(<ListComponent items={largeList} />)
})
