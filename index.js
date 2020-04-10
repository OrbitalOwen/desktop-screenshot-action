const screenshot = require("screenshot-desktop");
const core = require("@actions/core");
const artifact = require("@actions/artifact");

const fileName = core.getInput("file-name");

const artifactClient = artifact.create();

async function uploadScreenshot() {
	await screenshot({ filename: fileName });
	await artifactClient.uploadArtifact(fileName, [fileName], ".");
}

uploadScreenshot().catch((error) => {
	core.setFailed(error.message);
});
