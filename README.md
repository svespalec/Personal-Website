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