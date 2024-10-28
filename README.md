## 🧩 Develop

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=&logo=vercel&logoColor=white)

Clone this repo, install the dependencies (all locally), and run the development server (which auto-watches the
files for changes):

```bash
npm install
npm run dev
```

The development app will be running on `http://localhost:3000`. Development builds have the advantage of not requiring
a build step, but can be slower than production builds. Also, development builds won't have timeout on edge functions.

## 🌐 Deploy manually

The _production_ build of the application is optimized for performance and is performed by the `npm run build` command,
after installing the required dependencies.

```bash
# .. repeat the steps above up to `npm install`, then:
npm run build
npm run start --port 3000
```

The app will be running on the specified port, e.g. `http://localhost:3000`.

Want to deploy with username/password? See the [Authentication](docs/deploy-authentication.md) guide.

## 🐳 Deploy with Docker

For more detailed information on deploying with Docker, please refer to the [docker deployment documentation](docs/deploy-docker.md).

Build and run:

```bash
docker build -t com-chat .
docker run -d -p 3000:3000 com-chat
``` 

## ☁️ Deploy on Cloudflare Pages

Please refer to the [Cloudflare deployment documentation](docs/deploy-cloudflare.md).

## Integrations:

* Local models: Ollama, Oobabooga, LocalAi, etc.
* [ElevenLabs](https://elevenlabs.io/) Voice Synthesis (bring your own voice too) - Settings > Text To Speech
* [Helicone](https://www.helicone.ai/) LLM Observability Platform - Models > OpenAI > Advanced > API Host: 'oai.hconeai.com'
* [Paste.gg](https://paste.gg/) Paste Sharing - Chat Menu > Share via paste.gg
* [Prodia](https://prodia.com/) Image Generation - Settings > Image Generation > Api Key & Model

<br/>
