---
title: "The App Router"
date: "2021-05-09"
---

First, it's helpful to provide some context on how the App Router has been designed.

### Growing Beyond the Pages Router by Aligning with React

As we saw increased adoption and larger scale applications being built with Next.js, we received feedback from the community and identified areas where we started to reach the limits of the Pages Router.

Most notably, the Next.js Pages Router was not designed for streaming, a cornerstone primitive in modern React, that helps us address the limitations we were facing and realize our long-term vision for Next.js.

Making streaming-friendly framework APIs for data fetching, asset loading, and page metadata, as well as taking advantage of React's newer primitives required large changes to the core architecture of Next.js.

We took the opportunity to build on top of the [latest React concurrent features](https://react.dev/blog/2023/05/03/react-canaries), like Server Components, Suspense, and more, which have been [designed for streaming architectures](https://github.com/reactwg/react-18/discussions/37).

### Incremental Adoption is Non-Negotiable

We didn't want our community to have to rebuild their entire applications from the ground up to update to the latest version of Next.js. We believe incremental adoption is the best strategy for evolving applications over time.

- Per-route incremental migration: Without a major rewrite of your application, you can move a single route of your application over the App Router and start to take advantage of new features at your own pace. See our [incremental adoption guide](https://github.com/reactwg/react-18/discussions/37) or [watch a tutorial](https://www.youtube.com/watch?v=YQMSietiFm0).

- Easily rollback: If you are not satisifed with the performance or developer experience of the App Router, you can easily rollback to the Pages Router for that specific route.

We are exploring further opportunities to make incremental adoption even easier.
