// import { useState } from "react";
// import ReactQuill from "react-quill";
// // import "react-quill/dist/quill.snow.css";
// const NewComment = () => {
//   const [value, setValue] = useState("");
//   const modules = {
//     toolbar: [
//       [{ header: [1, 2, false] }],
//       ["bold", "italic", "underline", "strike", "blockquote"],
//       [
//         { list: "ordered" },
//         { list: "bullet" },
//         { indent: "-1" },
//         { indent: "+1" },
//       ],
//       ["link", "image"],
//       ["clean"],
//     ],
//   };

//   const formats = [
//     "header",
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "blockquote",
//     "list",
//     "bullet",
//     "indent",
//     "link",
//     "image",
//   ];
//   return (
//     <div className=" ">
//       <ReactQuill
//         theme="snow"
//         modules={modules}
//         formats={formats}
//         value={value}
//         onChange={setValue}
//         className="h-20 lg:h-28 mb-16"
//       />
//     </div>
//   );
// };

// export default NewComment;
