'use client'

import { redirect } from "next/navigation";
import React from "react";

const NotFoundPage = () => {
    return (
        <div>
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <button onClick={() => redirect('/movies')}>Return to Movies Page</button>
        </div>
    );
}

export default NotFoundPage;