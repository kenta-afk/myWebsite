import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./style.css?inline";

export default component$(() => {
    useStylesScoped$(styles);
    return (
        <header class="header">
            <div class="container">
                <h1 class="logo">kenta-afk</h1>
                <ul class="nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </header>
    )
})