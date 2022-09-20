import Footer from "./Footer";
import Header from "./Header";
import Head from 'next/head';

export default function Layout(props){

    return(
        <>
        <Head>
            <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
            <title>PokeNext</title>
        </Head>
        <Header></Header>

        <main className='main-container'>{props.children}</main>
        
        <Footer></Footer>
        </>
    )
}