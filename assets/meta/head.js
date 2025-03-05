document.addEventListener("DOMContentLoaded", async function () {
    head.title("My SEO Optimized Page");
    function updateMetaTag(name, content) {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
            meta = document.createElement("meta");
            meta.name = name;
            document.head.appendChild(meta);
        }
        meta.content = content;
    }

    updateMetaTag("description", "This is an SEO-friendly page.");
    updateMetaTag("keywords", "JavaScript, SEO, HTML, HeadJS");
});