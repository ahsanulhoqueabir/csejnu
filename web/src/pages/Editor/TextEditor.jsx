import { useEffect, useState } from "react";
import { ContentState, Editor, EditorState, RichUtils } from "draft-js";
// import "./style.css";
import "draft-js/dist/Draft.css";
import { stateToHTML } from "draft-js-export-html";
import {
  FaBold,
  FaCode,
  FaIndent,
  FaItalic,
  FaListOl,
  FaListUl,
} from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa6";

const TextEditor = ({ setNewText, defaultText = "" }) => {
  const [text, setText] = useState();
  const [editorState, setEditorState] = useState(() =>
    defaultText
      ? EditorState.createWithContent(ContentState.createFromText(defaultText))
      : EditorState.createEmpty()
  );

  useEffect(() => {
    if (defaultText) {
      setEditorState(() =>
        EditorState.createWithContent(ContentState.createFromText(defaultText))
      );
      return;
    } else {
      setEditorState(() => EditorState.createEmpty());
    }
  }, []);
  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onChange = (state) => {
    setEditorState(state);
  };

  const toggleBlockType = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };
  const toggleInlineStyle = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const getHTMLContent = () => {
    const contentState = editorState.getCurrentContent();
    const options = {
      blockRenderers: {
        "unordered-list-item": (block) => {
          return `<ul class='list-disc'><li class='ml-5'>${block.getText()}</li></ul>`;
        },
        "ordered-list-item": (block) => {
          return `<ol class='list-decimal'><li class='ml-5'>${block.getText()}</li></ol>`;
        },
        "header-one": (block) => {
          return `<h1 class='text-5xl font-semibold'>${block.getText()}</h1>`;
        },
        "header-two": (block) => {
          return `<h2 class='text-xl font-semibold'>${block.getText()}</h2>`;
        },
        "header-three": (block) => {
          return `<h3 class='text-lg font-semibold'>${block.getText()}</h3>`;
        },
        "header-four": (block) => {
          return `<h4 class='font-bold'>${block.getText()}</h4>`;
        },
        blockquote: (block) => {
          return `<blockquote class='border-l-4 border-gray-500 pl-2 italic'>${block.getText()}</blockquote>`;
        },
        "code-block": (block) => {
          return `<div class='mockup-code'>
          <pre data-prefix=">" class=' rounded '>${block.getText()}</pre></div>`;
        },
      },
      entityTransforms: {
        LINK: (entity) => {
          const { url } = entity.getData();
          return `<a href="${url}">${entity.getData().url}</a>`;
        },
        IMAGE: (entity) => {
          const { src } = entity.getData();
          return `<img src="${src}" alt="image" class="w-full"/>`;
        },
      },
    };
    const html = stateToHTML(contentState, options);
    setText({ __html: html });
    setNewText(html);
    setEditorState(() => EditorState.createEmpty());

    // console.log(html);
  };
  // console.log();
  return (
    <div className=" mt-2">
      <div className="w-full border p-3  rounded">
        <div className="flex text-nowrap border-b-[1px] pb-2 gap-3">
          <button
            className="w-fit font-bold"
            onClick={() => toggleBlockType("header-one")}
          >
            H1
          </button>
          <button
            className="w-fit font-bold"
            onClick={() => toggleBlockType("header-two")}
          >
            H2
          </button>
          <button
            className="w-fit font-bold"
            onClick={() => toggleBlockType("header-three")}
          >
            H3
          </button>

          <button onClick={() => toggleInlineStyle("BOLD")}>
            <FaBold />
          </button>
          <button onClick={() => toggleInlineStyle("ITALIC")}>
            <FaItalic />{" "}
          </button>

          <button
            className="w-fit"
            onClick={() => toggleBlockType("unordered-list-item")}
          >
            <FaListUl />
          </button>
          <button
            className="w-fit"
            onClick={() => toggleBlockType("ordered-list-item")}
          >
            <FaListOl />
          </button>
          <button
            className="w-fit"
            onClick={() => toggleBlockType("blockquote")}
          >
            <FaIndent />
          </button>
          {/* <button
            className="w-fit"
            onClick={() => toggleBlockType("code-block")}
          >
            <FaCode />
          </button> */}
        </div>
        <div
          className="min-h-48 lg:min-h-60 10"
          //   onClick={() => editor.focus()}
        >
          <Editor
            editorState={editorState}
            handleKeyCommand={handleKeyCommand}
            onChange={onChange}
            placeholder="Type your comment here..."
            customStyleMap={styleMap}
          />
        </div>
      </div>
      <button
        className={`btn hover:border hover:border-info-content outline-transparent transition duration-700 ease-in-out  mt-4 ${
          stateToHTML(editorState.getCurrentContent()) === "<p><br></p>"
            ? "cursor-not-allowed disabled"
            : ""
        }`}
        onClick={getHTMLContent}
      >
        Submit{" "}
        <span>
          <FaPaperPlane />
        </span>
      </button>
      {/* <div>
        <div dangerouslySetInnerHTML={text}></div>
      </div> */}
    </div>
  );
};

export default TextEditor;

const styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: "monospace",
    fontSize: 16,
    padding: 2,
  },
  "header-one": {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
  },
};
