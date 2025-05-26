export function metadata() {
    return {
        description: "The home page!",
    }
}

export default function index({ p, }) {
    return p("Hello!")
}
