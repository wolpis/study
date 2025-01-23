import React, { lazy, Suspense, } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
    const folder = [
        { name: "main", path: "" },
        { name: "login", path: "login" },
        { name: "register", path: "register" }
    ]

    return (
        <Suspense>
            <Routes>
                {
                    folder.map((item, i) => {
                        let Test = lazy(() => import(`./pages/${item.name}/index.tsx`))
                        return (
                            <Route path={`/${folder[i].path}`} element={<Test />} />
                        )
                    })
                }
            </Routes>
        </Suspense>
    )
}

export default App;