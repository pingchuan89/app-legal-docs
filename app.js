async function loadApps() {
  if (Array.isArray(window.APP_LIST) && window.APP_LIST.length > 0) {
    return window.APP_LIST;
  }
  const res = await fetch("apps.json", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load apps.json");
  return res.json();
}

function renderApps(apps) {
  const grid = document.getElementById("appsGrid");
  if (!grid) return;

  grid.innerHTML = apps
    .map(
      (app) => `
      <article class="card">
        <div class="app-top">
          <a class="icon-link" href="${app.homepage}" target="_blank" rel="noopener noreferrer" aria-label="Open ${app.name} home site">
            <img class="icon" src="${app.icon}" alt="${app.name} icon" />
          </a>
          <div>
            <h2 class="app-name">${app.name}</h2>
            <p class="app-meta">${app.shortDescription}</p>
          </div>
        </div>
        <div class="actions">
          <a class="button primary" href="${app.homepage}" target="_blank" rel="noopener noreferrer">Open App Site</a>
          <a class="button" href="${app.homepage}">Home</a>
        </div>
      </article>
    `,
    )
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
