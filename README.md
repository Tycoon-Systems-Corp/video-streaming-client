# Setup
If you see a bunch of errors in VS Code while developing try:
1. Ctrl+Shift+P -or- ⌘+shift+P
2. Then type: Developer: Reload Window

# video-streaming-client
Video Streaming Client leveraged for Official Tycoon Network and B2B Customers

# Start in order of command below

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# Use Node.js 16
nvm use 16

# Check node versions
nvm ls

-------------
## Git Operations
# You must fork this and create your own repo

# Add Upstream repo once you have forked into your own repo

git remote add upstream https://github.com/Tycoon-Systems-Corp/video-streaming-client

# To safely pull /modules folder changes run update_version script
./update_version

# Finish merge by running git pull
git pull

# Push data up to your repo
git push
-------------

# Run init_app.js to create required dependency files. Else errors will throw in development
node init_app.js

# Install npm packages
npm install

## Start Developing

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

# To Analyze Dependency Sizes use the following

ANALYZE=true npm run build

# Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## How to Develop
See the documentation.md folder for application tooling and functions
See api.md for routes to public Platform API