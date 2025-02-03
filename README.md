# Personal Portfolio - Built with Astro

A modern, fast portfolio website built using Astro framework with TailwindCSS integration.

## 🚀 Getting Started

1. **Set up GitHub Token:**
   - Go to GitHub Settings → Developer Settings → Personal Access Tokens → Tokens (classic)
   - Generate new token (classic)
   - Give it a name (e.g., "Portfolio GitHub Projects")
   - Under "Select scopes", check:
     - `public_repo` (to read public repository data)
   - Copy the generated token
   - Create a `.env` file in the project root:
     ```sh
     PORTFOLIO_GITHUB_TOKEN=your_token_here
     ```
   This token is required to fetch your GitHub projects data and avoid API rate limits.

2. **Development with Docker:**
   ```sh
   # Build and start the development container
   docker compose up --build
   ```
   This will start the development server at `localhost:3000`

   To stop the container:
   ```sh
   docker compose down
   ```

3. **Development without Docker:**
   ```sh
   # Install dependencies
   npm install

   # Start development server
   npm run dev
   ```
   This will start the development server at `localhost:4321`

## 🚀 Deployment

### Setting up GitHub Actions Deployment

1. **Required Repository Secrets:**
   Go to your GitHub repository → Settings → Secrets and Variables → Actions and add these secrets:
   
   - `PORTFOLIO_GITHUB_TOKEN`: The same GitHub token from step 1
   - `VPS_HOST`: Your VPS IP address or domain
   - `VPS_USERNAME`: SSH username for your VPS
   - `VPS_SSH_KEY`: Your SSH private key for VPS authentication
     - Generate a new key pair if needed:
       ```sh
       ssh-keygen -t ed25519 -C "your_email@example.com or description"
       ```
     - Add the public key to your VPS's `~/.ssh/authorized_keys`
     - Copy the private key content (including BEGIN and END lines) to `VPS_SSH_KEY` secret

2. **Customize Deployment Directory:**
   By default, the site deploys to `/var/www/sam`. To change this:
   - Edit `.github/workflows/deploy.yml`
   - Change the `DEPLOY_DIR` variable to your preferred path:
     ```sh
     DEPLOY_DIR="/var/www/your-name"
     ```

3. **Deployment:**
   - Automatic: Push to main/master branch
   - Manual: Go to Actions → Deploy to VPS → Run workflow

The deployment will:
- Build and push the Docker image to GitHub Container Registry
- Deploy to your VPS using Docker Compose
- Run on port 3000 with automatic restart