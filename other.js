import { div, p } from "@floortech/vulcrumjs/dist/components/index.js"
import globalStylesheets from "./utils/stylesheets.js"
import globalMetadata from "./utils/global-metadata.js"
import OtherPart from "./components/other-part.js"

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

export default function other() {
    return div([
        p("This is another page in the example site!"),
        OtherPart(),
    ], {
        style: [
            "margin-top: 5rem;",
            "margin-left: auto;",
            "margin-right: auto;",
            "max-width: 625px;",
            "padding: 0 1rem;",
        ].join(" "),
    })
}
