import { FaRegThumbsUp, FaRegThumbsDown, FaReply } from "react-icons/fa6";
import NewComment from "./NewComment";
import Ignore from "./Ignore/Ignore";
import TextEditor from "../../../Editor/TextEditor";
import { useEffect, useState } from "react";
import useAxioseSecure from "../../../../hooks/axios/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const Comments = ({ comments: Comments, tutorial }) => {
  const [comments, setComments] = useState(Comments);
  const { user } = useAuth();
  const axiosSecure = useAxioseSecure();
  const [newComment, setNewComment] = useState();
  useEffect(() => {
    if (newComment) {
      axiosSecure
        .post("/comments/add", {
          user: user?.email,
          comment: newComment,
          tutorial: tutorial._id,
        })
        .then((res) => {
          setComments([res.data.comment, ...comments]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [newComment, user]);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Comments</h1>
      {comments.length === 0 && <p>No comments yet!</p>}
      <div className="pt-4">
        <div>
          <TextEditor setNewText={setNewComment} />
        </div>
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

const Comment = ({ comment: prev }) => {
  const [comment, setComment] = useState(prev);
  const axiosSecure = useAxioseSecure();
  const { user } = useAuth();
  const [newComment, setNewComment] = useState();
  const [showReply, setShowReply] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  useEffect(() => {
    if (newComment) {
      axiosSecure
        .post("/comments/add", {
          user: user?.email,
          comment: newComment,
          thread: prev._id,
        })
        .then((res) => {
          setComment((prev) => {
            return {
              ...prev,
              replies: [res.data.comment, ...prev.replies],
            };
          });
          setShowEditor(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [newComment, user]);
  return (
    <div>
      <div className="flex gap-2 items-center">
        <img
          className="size-8 rounded-full object-cover select-none"
          src={comment.user.personal.photo}
          alt=""
        />
        <p className="text-sm ">{comment.user.personal.name.fullName}</p>
      </div>
      <div
        className="pl-2 pt-2"
        dangerouslySetInnerHTML={{
          __html: comment.comment,
        }}
      ></div>
      <div className="flex items-center gap-7 pt-6">
        <button className="flex gap-2 items-center">
          <span>{comment.likes}</span>
          <FaRegThumbsUp />
        </button>
        <button className="flex gap-2 items-center">
          <span>{comment.dislikes}</span>
          <FaRegThumbsDown />
        </button>
        <button
          onClick={() => {
            setShowEditor(!showEditor);
          }}
        >
          <FaReply />
        </button>
      </div>
      {showEditor && <TextEditor setNewText={setNewComment} />}
      <div className="pl-10 pt-6 ">
        {comment.replies?.length > 0 && (
          <div className="space-y-5">
            {comment.replies.map((item, key) => (
              <div className=" pl-2 py-2 rounded" key={key}>
                <div className="flex gap-2 items-center">
                  <img
                    className="size-8 rounded-full object-cover select-none"
                    src={item.user.personal.photo}
                    alt=""
                  />
                  <p className="text-sm">{item.user.personal.name.fullName}</p>
                </div>
                <div
                  className="pl-2 pt-2"
                  dangerouslySetInnerHTML={{
                    __html: item.comment,
                  }}
                ></div>
                <div className="flex items-center gap-7 pt-6">
                  <button className="flex gap-2 items-center">
                    <span>{item.likes}</span>
                    <FaRegThumbsUp />
                  </button>
                  <button className="flex gap-2 items-center">
                    <span>{item.dislikes}</span>
                    <FaRegThumbsDown />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// const html =
//   "<p>hello,</p><p>this is ahsanul hoque.</p><h1><strong>I am here to announce that,</strong></h1><p>its may be my last message!</p><p>to do-</p><ol><li class='list-disc ml-4' >collect money</li><li>urao money</li><li>biriyani khao</li></ol>";
