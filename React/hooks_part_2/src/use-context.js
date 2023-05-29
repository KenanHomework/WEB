// import React, {useContext} from 'react';
// import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));
//
// // props drilling
// const MyContext = React.createContext()
// const App = () => {
//   return(
//       <MyContext.Provider value={"Some value"}>
//           <Child/>
//       </MyContext.Provider>
//   )
// }
//
// const Child = ()=>{
//     const  value = useContext(MyContext)
//     return(
//         <p>{value}</p>
//         // <MyContext.Consumer>
//         //     {
//         //         (value)=>{
//         //             return (
//         //                 <>
//         //                     <h1>Hello</h1>
//         //                     <p>{value}</p>
//         //                 </>
//         //
//         //             )
//         //         }
//         //     }
//         // </MyContext.Consumer>
//     )
// }
//
//
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
