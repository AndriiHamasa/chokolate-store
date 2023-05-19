import comments from '../comments.json'
import { CommentItem } from 'components/CommentItem';
import { Button } from 'components/Butoon';

console.log('comments', comments)

export const Comments = () => {
  return (
    <>
      <h2>chocolate is loved</h2>
      <ul>
        {comments.map((comment) => <CommentItem data={ comment} />)}
      </ul>
      <Button text="Leave  a review"/>
    </>
  );
};
