import comments from '../commentObject.json'
import { CommentItem } from 'components/CommentItem';
import { Button } from 'components/Butoon';

console.log('comments', comments)

export const Comments = () => {
  return (
    <>
      <h2>chocolate is loved</h2>
      <ul>
        {comments.map((comment) => <CommentItem key={comment.id} data={ comment} />)}
      </ul>
      <Button text="Leave  a review"/>
    </>
  );
};
