function updateMeta(name, content) {
    let meta = document.querySelector(`meta[name="${name}"]`) || document.createElement("meta");
    meta.name = name;
    meta.content = content;
    document.head.appendChild(meta);
}

function updateOG(property, content) {
    let meta = document.querySelector(`meta[property="${property}"]`) || document.createElement("meta");
    meta.setAttribute("property", property);
    meta.setAttribute("content", content);
    document.head.appendChild(meta);
}

async function updateTags(property) {
    try {
        const response = await fetch("https://strapi-production-9858.up.railway.app/api/seo?pLevel=5");
        const data = await response.json();
        if (data && data.data && data.data[property]) {
            const metaHome = data.data[property];
            document.title = metaHome.title;

            if (metaHome.tags) {
                const tags = metaHome.tags;

                tags.forEach(tag => {
                    if (tag.name.startsWith("og")) {
                        updateOG(tag.name, tag.value);
                    } else {
                        updateMeta(tag.name, tag.value);
                    }
                });
            }
        }

    } catch (error) {
        console.error("Error fetching meta tags:", error);
    }
}

function updateTagsLocal(model) {
    try {
        console.log(model);
        if (model && model.seo && model.seo.tags) {
            const metaHome = model.seo;
            document.title = metaHome.title;

            if (metaHome.tags) {
                const tags = metaHome.tags;

                tags.forEach(tag => {
                    if (tag.name.startsWith("og")) {
                        updateOG(tag.name, tag.value);
                    } else {
                        updateMeta(tag.name, tag.value);
                    }
                });
            }
        }

    } catch (error) {
        console.error("Error fetching meta tags:", error);
    }
}