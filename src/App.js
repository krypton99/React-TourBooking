import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from './layouts/DefaultLayout';
import { Fragment } from 'react';
import HomeBanner from './components/Banner';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        console.log(route.path);
                        const Page = route.component;
                        let Banner = route.banner ? HomeBanner : Fragment;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Banner>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </Banner>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
