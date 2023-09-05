import Header from '../components/layouts/Header';
import Headline from '../components/layouts/Headline';
import Product from '../components/Product/Product';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <Headline />
        <Product />
      </div>
    </div>
  );
};

export default Home;
