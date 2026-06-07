# papers/

This folder is for papers you keep on your own machine. StudyMap hosts nothing; it only lists what you put here so you can open it offline on localhost.

## How it works

- Put files in subfolders named after the board, for example:
  ```
  papers/
    SAT/
      practice-test-4.pdf
    IB/
      math-aa-2023.pdf
      physics-syllabus.pdf
  ```
- Files directly inside `papers/` (not in a subfolder) are grouped under "Other".
- Open the **Papers** page (`/papers`) and your files appear, grouped by folder, with an Open button.

## Privacy and git

Everything inside `papers/` is ignored by git (see `.gitignore`), except this README and `.gitkeep`. Your papers are never committed, pushed, or uploaded. They stay on your machine.

Because the listing reads the local filesystem, the Papers page only shows files when the app runs on your own computer or your own self-hosted server. A shared/hosted deployment will show an empty state.
