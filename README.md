NextJS Blog With:
Deployed link : 
Deployed docs path:

You can also access docs on local server by navigating to "/docs/index.html"



## Getting Started
Please run "yarn install" to install all project required dependencies.

Make sure to creare a ".evn.local" file in root level . (same level as .env.example).
Follow the format mentioned in the .env.example file.

This project uses MongoDb , so please either provide a mongodb atlas url or local mongodb server url.

After installation & setting up env file run the development server:

```bash

yarn dev
yarn build
yarn start
yarn docs

```

use "yarn dev" to start the local server.
use "yarn build" to start the production build files.
use "yarn start" to start the local server using production build files (run yarn build first!).
use "yarn docs" to reupdate the typedoc generated docs.


## Features

Features of this project:

- Role based authentication system using Next Auth and users collection stored to mongodb .

- API endpoint & page path protection - with role based access allocation .

- API endpoints REST API compliant with proper response codes.

- Serverside rendered home page and post page .

- Makes use of Nextjs full stack features .

- Bootstrap based UI & responsive .

- Typescript codebase.

- Codebase documented - also makes use of typedoc to generate docs .

- Makes use of react design patterns and extensive use of hooks -useStates , useContext and low usage of useEffects.

- Makes use of fetch api for network calls 

- Git / github used for file versioning and management.



## Specifics
- Project setup using create-next-app - typescript
- Introduced user roles [admin, author, and reader]
- Admins can edit or delete any blog post 
- Authors can edit or delete only their own blog posts 
- Readers can only view blog posts 
- All logged in users can post comments
- Home page - serverside rendered using getServerSideProps
- Post page - serverside rendered & users can post comments using getServerSideProps
- Create post page - uses Quill text editor and can handle images
- Makes use of react functional component design patterns and hooks
- Search Posts
- Bootstrap & CSS UI & viewport responsive.
- Client side & server side validations for forms & requests.
- File versioning - using git/ github
- Readme & dedicated docs