import { useState } from "react";

export const Task = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskText, setEditedTaskText] = useState(props.taskText);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    props.handleChangeTaskName(editedTaskText, props.id);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedTaskText(e.target.value);
  };
  return (
    <div className="containerListDiv">
      {isEditing ? (
        <input
          type="text"
          value={editedTaskText}
          onChange={handleInputChange}
          id="containerListDivInput"
        />
      ) : (
        <div className="containerListName" id={props.id}>
          {props.taskText}
        </div>
      )}
      <div className="containerListDivButtons">
        {isEditing ? (
          <button
            type="button"
            id={props.id}
            className="containerListDivButtonsAction"
            onClick={handleSaveClick}
          >
            Save
          </button>
        ) : (
          <button
            type="button"
            data-action="edit"
            id={props.id}
            className="containerListDivButtonsAction"
            onClick={handleEditClick}
          >
            Edit
          </button>
        )}
        <button
          type="button"
          data-action="delete"
          id={props.id}
          className="containerListDivButtonsAction"
          onClick={props.handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

//   <div className="containerListDiv">
//     <input type="text" style={{ display: "none" }} id={props.id}></input>
//     <div className="containerListName" id={props.id}>
//       {props.taskText}
//     </div>
//     <div className="containerListDivButtons">
//       <button
//         type="button"
//         id={props.id}
//         className="containerListDivButtonsAction"
//         style={{ display: "none" }}
//         onClick={props.handleChangeTaskName}
//       >
//         Save
//       </button>
//       <button
//         type="button"
//         data-action="edit"
//         id={props.id}
//         className="containerListDivButtonsAction"
//       >
//         Edit
//       </button>
//       <button
//         type="button"
//         data-action="delete"
//         id={props.id}
//         className="containerListDivButtonsAction"
//         onClick={props.handleDeleteClick}
//       >
//         Delete
//       </button>
//     </div>
//   </div>
// );
