# ---- Base Node image ----
FROM node:22

# ---- Set working directory ----
WORKDIR /app

# ---- Copy package files ----
COPY package*.json ./

# ---- Install dependencies ----
RUN npm install

# ---- Copy source code ----
COPY . .

# ---- Build NestJS project ----
RUN npm run build

# ---- Expose app port ----
EXPOSE 3000

# ---- Start the app ----
CMD ["npm", "run", "start:dev"]
