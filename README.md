# Personal Portfolio - Built with Astro

A modern, fast portfolio website built using Astro framework with TailwindCSS integration.

## 🚀 Project Structure

```text
/
├── public/
│   └── static assets (images, etc)
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🛠️ Tech Stack

- [Astro](https://astro.build)
- [TailwindCSS](https://tailwindcss.com)
- TypeScript

## 🚀 Getting Started

0. **Install pnpm** (if not already installed):
   ```sh
   npm install -g pnpm
   ```

1. **Install dependencies:**
   ```sh
   pnpm install
   ```

2. **Start development server:**
   ```sh
   pnpm run dev
   ```
   This will start the development server at `localhost:4321`

## 📝 Available Commands

| Command           | Action                                           |
| :--------------- | :----------------------------------------------- |
| `pnpm install`   | Installs dependencies                            |
| `pnpm run dev`   | Starts local dev server at `localhost:4321`      |
| `pnpm run build` | Build your production site to `./dist/`          |
| `pnpm preview`   | Preview your build locally before deploying      |

## 🔧 Configuration Files

- `astro.config.mjs` - Configure Astro build settings
- `tailwind.config.mjs` - TailwindCSS configuration
- `tsconfig.json` - TypeScript configuration

## 🐳 Docker Deployment

### Local Docker Deployment

Build and run the container with a single command:
```sh
docker compose up --build -d
```

The application will be available at `http://localhost:3000`

### 🚀 Automated Deployment with GitHub Actions

This project includes automated deployment to a VPS using GitHub Actions. To set it up:

1. Add the following secrets to your GitHub repository:
   - `VPS_HOST`: Your VPS IP address
   - `VPS_USERNAME`: SSH username for your VPS
   - `VPS_SSH_KEY`: SSH private key for authentication

Note: The workflow uses GitHub Container Registry (ghcr.io) for storing the Docker image, which automatically uses your repository's `GITHUB_TOKEN` secret.

2. Push to the master branch, and GitHub Actions will automatically:
   - Build the Docker image
   - Push it to GitHub Container Registry
   - Deploy it to your VPS

The container will run on port 3000, which you can then reverse proxy using Caddy on your server.

Example Caddyfile configuration (add this to your server's Caddyfile):
```
your-domain.com {
    reverse_proxy localhost:3000
}
```
