# README

# Avoid-unnecessary-rendering

Related post: https://twitter.com/mamadoudicko_/status/1633401183653228544?s=20

--

⚠️ This repo is using memoization !

💡 Memoization is a technique that can improve performance by caching the results of expensive function calls and returning the cached value when the same inputs are encountered again. However, it's important to be aware that memoization has a cost in terms of 💾 memory usage and ⏱️ computation time.

Therefore, it's recommended to use memoization thoughtfully and selectively, and not simply as a solution to prevent re-rendering in all scenarios. 🤔

When deciding whether or not to use memoization, consider the complexity and frequency of the function calls being made, as well as the potential benefits of caching the results. It's also important to keep in mind that memoization is not always necessary or appropriate, and overusing it can actually lead to performance issues.

In general, use memoization judiciously and evaluate its benefits and drawbacks on a case-by-case basis. ⚖️

Use it wisely

## Running on localhost

Install dependencies:

`pnpm install`

Run:

`pnpm dev`

Move to `feat/memoization-example` for memoization example

Move to `feat/use-ref-example` for useRef example
