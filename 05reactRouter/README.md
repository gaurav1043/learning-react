React Router
Learnings

1. Creating a router using createBrowserRouter() and routes using createRoutesFromElements()

example :
const router = createBrowserRouter(
createRoutesFromElements(
<Route path="/" element={<Layout />}>
<Route path="" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/user/:userid" element={<User />} />
<Route loader={githubInfoLoader} path="/github" element={<Github />} />
</Route>
)
);

2. this router is passed as argument to <RouterProvider router={router}>
   example:
   ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
   <RouterProvider router={router} />
   </React.StrictMode>
   );

3. Creatong a Layout component which is parent to all route renders it has all the common components for all pages like Header and Footer component
   it uses the Outlet component from react library which is used to dynamically load routes
   eg:
   export const Layout = () => {
   return (
   <>
   <Header />
   <Outlet />
   <Footer />
   </>
   );
   };

4. userloaderData hook which is used to fire any event when the mouse is pointed to some function or component
   so the any fetch calls are fired or(loaded) as soon as mouse is taken towards comoponent.
   eg:
   const data = useLoaderData();

export const githubInfoLoader = async () => {
const response = await fetch("https://api.github.com/users/gaurav1043");
return response.json();
};
