const screenshot = require("screenshot-desktop");

screenshot({ filename: "screenshot.jpg" }).catch(() => {
	process.exit(1);
});
