import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

type PageComponent = React.LazyExoticComponent<React.FC>;

const App = () => {
    const folder = [
        "main", "login", "register"
    ]
    const [endpoint, setEP] = useState<PageComponent[]>();


    useEffect(() => {
        const endpoint_: PageComponent[] = [];
        folder.map((item) => {
            endpoint_.push(lazy(() => import(`./pages/${item}/index.tsx`)))
        })

        setEP(endpoint_);
    }, [])


    return (
        <Suspense>
            <Routes>
                {
                    endpoint?.map((item, i) => {
                        return (
                            //@ts-ignore
                            <Route path={`/${folder[i]}`} element={item} />
                        )
                    })
                }
            </Routes>
        </Suspense>
    )
}

export default App;