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

### 🚀 VPS Deployment Setup

1. Copy `vps-init.sh` to your VPS and make it executable:
   ```sh
   chmod +x vps-init.sh
   sudo ./vps-init.sh
   ```

2. After the script completes:
   - Replace `your-domain.com` in `/etc/caddy/Caddyfile` with your actual domain
   - Add your GitHub Actions SSH public key to `/home/deploy/.ssh/authorized_keys`

3. Add the following secrets to your GitHub repository:
   - `VPS_HOST`: Your VPS IP address
   - `VPS_USERNAME`: Set this to `deploy`
   - `VPS_SSH_KEY`: Your SSH private key for deployment

The deployment is then automated:
- Push to the master branch
- GitHub Actions will build and deploy
- Your site will be available at your domain through Cloudflare

Example Caddyfile configuration (this is already set up by the script):
```
your-domain.com {
    reverse_proxy localhost:3000
}
```
