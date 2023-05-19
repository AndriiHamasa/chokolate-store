import { Hero } from 'components/Hero-Section';
import { Characteristics } from 'components/Characteristics';
import { Ingredients } from 'components/Ingredients';
import { Creating } from 'components/Creating';
import { Products } from 'components/Products';
import { Comments } from 'components/Comments';

export const Main = () => {
  console.log('viewport = ', window.innerWidth)
  return (
    <>
      <Hero />
      <Characteristics />
      <Ingredients />
      <Creating />
      <Products />
      <Comments/>
    </>
  );
};
