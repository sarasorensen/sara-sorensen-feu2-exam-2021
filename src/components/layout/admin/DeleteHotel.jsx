import React from "react";
import { confirmAlert } from "react-confirm-alert";
import { BASE_URL, headers, DELETE } from "../../constants/api";
import "react-confirm-alert/src/react-confirm-alert.css";

function DeleteHotel(props) {
  function checkDelete() {
    confirmAlert({
      title: "Confirm deletion",
      message: "If you click confirm you delete this hotel.",
      buttons: [
        {
          label: "Confirm",
          onClick: () => deleteHotel(),
        },
        {
          label: "Cancel",
        },
      ],
    });
  }

  async function deleteHotel() {
    const url = BASE_URL + "establishments/" + props.id;
    const options = { headers, method: DELETE };
    await fetch(url, options);

    reload();
  }
  const reload = () => window.location.reload();

  return (
    <button className="btn btn__danger" onClick={checkDelete}>
      Delete
    </button>
  );
}

export default DeleteHotel;
