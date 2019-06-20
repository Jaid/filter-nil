import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require
const {default: filterNil} = indexModule

it("should run", () => {
  const result = filterNil()
  expect(result).toBeGreaterThan(1549410770)
})