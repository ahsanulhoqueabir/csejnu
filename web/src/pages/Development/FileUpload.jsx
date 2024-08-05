import React, { useState } from "react";
import { toast } from "react-toastify";

const FileUpload = () => {
  const [Newfile, setFile] = useState(null);
  const handleUpload = (e) => {
    e.preventDefault();
    let file = new FormData();
    file.append("file", Newfile);

    // if (fileData) {
    //   fetch("http://localhost:3000/uploadFile", {
    //     method: "POST",
    //     body: file,
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       toast.success("File uploaded successfully");
    //     });
    // }
    console.log(file);
  };
  const handelFile = (e) => {
    setFile(e.target.files[0]);
  };
  //   console.log(file);
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl text-center my-10">File Upload</h1>
      <form
        onSubmit={handleUpload}
        className="flex justify-center items-center"
      >
        <input name="file" type="file" onChange={handelFile} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Upload
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
