/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import colors from "../../Utils/Colors";
import gradients from "../../Utils/Gradients";
import shadow from "../../Utils/Shadows";

function AboutButton() {
    return (
        <a
            href="https://vscpotf-updatedrep.vercel.app/projects"
            className="button button--primary"
            style={{
                boxShadow: `${shadow(0, 2, 10, 0, colors.pink)}`,
                background: `${gradients.magenta}`,
            }}
        >
            View Portfolio
        </a>
    );
}

export default AboutButton;
