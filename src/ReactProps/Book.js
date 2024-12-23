import React from "react";
import BookList from "./BookList";

class Book extends React.Component {
    render() {
        return (
            <>
                <BookList name="React" author="Jordan Walke" />
                <BookList name="Java" author="James" />
                <BookList name="HTML" author="Tim Berners-Lee" />
            </>
        );
    }
}

export default Book;
