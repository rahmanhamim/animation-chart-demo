import React from "react";

interface IProps {
    loading?: boolean;
    children: React.ReactNode;
    [key: string]: any;
}

const GradientButton = ({ loading = false, children, ...props }: IProps) => {
    return (
        <button
            {...props}
            style={{
                border: "10px solid",
                borderImageSlice: "1",
                borderWidth: "1px",
                padding: ".5em",
                borderImageSource:
                    "linear-gradient(90deg, rgba(255,216,14,1) 0%, rgba(244,255,122,1) 26%, rgba(140,140,140,1) 49%, rgba(126,255,178,1) 74%, rgba(44,217,255,1) 100%)",
            }}
        >
            {children}
        </button>
    );
};

export default GradientButton;
