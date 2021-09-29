# Use GraphQL API with React Hooks

A CRUD demo for practicing react hooks. It follows best practices below.

## [Practice with code](https://github.com/zhumeisongsong/react-hooks-best-practice/issues/1)

## Online Demo

Front:

https://react-hooks-best-practice.herokuapp.com/

API playground:

https://strapi-server-musical-sand.herokuapp.com/graphql

## Quick Start

```
git clone https://github.com/zhumeisongsong/react-hooks-best-practice.git

cd react-hooks-best-practice

vi env // Please new a `.env.local` file and add env vars.

npm install

npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Architecture

```
Front end: react.js / rematch / typescript / axios / antd

Back end: strapi(node.js headless CMS)

Infrastructure: Heroku
```

## GraphQL

GraphQL is one of the API formats(REST / GraphQL / gRPC / SOAP).Since 2012 it was been created by Facebook, it's growing in popularity. The latest version of GitHub's API is published using GraphQL. Yelp publishes its API in GraphQL, as does Shopify.

By using a headless CMS -- strapi, here we focus on how to call GraphQL APIs in front end. By default Strapi create REST endpoints for each of your content types. With the GraphQL plugin, you will be able to add a GraphQL endpoint to fetch and mutate your content.

### What is GraphQL

GraphQL is a `query` language for your API. It gives clients to ask for exactly `what you need` and nothing more.

- **Describe your data**

- **Ask for what you want**

- **Get predictable results**

<img src="https://user-images.githubusercontent.com/18430762/108371913-99943600-7241-11eb-9fc2-e30d62b55f98.png" width="300">

<img src="https://user-images.githubusercontent.com/18430762/108372115-d19b7900-7241-11eb-99d5-31320ebe8880.png" width="300">

### Why Not REST

GraphQL API and RESTful API can be used in one project, you can put them together! Here we just talk about the better points of GraphQL than REST.

**Strongly Typed GraphQL**

Seems typescript, Being strongly-typed makes GraphQL less error, can be validated during compile-time and can be used for supportive IDE/editor integrations such as auto-completion and validation.

**Declarative Data Fetching, No Overfetching**

A mobile client usually overfetches data when there is an identical API as the web client with a RESTful API. With GraphQL, the mobile client can choose a different set of fields, so it can fetch only the information needed for what's onscreen.

**Less Requests**

Today, client applications are not made for RESTful server applications. The search result on Airbnb's platform shows homes, experiences, and other related things.

Since REST comes with **a URL for each resource**, it often leads to inefficient waterfall requests.

```
Case:
Want to fetch an home entity identified by an id, and then you fetch all the experiences and other related things by this home using the home's id.

REST:
GET `/homes/${id}`
GET `/experiences?homeId=${id}`
Get `/authors?experienceId=${experienceId}`

GraphQL:
A single request, which is more efficient
    `home(
        id:"${id}"
      ) {
        id
        name
        experiences {
          id
          title
          content
          author {
            name
          }
        }
      }`
```

### How

How to change to call graphQL API from RESTful API in reactjs project?

You only need to change the functions in API layer.(layout layer for UI / statement layer for data format / API layer for http functions)

Example by axois(Other solutions: Apollo Client https://www.apollographql.com/docs/react/):

- Only 1 endpoint
- Only use `POST` method
- Describe queries (get) and mutations (update / create / delete)
- Need to format query string (quotes issue)

  Right:

  ```
  `{name: "name", description: "description"}`
  ```

  Wrong:

  ```
  `{"name": "name", "description": "description"}`
  ```

## Learn More

Why GraphQL: Advantages and Disadvantages:

https://www.robinwieruch.de/why-graphql-advantages-disadvantages-alternatives

Strapi graphQL:

https://strapi.io/documentation/developer-docs/latest/plugins/graphql.html#usage

Rematch examples:

https://github.com/rematch/rematch/tree/next/examples/hooks-react-ts

API format:

https://www.redhat.com/architect/apis-soap-rest-graphql-grpc
