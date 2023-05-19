export const CommentItem = ({data}) => {
  return (
    <div>
      <img src="#" alt="#" />
      <h3>{ data.fullName}</h3>
      <p>{ data.comment}</p>
    </div>
  );
};
