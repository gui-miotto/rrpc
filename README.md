# Rhine Robotics Paper Club — website

Static site built with [Jekyll](https://jekyllrb.com/). GitHub Pages builds it on every push, so you don't need a build step or a GitHub Action.

## Adding a meeting

1. Copy `_data/meetings/001.yml` to a new file, e.g. `_data/meetings/002.yml`. The file name only has to be unique.
2. Edit the fields: `edition`, `date` (YYYY-MM-DD), `start`/`end`, `location`, `signup_url` (Luma) and 1–3 `papers` (`title`, `url`, `presenter`). `title`, `description` and `location.map_url` are optional.
3. Create the event on Luma **inside the club's Luma calendar** (not under your personal profile), so people who subscribed to the calendar get an email about it. Use its link as `signup_url`.
4. Commit and push. The meeting shows up under **Upcoming**, and it moves to **Previous meetings** on its own after the date has passed. Visitors' browsers check the date, so you don't need to rebuild.

Past meetings hide the sign-up and calendar buttons.

## Editing the other text

All other text is in `_data/site.yml`: the Luma calendar link (`luma_calendar_url`, shown as a "Luma calendar" button under the "Meetings" heading), the hero, the intro, the Discord panel, "How it works", the topics, "About me", the supporters and the footer. Multi-paragraph fields (`body: |`) accept Markdown.

Supporter logos are in `assets/img/supporters/`. To add a supporter, add an item under `supporters.items`.

## Publishing on GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages → Build and deployment**, choose **Deploy from a branch** and pick `main` / `(root)`.
3. If the site lives at `https://<user>.github.io/<repo>/`, set `baseurl: "/<repo>"` in `_config.yml`. For a `<user>.github.io` repository or a custom domain, leave it empty.

## Local preview (optional)

Install Ruby (Arch/CachyOS: `sudo pacman -S --needed ruby ruby-bundler base-devel`), then:

```sh
bundle config set --local path vendor/bundle   # once; keeps gems inside the project
bundle install
bundle exec jekyll serve                       # → http://localhost:4000
```
