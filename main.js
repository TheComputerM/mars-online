import "./style.css";

/**
 *
 * @param {KeyboardEvent} e
 * @returns
 */
function overrideShortcuts(e) {
  if (
    (navigator.userAgent.includes("Mac") ? e.metaKey : e.ctrlKey) &&
    e.key === "s"
  )
    return true;
  return false;
}

async function main() {
  await cheerpjInit({
    clipboardMode: "permission",
    overrideShortcuts,
  });
  cheerpjCreateDisplay(-1, -1, document.getElementById("app"));

  await cheerpjRunJar(`/app/${import.meta.env.BASE_URL}/Mars.jar`);
}

main();
