import { FaRegThumbsUp, FaRegThumbsDown, FaReply } from "react-icons/fa6";
import NewComment from "./NewComment";
import Ignore from "./Ignore/Ignore";

const Comments = ({ comments }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Comments</h1>
      {comments.length === 0 && <p>No comments yet!</p>}
      <div className="pt-4">
        <div>
          <NewComment />
        </div>
        <Ignore />
        <div className="space-y-5 pt-7">
          {comments.map((item, ind) => (
            <Comment comment={item} key={ind} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;

const Comment = ({ comment }) => {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <img
          className="size-8 rounded-full object-cover"
          src={comment.user.personal.photo}
          alt=""
        />
        <p className="text-sm">{comment.user.personal.name.fullName}</p>
      </div>
      <p className="pl-2 pt-2">{comment.comment}</p>
      <div className="flex items-center gap-7 pt-6">
        <p className="flex gap-2 items-center">
          <span>{comment.likes}</span>
          <FaRegThumbsUp />
        </p>
        <p className="flex gap-2 items-center">
          <span>{comment.dislikes}</span>
          <FaRegThumbsDown />
        </p>
        <p>
          <FaReply />
        </p>
      </div>
      <div className="pl-10 pt-6 ">
        {comment.replies?.length > 0 && (
          <div className="space-y-5">
            {comment.replies.map((item, key) => (
              <div className=" pl-2 py-2 rounded" key={key}>
                <div className="flex gap-2 items-center">
                  <img
                    className="size-8 rounded-full object-cover"
                    src={item.user.personal.photo}
                    alt=""
                  />
                  <p className="text-sm">{item.user.personal.name.fullName}</p>
                </div>
                <p className="pl-2 pt-2">{item.comment}</p>
                <div className="flex items-center gap-7 pt-6">
                  <p className="flex gap-2 items-center">
                    <span>{item.likes}</span>
                    <FaRegThumbsUp />
                  </p>
                  <p className="flex gap-2 items-center">
                    <span>{item.dislikes}</span>
                    <FaRegThumbsDown />
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const html =
  "<p>hello,</p><p>this is ahsanul hoque.</p><h1><strong>I am here to announce that,</strong></h1><p>its may be my last message!</p><p>to do-</p><ol><li class='list-disc ml-4' >collect money</li><li>urao money</li><li>biriyani khao</li></ol>";
