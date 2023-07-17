## Overview

This is an Figma AI plugin template that demonstrates streaming LLM responses inside of a Figma plugin. This template shows:

- Securely storing OpenAI keys / prompts on a server
- Streaming a GPT completion to an iframe
- Streaming a GPT completion to a Figma document
- A fully functional React iframe using tailwind and Next.js
- Deploying your plugin to production
- Accessing the Figma API directly from the iframe

![Gif of the plugin in action](https://static.figma.com/uploads/cd663ea9256a71040227bc4af94c614febc8fc56)

## Getting Started

This plugin is set up to use [Next.js](https://nextjs.org/).

First create this template using create-next-app:

> Note this won't work until this template is public. For now you can just clone the repo and create a new git repo.

```bash
npx create-next-app@latest --example https://github.com/figma/ai-plugin-template/
```

Next you need to store you OpenAI API key in the `.env.local` file. You can get an API key from the [API keys page](https://platform.openai.com/account/api-keys). Create a `.env.local` file in the root of this project and add your API key:

```bash
OPENAI_API_KEY=***
```

Then, run the development server:

```bash
npm i
npm run dev
```

You can then open up the Figma desktop app and import a plugin from the manifest file in this project. You can right click on the canvas and navigate to `Plugins > Development > Import plugin from manifest...` and select the `manifest.json` in `{path to this project}/plugin/manifest.json`.

![Image showing how to import from manifest](https://static.figma.com/uploads/dcfb742580ad1c70338f1f9670f70dfd1fd42596)

## Editing this template

The main files you'll want to edit are:

- `app/page.tsx`: will let you update the plugin `iframe`. The page auto-updates as you edit the file and will let you update the user interface of your plugin.
- `app/completion/route.ts`: This is the "server" of the plugin and is what talks to OpenAI. This is where you can update the prompt that you are sending to GPT.
- `plugin/manifest.json`: this is the [manifest file](https://www.figma.com/plugin-docs/manifest/) that will let you update the permissions and editor types of your plugin.

## Publishing your plugin

TODO sawyer

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Figma Plugin API](https://www.figma.com/plugin-docs/) - learn about the Figma plugin API.
- [OpenAI API](https://platform.openai.com/docs/guides/gpt) - learn about GPT apis.
