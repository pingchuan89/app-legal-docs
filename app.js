async function loadApps() {
  if (Array.isArray(window.APP_LIST) && window.APP_LIST.length > 0) {
    return window.APP_LIST;
  }
  const res = await fetch("apps.json", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load apps.json");
  return res.json();
}

function resolveSitePath(path) {
  if (!path) return "#";
  if (/^(https?:)?\/\//.test(path) || path.startsWith("/")) return path;
  const pathname = window.location.pathname;
  const endsWithSlash = pathname.endsWith("/");
  const lastPart = pathname.split("/").pop() || "";
  const looksLikeFile = lastPart.includes(".");
  let basePath = pathname;

  if (endsWithSlash) {
    basePath = pathname;
  } else if (looksLikeFile) {
    basePath = pathname.slice(0, pathname.lastIndexOf("/") + 1);
  } else {
    basePath = `${pathname}/`;
  }

  return `${window.location.origin}${basePath}${path}`;
}

function renderApps(apps) {
  const grid = document.getElementById("appsGrid");
  if (!grid) return;

  grid.innerHTML = apps
    .map((app) => {
      const homeUrl = resolveSitePath(app.homepage);
      const appPageUrl = resolveSitePath(app.appPage);
      const iconUrl = resolveSitePath(app.icon);
      return `
      <article class="card">
        <div class="app-top">
          <a class="icon-link" href="${homeUrl}" aria-label="Open ${app.name} home site">
            <img class="icon" src="${iconUrl}" alt="${app.name} icon" />
          </a>
          <div>
            <h2 class="app-name">${app.name}</h2>
            <p class="app-meta">${app.shortDescription}</p>
          </div>
        </div>
        <div class="actions">
          <a class="button primary" href="${homeUrl}">Open App Site</a>
          <a class="button" href="${appPageUrl}">Home</a>
        </div>
      </article>
    `;
    })
    .join("");
}

function setYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

async function init() {
  try {
    const apps = await loadApps();
    renderApps(apps);
  } catch (err) {
    const grid = document.getElementById("appsGrid");
    if (grid) {
      grid.innerHTML =
        '<p>Could not load app list. Please check <code>apps.json</code>.</p>';
    }
    console.error(err);
  } finally {
    setYear();
  }
}

init();
