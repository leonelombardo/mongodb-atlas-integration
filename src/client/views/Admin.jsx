import { Layout } from "../components/Layout"
import { Container } from "../components/Container"
import { Navbar } from "../components/Navbar"
import { EndpointCard } from "../components/EndpointCard"
import { Footer } from "../components/Footer"

export const Admin = () => {
    return (
        <Layout>
            <Container>
                <Navbar/>
                <main className="flex flex-col justify-center items-center flex-1 gap-12 p-12">
                    <div className="">
                        <h1 className="text-primary-500 dark:text-secondary-500 text-5xl sm:text-7xl text-center font-bold leading-none">API</h1>
                        <p className="text-primary-100 text-center text-lg sm:text-2xl font-bold leading-none">Try our API out and all its endpoints.</p>
                    </div>
                    <section className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                        <EndpointCard method="get" title="GET" description="Read all the information about the users subscribed to our database."/>
                        <EndpointCard method="delete" title="DELETE" description="Remove all the user data if you don't want to be part of our database anymore."/>
                        <EndpointCard method="post" title="POST" description="Try it out to create an user and send it directly to our database."/>
                        <EndpointCard method="put" title="PUT" description="Update all the user data anytime just by providing new values for them."/>
                    </section>
                </main>
                <Footer/>
            </Container>
        </Layout>
    )
}