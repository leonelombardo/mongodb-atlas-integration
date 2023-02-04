import { Link } from "react-router-dom"

import { Layout } from "../components/Layout"
import { Container } from "../components/Container"
import { Button } from "../components/Button"
import { Footer } from "../components/Footer"

export const Home = () => {
    return (
        <Layout>
            <Container>
                <main className="flex flex-col items-center justify-center gap-6 flex-1 p-12">
                    <section className="flex flex-col items-center gap-4 max-w-[550px] w-full">
                    <h1 className="text-primary-500 text-5xl sm:text-7xl text-center font-bold leading-none">MongoDB Atlas Integration</h1>
                    <p className="text-primary-100 text-center text-lg sm:text-2xl font-bold leading-none">Start getting, adding, updating, and deleting users from a MongoDB Atlas database.</p>
                    </section>
                    <Link to="/admin" style={{width: "100%"}}>
                        <Button>Start</Button>
                    </Link>
                </main>
                <Footer/>
            </Container>
        </Layout>
    )
}