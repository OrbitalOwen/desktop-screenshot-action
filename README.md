# Desktop Screenshot Action

This action screenshots the current desktop and uploads it as an artifact.

Uses [screenshot-desktop](https://github.com/bencevans/screenshot-desktop).

Supports Windows and macOS runners, Linux support currently requires imagemagick (see screenshot-desktop).

## Inputs

### file-name

**Required** The name of the screenshot jpg to upload. Default `"screenshot.jpg"`.

## Example usage

uses: actions/screenshot-desktop-action
with:
file-name: 'desktop.jpg'
