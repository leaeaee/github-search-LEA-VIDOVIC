# GitHub Search account

A simple React application that connects to the GitHub GraphQL API.
Setup React from scratch with Webpack 4 and Babel.

## Application has

* GitHub account search
* List of accounts
* Profile page with users information and list of repositories

## Installing and launching

* npm install
* npm start

## More info

### Main part - Making the request

1. Use axios to connect to API -> npm install axios;
2. Endpoint for GitHub's GraphQL API is: https://api.github.com/graphql
3. To generate the token for request authorization, go to your GitHub profile, settings, and personal access tokens
4. With one GraphQL query get all necessary information.
