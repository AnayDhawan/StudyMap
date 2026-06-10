# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: data.spec.ts >> UI Elements >> pin popup renders in map
- Location: e2e\data.spec.ts:117:7

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "StudyMap" [ref=e4] [cursor=pointer]:
        - /url: /
        - img "StudyMap" [ref=e5]
      - generic [ref=e6]:
        - button "Toggle theme" [ref=e7]:
          - img
        - button "Open menu" [ref=e8]:
          - img
  - main [ref=e9]:
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic:
          - generic:
            - img
        - generic:
          - generic [ref=e93]:
            - button "Zoom in" [ref=e94] [cursor=pointer]: +
            - button "Zoom out" [ref=e95] [cursor=pointer]: −
          - generic [ref=e96]:
            - link "Leaflet" [ref=e97] [cursor=pointer]:
              - /url: https://leafletjs.com
              - img [ref=e98]
              - text: Leaflet
            - text: "| ©"
            - link "OpenStreetMap" [ref=e102] [cursor=pointer]:
              - /url: https://www.openstreetmap.org/copyright
            - text: contributors
      - button "Filters" [ref=e103]:
        - img
        - text: Filters
  - contentinfo [ref=e104]:
    - generic [ref=e105]:
      - paragraph [ref=e106]: StudyMap. Open source and self-hostable. Built for students.
      - navigation [ref=e107]:
        - link "Privacy" [ref=e108] [cursor=pointer]:
          - /url: /legal/privacy
        - link "Terms" [ref=e109] [cursor=pointer]:
          - /url: /legal/terms
        - link "Disclaimer" [ref=e110] [cursor=pointer]:
          - /url: /legal/disclaimer
        - link "Contribute" [ref=e111] [cursor=pointer]:
          - /url: /contribute
        - link "GitHub" [ref=e112] [cursor=pointer]:
          - /url: https://github.com/anaydhawan/studymap
  - region "Notifications alt+T"
  - button "Open Next.js Dev Tools" [ref=e118] [cursor=pointer]:
    - img [ref=e119]
  - alert [ref=e122]
```