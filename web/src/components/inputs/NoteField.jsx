import { useState } from "react";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";

const NoteField = ({ setData, field }) => {
  const [showName, setShowName] = useState({});
  const [isUploading, setUploading] = useState(false);
  const [files, setFiles] = useState(null);
  const [folderName, setFolderName] = useState("csejnu");
  const { user } = useAuth();

  const handleUpload = async () => {
    if (!files) return;
    console.log("uploading");
    let folderId = await getOrCreateFolder(user.accessToken, folderName);
    if (folderId) {
      await uploadFile(user.accessToken, folderId);
    }
  };

  const getOrCreateFolder = async (accessToken, folderName) => {
    // Log the access token for debugging (ensure this token is valid)
    console.log("Access Token:", accessToken);

    // Construct the query to check if the folder exists
    const query = `mimeType='application/vnd.google-apps.folder' and name='${folderName}' and trashed=false`;

    try {
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(
          query
        )}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.files.length > 0) {
          // Folder exists
          console.log("Folder already exists:", data.files[0]);
          return data.files[0].id;
        } else {
          // Create a new folder
          return createFolder(accessToken, folderName);
        }
      } else {
        const errorDetails = await response.text(); // Get response text for detailed error info
        console.error(
          "Error searching for folder:",
          response.statusText,
          errorDetails
        );
        return null;
      }
    } catch (error) {
      console.error("Fetch error:", error);
      return null;
    }
  };

  const createFolder = async (accessToken, folderName) => {
    const metadata = {
      name: folderName,
      mimeType: "application/vnd.google-apps.folder",
    };

    const response = await fetch("https://www.googleapis.com/drive/v3/files", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(metadata),
    });

    if (response.ok) {
      const folderData = await response.json();
      console.log("Folder created successfully:", folderData);
      return folderData.id;
    } else {
      console.error("Error creating folder:", response.statusText);
      return null;
    }
  };

  const uploadFile = async (accessToken, folderId) => {
    const metadata = {
      name: files.name,
      mimeType: files.type,
      parents: [folderId],
    };

    const form = new FormData();
    form.append(
      "metadata",
      new Blob([JSON.stringify(metadata)], { type: "application/json" })
    );
    form.append("file", file);

    const response = await fetch(
      "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: form,
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("File uploaded successfully:", data);
    } else {
      console.error("Upload failed:", response.statusText);
    }
  };
  console.log(files);
  console.log(user);

  return (
    <div className="space-y-2  text-sm ">
      {/* {imageSrc && <img src={imageSrc} alt="" />} */}
      <h1 className=" font-medium font-philosopher text-xl">
        {field.label}
        {field.isRequired && <span className="text-red-500">*</span>}
      </h1>
      <label
        className="flex  w-full items-center gap-4 rounded-md text-info-content bg-base-300 px-6 py-2 "
        htmlFor={field.name}
      >
        <FaArrowUpFromBracket size={20} />

        <div className="text-lg flex gap-5 items-center text-wrap">
          {" "}
          <p className="text-wrap">
            {showName.name ? showName.name : ` ${field.placeholder}`}
          </p>
          {isUploading && <Spinner />}
        </div>
      </label>
      <input
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            const noteFile = e.target.files[0];
            setShowName(noteFile);
            setFiles(noteFile);
            handleUpload();
          }
        }}
        className="hidden"
        id={field.name}
        type="file"
      />
    </div>
  );
};

export default NoteField;

const Spinner = () => {
  return (
    <div className="size-6 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dotted border-info-content"></div>
  );
};
