# ---------- Étape 1 : build ----------
FROM node:22-alpine AS build

WORKDIR /app

# On copie D'ABORD uniquement les fichiers de dépendances
COPY package.json package-lock.json ./
RUN npm ci

# Puis seulement maintenant le reste du code source
COPY . .
RUN npm run build

# ---------- Étape 2 : image finale de production ----------
FROM nginx:alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]