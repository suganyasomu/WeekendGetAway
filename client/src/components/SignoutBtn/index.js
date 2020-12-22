import React from"react";
import app from "../../base";

function SignoutBtn() {
    function signout() {
        app
        .auth()
        .signOut()
        .then(function () {
            window.location = "/login";
            alert("You have logged out");
        })
        .catch(function (error) {
            console.log(error);
            // An error happened.
        });
    }

    return (
        <button className="btn btn-outline-secondary" onClick={signout}>
            Sign out
        </button>
    )
}

export default SignoutBtn;