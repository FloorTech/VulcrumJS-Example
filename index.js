import { div, p } from "@floortech/vulcrumjs/dist/components/index.js"
import globalStylesheets from "./utils/stylesheets.js"
import globalMetadata from "./utils/global-metadata.js"

export function stylesheets() {
    return [
        ...globalStylesheets(),
    ]
}

export function metadata() {
    return {
        ...globalMetadata(),
        description: "The home page!",
    }
}

export default function index() {
    return div([
        div([
            `<h2 style="${[
                "color: #bfbfbf;",
            ].join(" ")}">Welcome to...</h2>`,
            "<h1>A VulcrumJS Example</h1>",
        ], {
            style: [
                "margin-top: 5rem;",
                "margin-left: auto;",
                "margin-right: auto;",
                "max-width: 625px;",
                "padding: 0 1rem;",
            ].join(" "),
        }),

        div([
            div([
                "This demo site was made using ",
                `<pre class="needs-spacing">@FloorTech/VulcrumJS</pre>`,
                " on the NPM registry.",
            ], {
                style: [
                    "display: flex;",
                    "align-items: center;",
                    "gap: .5rem;",
                ].join(" "),
            }),
            "<hr />",
            p("It is a complex example of how to use VulcrumJS to create an advanced web application."),
            p("Feel free to explore the code and see how it works!"),
            p(`You can also check out the <a href="https://github.com/FloorTech/VulcrumJS/blob/main/README.md" target="_blank">documentation</a> for more information on how to use VulcrumJS.`),

            `<pre class="needs-spacing">index.js</pre>`,
            `<pre>
                <code>import { p } from "@floortech/vulcrumjs/dist/components/index.js"

export default function index() {
    return p("Hello, World!")
}</code>
            </pre>`,
        ], {
            style: [
                "margin-top: 10rem; margin-left: auto; margin-right: auto; max-width: 585px; padding: 0 1rem;",
            ].join(" "),
        }),

        div([
            p("VulcrumJS implements JSX-style designing into vanilla JavaScript. In fact, this very page was made with JavaScript files and a template HTML file.", {}),
            p("All you have to do is run the commands below, and follow the steps.", {}),

            "<hr />",

            p("<strong>1</strong> Create a file with the following contents:"),

            `<pre class="needs-spacing">package.json</pre>`,
            `<pre>
                <code>{
    "type": "module"
}</code>
            </pre>`,

            p("<strong>2</strong> Run these commands to initialize the project."),

            `<pre>
    <code>npm install @floortech/vulcrumjs</code>
</pre>`,
            p("<strong>3</strong> Create a file with the following contents:"),

            `<pre class="needs-spacing">template.html</pre>`,            
            `<pre>
                <code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
    &lt;title&gtHello World&lt;/title&gt;
    &lt;VulcrumHead /&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;VulcrumRoot /&gt;
&lt;/body&gt;
&lt;/html&gt;
</code>
</pre>`,

            "<hr />",

            p("You now have a basic setup for a VulcrumJS project!"),
            p("You can now create a file called `index.js` with the following contents shown at the top of this page."),

            `<a href="/other">Other Page</a>`,
        ], {
            style: [
                "margin-top: 10rem; margin-left: auto; margin-right: auto; max-width: 585px; padding: 0 1rem;",
            ].join(" "),
        }),

        `<img src="/img/VulcrumJS Logo.jpeg" style="${[
            "border-radius: 1rem;",
            "width: 10rem;",
            "height: 10rem;",
            "top: 10rem;",
            "left: 20rem;",
            "position: fixed;",
        ].join(" ")}" />`,

        `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>`,
        `<script>
            hljs.highlightAll();
        </script>`
    ], {
        style: [
            "padding: 1rem;",
        ].join(" "),
    })
}
