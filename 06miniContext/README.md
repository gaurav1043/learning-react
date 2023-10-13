leranings

1. React.createContext in Usercontext.js
   eg:
   const UserContext = React.createContext();
   export default UserContext;

2. The above context will give us a Provider which will act as a Wrapper to components that access tp states to be changed
   eg:
   const UserContextProvider = ({ children }) => {
   const [user, setUser] = useState(null);

return (
<>
<UserContext.Provider value={{ user, setUser }}>
{children}
</UserContext.Provider>
</>
);
};
