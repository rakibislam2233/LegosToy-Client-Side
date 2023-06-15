import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <></>
    //this is a blogs section
    // <div className="w-full max-w-6xl mx-auto pt-20 py-10">
    //   <Helmet>
    //     <title>LegoLandmark|Blogs</title>
    //   </Helmet>
    //   <h2 className="text-4xl font-semibold text-center">Blogs</h2>
    //   <div className="py-10 p-5 space-y-3">
    //     <div>
    //       <h2 className="font-semibold text-xl">
    //         Question1:What is an access token and refresh token? How do they
    //         work and where should we store them on the client-side?
    //       </h2>
    //       <p className="font-semibold">
    //         Ans:Access tokens are temporary and have an expiration time to
    //         security. They are used in API requests to authenticate the user or
    //         application and grant access to protected resources or perform
    //         specific operations.ans A refresh token is a credential that is used
    //         to obtain a new access token when the current access token has
    //         expired. It is commonly used in authentication protocols such as
    //         OAuth and OpenID Connect. To store access tokens and refresh tokens
    //         on the client-side, you have a few options: 1. Local Storage: You
    //         can store the tokens in the browser's local storage, which provides
    //         a simple key-value storage mechanism. Local storage allows you to
    //         persist the tokens across page refreshes or browser restarts.
    //         However, storing sensitive tokens in local storage can be vulnerable
    //         to cross-site scripting (XSS) attacks if your application is
    //         susceptible to such threats. 2.Browers Cookies: You can store the
    //         tokens in HTTP-only secure cookies. By setting the "HttpOnly" flag,
    //         you can prevent JavaScript from accessing the cookie contents,
    //         making it more secure against XSS attacks. Cookies can be set to
    //         expire after a certain time, providing control over token validity.
    //         However, cookies are susceptible to cross-site request forgery
    //         (CSRF) attacks if not implemented properly.
    //       </p>
    //     </div>
    //     <div>
    //       <h2 className="font-semibold text-xl">
    //         Question2:Compare SQL and NoSQL databases?
    //       </h2>
    //       <p className="font-semibold">
    //         Ans:SQL databases are vertically scalable, while NoSQL databases are
    //         horizontally scalable. SQL databases are table-based, while NoSQL
    //         databases are document, key-value, graph, or wide-column stores. SQL
    //         databases are better for multi-row transactions, while NoSQL is
    //         better for unstructured data like documents or JSON.
    //       </p>
    //     </div>
    //     <div>
    //       <h2 className="font-semibold text-xl">
    //         Question3:What is express js? What is Nest JS?
    //       </h2>
    //       <p className="font-semibold">
    //         Ans:Express is a minimalist and flexible framework that is easy to
    //         use and has a large community of developers. NestJS, on the other
    //         hand, is a newer framework that provides additional features such as
    //         dependency injection, a modular architecture, and an intuitive CLI.
    //       </p>
    //     </div>
    //     <div>
    //       <h2 className="font-semibold text-xl">
    //         Question4:What is MongoDB aggregate and how does it work
    //       </h2>
    //       <p className="font-semibold">
    //         Ans:Aggregation is a way of processing a large number of documents
    //         in a collection by means of passing them through different stages.
    //         The stages make up what is known as a pipeline. The stages in a
    //         pipeline can filter, sort, group, reshape and modify documents that
    //         pass through the pipeline.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    //blogs section end
  );
};

export default Blogs;
