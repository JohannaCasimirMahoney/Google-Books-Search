import React from "react";
// THIS IS FOR THE CONTAINER, ROW, AND COL COMPONENTS
export function Container({ fluid, children}) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;

}

export function Row({ fluid, children}) {
    return<div className={`row${fluid ? "-fluid": ""}`}>{children}</div>;
}

export function Col({ size, children}) {
    return (
        <div
        className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
        >
            {children}
        </div>
    );
}