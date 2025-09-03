# Static Website Project

This is a basic static website project built with HTML, CSS, and JavaScript. The project is structured to be easily deployed to AWS Amplify via GitHub.

## Project Structure

```
static-website
├── index.html            # Main HTML document (moved to repo root)
├── src
│   ├── styles
│   │   └── main.css      # Styles for the website
│   ├── scripts
│   │   └── main.js       # JavaScript code for interactivity
│   └── assets            # images and svgs
├── .gitignore            # Files and directories to ignore by Git
└── README.md             # Project documentation
```

## Setup Instructions

1. Clone the repository from GitHub:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd static-website
   ```

3. Open the `index.html` file in your web browser to view the website.

## Deployment to AWS Amplify

1. Create a new app in AWS Amplify.
2. Connect your GitHub repository to AWS Amplify.
3. Use the included `amplify.yml` at the repository root as the build settings (it publishes the repository root).
4. Deploy the app.

## Try it locally

You can open `index.html` directly in a browser, or run a simple static server from the project root, e.g. with Python:

```powershell
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Contact form configuration

The repository includes a contact form at `index.html`. By default the form's `action` is set to a `mailto:` fallback. To receive messages via a server you can:

- Use Formspree (easy, no backend):
   1. Create a free Formspree form at https://formspree.io
   2. Replace the form `action` in `src/index.html` with the Formspree endpoint (e.g. `https://formspree.io/f/{your-id}`).

- Or point `action` to your own server endpoint that accepts form POSTs.

The client-side JS will POST to the configured endpoint and show a status message. If no endpoint is configured the form will fall back to opening the user's mail client via `mailto:`.

## Background logo

The project includes a neutral placeholder SVG at `src/assets/logo-placeholder.svg` and CSS that places it as a subtle page background. To use an official Saudi Aramco logo:

- Replace `src/assets/logo-placeholder.svg` with your authorized SVG or raster image (keep the same filename or update `--bg-logo` in `src/styles/main.css`). Note assets live in `static-website/src/assets/` when `index.html` is at the project root.
- Make sure you have the right to use the Saudi Aramco logo and follow their brand/trademark guidelines.

If you want, I can add the logo file for you once you provide it.

## Additional Information

- Ensure that you have the necessary permissions to deploy to AWS Amplify.
- Modify the `src/styles/main.css` and `src/scripts/main.js` files to customize the appearance and functionality of the website as needed.