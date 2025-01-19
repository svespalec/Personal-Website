#!/bin/bash
# Rocky Linux 9 initialization script for Docker deployment

# Update system first
dnf update -y

# Install essential tools
dnf install -y curl

# Install and configure firewalld
dnf install -y firewalld
systemctl enable --now firewalld

# Configure firewall (only ports we need)
firewall-cmd --permanent --add-port=80/tcp
firewall-cmd --permanent --add-port=443/tcp
firewall-cmd --permanent --add-port=3000/tcp  # For the Astro app
firewall-cmd --reload

# Install Docker
dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
dnf install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
systemctl enable --now docker

# Create deploy user with Docker access
useradd -m -s /bin/bash deploy
usermod -aG docker deploy

# Set up SSH for deploy user
mkdir -p /home/deploy/.ssh
touch /home/deploy/.ssh/authorized_keys
chmod 700 /home/deploy/.ssh
chmod 600 /home/deploy/.ssh/authorized_keys
chown -R deploy:deploy /home/deploy/.ssh

# Install Caddy
dnf install -y 'dnf-command(copr)'
dnf copr enable -y @caddy/caddy
dnf install -y caddy
systemctl enable --now caddy

# Configure Caddy
cat > /etc/caddy/Caddyfile << 'EOF'
# Simple reverse proxy configuration
your-domain.com {
    reverse_proxy localhost:3000
}
EOF

# Restart Caddy to apply configuration
systemctl restart caddy

echo "=== Setup Complete ==="
echo "Next steps:"
echo "1. Add your GitHub Actions SSH public key to /home/deploy/.ssh/authorized_keys"
echo "   The deploy user can ONLY run specific Docker commands needed for deployment"
echo "2. Configure Caddy for your domain (edit /etc/caddy/Caddyfile)"
echo ""
echo "Deployment Flow:"
echo "- When you push to master branch, GitHub Actions will:"
echo "  1. Build a new container image"
echo "  2. Push it to GitHub Container Registry"
echo "  3. SSH into the server as 'deploy' user"
echo "  4. Pull the new image and restart the container"