FROM mcr.microsoft.com/playwright:focal

WORKDIR /usr/app

ENV PATH /usr/app/node_modules/.bin:$PATH

# Install Project Dependencies
COPY package.json package-lock.json /usr/app/
RUN npm ci

COPY . /usr/app

# Setup Playwright
RUN npx playwright install
RUN npm run build

CMD ["npm", "start"]
