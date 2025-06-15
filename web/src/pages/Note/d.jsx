import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";

const CLIENT_ID = "YOUR_CLIENT_ID.apps.googleusercontent.com";

const App = () => {
  const [file, setFile] = useState(null);
  const [folderName] = useState("MyUploads"); // Change this to your desired folder name

  const onLoginSuccess = (response) => {
    const { accessToken } = response; // Get the access token

    if (file) {
      handleUpload(accessToken);
    } else {
      console.error("No file selected.");
    }
  };

  const onLoginFailure = (response) => {
    console.error("Login Failed:", response);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async (accessToken) => {
    let folderId = await getOrCreateFolder(accessToken, folderName);
    if (folderId) {
      await uploadFile(accessToken, folderId);
    }
  };

  const getOrCreateFolder = async (accessToken, folderName) => {
    // Search for the folder
    const query = `mimeType='application/vnd.google-apps.folder' and name='${folderName}' and trashed=false`;
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
      console.error("Error searching for folder:", response.statusText);
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
      name: file.name,
      mimeType: file.type,
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

  return (
    <div>
      <h1>Google Drive File Upload</h1>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={"single_host_origin"}
      />
      <input
        type="file"
        accept=".jpg,.jpeg,.png,.pdf,.ppt,.pptx"
        onChange={handleFileChange}
      />
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
};

export default App;
