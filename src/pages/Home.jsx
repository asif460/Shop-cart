import './Home.css';

const Home = () => {
    return (
      <div className="home">
        <div className="home__container">
          <h1 className="home__title">Welcome to ShopEasy</h1>
          <div className="home__grid">
            <div className="home__card">
              <h2 className="home__card-title">About Us</h2>
              <p className="home__card-text">
                ShopEasy is your one-stop destination for all your shopping needs. 
                We offer a wide range of products at competitive prices with 
                excellent customer service.
              </p>
            </div>
            <div className="home__card">
              <h2 className="home__card-title">Why Choose Us?</h2>
              <ul className="home__card-list">
                <li className="home__card-item">Fast delivery</li>
                <li className="home__card-item">Quality products</li>
                <li className="home__card-item">Easy returns</li>
                <li className="home__card-item">24/7 customer support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;