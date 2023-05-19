import { Button } from 'components/Butoon';

export const Footer = () => {
  return (
    <>
      <div>
        <h2>exPLORE OUR NEW CHOCOLATE FIRST</h2>
        <p>
          From the velvety texture to the rich and complex flavor, our New
          Chocolate is a true indulgence that will leave you craving more. Made
          with only the finest ingredients and handcrafted with the utmost care,
          each piece is a work of art that is sure to please.
        </p>
        <Button text="Subscribe" />
      </div>
      <h3>Chocolate a delicious cure for a bad day</h3>
      <div>
        <p>Contact us</p>
        <ul>
          <li>
            <span>#</span>
          </li>
          <li>
            <span>#</span>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <a href="tel:+380684439426">+380 (68) 443-94-26</a>
        </li>
        <li>
          <a href="mailto:simplychoc@gmail.com">simplychoc@gmail.com</a>
        </li>
      </ul>
      <ul>
        <li>Home</li>
        <li>How it’s made?</li>
        <li>Our products</li>
        <li>Top sellers</li>
        <li>Chocolate is loved</li>
      </ul>
    </>
  );
};
