import React from "react";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { BASE_URL, headers, DELETE } from "../../constants/api";
import "react-confirm-alert/src/react-confirm-alert.css";

function DeleteEnquiry(props) {
  const history = useHistory();

  function deleteBtn() {
    confirmAlert({
      title: "Confirm deletion",
      message: "If you click confirm you delete this enquiry.",
      buttons: [
        {
          label: "Confirm",
          onClick: () => deleteEnquiry(),
        },
        {
          label: "Cancel",
        },
      ],
    });
  }

  async function deleteEnquiry() {
    const url = BASE_URL + "enquiries/" + props.id;
    const options = { headers, method: DELETE };
    await fetch(url, options);

    history.push("/success");
  }

  return (
    <button className="btn btn__danger" onClick={deleteBtn}>
      Delete
    </button>
  );
}

export default DeleteEnquiry;
