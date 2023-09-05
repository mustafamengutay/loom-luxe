import mainProductImage from '../../assets/img1.png';

const Product = () => {
  return (
    <div className="w-[262px] h-[386px]">
      <p className="font-sans text-xs mb-2">01</p>
      <img src={mainProductImage} alt="An example shirt for the home page" />
      <div className="mt-4 flex flex-col items-start gap-1">
        <p className="font-serif font-semibold text-xs">OLD MONEY</p>
        <p className="font-sans text-xs">
          <strong>GLAM-SHIRTS</strong> COLLECTION I
        </p>
      </div>
    </div>
  );
};

export default Product;
