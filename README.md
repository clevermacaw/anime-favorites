# Svelte Task

## Run the application

```
cd client
pnpm i
docker-compose up --build
```

## Project overview

This is a very simple app built using SvelteKit with TailwindCss, with a ready-to-use BaaS (Backend as a Service) called PocketBase.  
It uses an open API to download a list of anime and display them.  
You can access anime details and add them to favorites.  
All favorites are then displayed on the right side of the screen.  
This API has a rate limiter, so sometimes there might be some errors.

## Tasks

Fork this repo, create a new branch and start working there.  
After finish, create a Pull Request from Your branch to Your Fork and invite me.  
This way i will be able to see all the changes, and my repo will be clean for the next candidate :).

Choose which tasks You would like to tackle. Do as much as You feel comfortable :)

### Easy

Style this application a little bit. Show that you know how to use grid and flex.  
Do everything using TailwindCss.

### Easy

Add a button in the anime details screen that will remove it from favorites.

### Medium

Advanced styling. Extend the tailwind theme, do some gradient, use Svelte Animation, show what You know and have fun. 

### Medium

For the "Add to favorites" form action, add validation on the server side using the Zod library.  
Make it that there is no type assertion ("as") anywhere. 

### Medium

Add tests using vitest or / and playwright.

### Medium - tricky

Add the same button to delete anime from favorites, but right in the favorites list on the right side of the screen.  
Each anime in the favorites list should have its own special button underneath.

### Hard

Instead of using the data/favorites.ts object, establish a connection to PocketBase.  
Create a table to store and load favorites from there.
