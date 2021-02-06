import React from "react";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { BASE_URL, headers, DELETE } from "../../constants/api";
import "react-confirm-alert/src/react-confirm-alert.css";

function DeleteContact(props) {
  const history = useHistory();

  function deleteButton() {
    confirmAlert({
      title: "Confirm deletion",
      message: "If you click confirm you delete this contact.",
      buttons: [
        {
          label: "Confirm",
          onClick: () => deleteContact(),
        },
        {
          label: "Cancel",
        },
      ],
    });
  }

  async function deleteContact() {
    const url = BASE_URL + "enquiries/" + props.id;
    const options = { headers, method: DELETE };
    await fetch(url, options);

    history.push("/success");
  }

  return (
    <button className="btn btn__danger" onClick={deleteButton}>
      Delete
    </button>
  );
}

export default DeleteContact;
