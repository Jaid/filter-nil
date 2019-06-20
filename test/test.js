import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require
const {default: filterNil} = indexModule

it("should run", () => {
  const result = filterNil(["a", null, "b", , "c", undefined, "d"]) // eslint-disable-line no-sparse-arrays
  expect(result).toStrictEqual(["a", "b", "c", "d"])
})