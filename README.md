# Perrsonal Website

Starter blog theme built on top of Sapper(Svelte) with the Stunning Theme.

## Running

```bash
yarn && yarn dev
```

Open up [localhost:3000](http://localhost:3000) to launch the website.

## Structure

Add new articles in `/contents`

Article must have headers: `[title, date, excerpt]` e.g.

```
---
title: 'New Post'
date: '2021-01-01'
excerpt: 'Nw Year New Me!'
---
```

## Deploy

Hosted with github pages. See process in `.github/workflows/main.yml`. Each push to master redploys the site to qcomps.gihub.io
