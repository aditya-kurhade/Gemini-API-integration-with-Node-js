# Gemini API integration with Node.js

Small demo showing how to call Google's Gemini (Generative AI) package from Node.js.

## Repository contents

- `main.js` — simple example that loads a Gemini model and generates text from a prompt.
- `list_models.js` — example that calls the Generative Language REST endpoint to list available models.
- `package.json` — lists dependencies used by the examples.

## Prerequisites

- Node.js 18+ (for built-in `fetch`) or newer. If you use Node.js <18, install a fetch polyfill (e.g., `node-fetch`).
- An API key with access to Google's Generative AI (Gemini) APIs.

## Install

Open PowerShell in the project folder and run:

```powershell
npm install
```

This will install the dependencies declared in `package.json` (for example `@google/generative-ai` and `dotenv`).

## Environment

Create a `.env` file in the project root with your API key. Example:

```
GEMINI_API_KEY=your_real_api_key_here
```

`main.js` and `list_models.js` both read `process.env.GEMINI_API_KEY` via `dotenv`.

## Usage

- Run the generator example:

```powershell
node main.js
```

- List models (calls the REST endpoint):

```powershell
node list_models.js
```

Notes:
- `main.js` uses the `@google/generative-ai` package and constructs a `GoogleGenerativeAI` client with your API key. It then gets a generative model and calls `generateContent` with a prompt.
- `list_models.js` performs a direct fetch to the `generativelanguage.googleapis.com` models endpoint using your API key as a query parameter.

## Implementation notes & caveats

- The `list_models.js` file uses `fetch`. Node.js 18+ provides `fetch` globally. If you run on older Node versions, add a polyfill such as `node-fetch` and require/enable it before use.
- The repository currently expects the API key in `GEMINI_API_KEY`. Keep the key secret — do not commit `.env` to version control.
- The `@google/generative-ai` package and API surface may change. Check the official docs if you see breaking changes.

## Next steps / improvements

- Add scripts to `package.json` (e.g. `"start": "node main.js"` and `"list-models": "node list_models.js"`).
- Add more robust error handling and input prompt handling.
- Add example using streaming responses (if supported) or a minimal test harness.

## Dependencies

See `package.json`. Current dependencies include:

- `@google/generative-ai` — official package used in `main.js`.
- `dotenv` — loads `.env` values into `process.env`.

## ThankYou