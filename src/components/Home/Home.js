import React from 'react'
import './Home.css'
import Footer from './Footer'

const Home = () => {
    return (
        <div className="home-container">
            <header className='header-title'>
                <h1 >Welcome To kalan Exports</h1>
            </header>
            <main className='main-container'>
                <article>
                    <h2 className='article-head'>KALAN EXPORTS</h2>
                    <p className='article-para'> we are the youngest
                        leading Exporter and offer a wide range of quality products from
                        Tamilnadu in India. We have established it in 2020. We spend
                        significant time in a wide assortment of vegetables, fruits, plant
                        leaves, and grains to meet the developing necessities of our
                        esteemed clients.
                    </p >
                </article>
                <article>
                    <p className='article-para' > Dedication, fair transactions, and product
                        quality with the best prices are unique features of Kalan Exports.
                        Our services of timely performance, quality control, and logistics
                        management meet their global standards and ensure consistent
                        relationships.</p>
                </article>
                <article>
                    <h2 className='article-head'>Why we?</h2>
                    <p className='article-para'>
                        We acknowledge the importance and necessity of choosing a
                        reliable supplier in the international market that requires focus and
                        proper diligence. We are managed by a team of highly
                        experienced professionals who specialize in the look and
                        purchase of quality products at competitive prices during this
                        period to deliver the highest value proposition to the client based
                        on quality inventory, timely exports. Emphasis on details ensures
                        the maintenance of inventory integrity through an efficient logistics
                        chain until the end goal.
                    </p>
                </article>
                <article>
                    <h2 className='article-head'>Objective view of ours</h2>
                    <p className='article-para'>
                        Our objective is to open new business sectors, team up with new
                        customers, and satisfying all the parties who deal with us in
                        importing the fruits and vegetables.
                    </p>
                    <p className='article-para'>Please do not hesitate to contact us to start building trust.</p>
                </article>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home
