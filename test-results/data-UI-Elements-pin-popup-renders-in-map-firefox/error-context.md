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
      - navigation [ref=e6]:
        - link "Map" [ref=e7] [cursor=pointer]:
          - /url: /map
        - link "Resources" [ref=e8] [cursor=pointer]:
          - /url: /resources
        - link "Student Docs" [ref=e9] [cursor=pointer]:
          - /url: /benefits
        - link "Account" [ref=e10] [cursor=pointer]:
          - /url: /account
      - button "Toggle theme" [ref=e12]:
        - img
  - main [ref=e13]:
    - generic [ref=e15]:
      - generic [ref=e16]:
        - generic:
          - generic:
            - img
        - generic:
          - generic [ref=e97]:
            - button "Zoom in" [ref=e98] [cursor=pointer]: +
            - button "Zoom out" [ref=e99] [cursor=pointer]: −
          - generic [ref=e100]:
            - link "Leaflet" [ref=e101] [cursor=pointer]:
              - /url: https://leafletjs.com
              - img [ref=e102]
              - text: Leaflet
            - text: "| ©"
            - link "OpenStreetMap" [ref=e106] [cursor=pointer]:
              - /url: https://www.openstreetmap.org/copyright
            - text: contributors
      - generic [ref=e107]:
        - generic [ref=e108]:
          - paragraph [ref=e110]: 80 places
          - generic [ref=e111]:
            - paragraph [ref=e112]: City
            - generic [ref=e113]:
              - checkbox "Mumbai" [ref=e114]
              - text: Mumbai
            - generic [ref=e115]:
              - checkbox "Thane" [ref=e116]
              - text: Thane
            - generic [ref=e117]:
              - checkbox "Navi Mumbai" [ref=e118]
              - text: Navi Mumbai
          - generic [ref=e119]:
            - paragraph [ref=e120]: Type
            - generic [ref=e121]:
              - checkbox "Book shop" [ref=e122]
              - generic [ref=e124]: Book shop
            - generic [ref=e125]:
              - checkbox "Library" [ref=e126]
              - generic [ref=e128]: Library
            - generic [ref=e129]:
              - checkbox "Exam centre" [ref=e130]
              - generic [ref=e132]: Exam centre
            - generic [ref=e133]:
              - checkbox "Important locations" [ref=e134]
              - generic [ref=e136]: Important locations
            - generic [ref=e137]:
              - checkbox "Stationery" [ref=e138]
              - generic [ref=e140]: Stationery
            - generic [ref=e141]:
              - checkbox "Internet cafe" [ref=e142]
              - generic [ref=e144]: Internet cafe
            - generic [ref=e145]:
              - checkbox "Airport" [ref=e146]
              - generic [ref=e148]: Airport
            - generic [ref=e149]:
              - checkbox "Train station" [ref=e150]
              - generic [ref=e152]: Train station
          - paragraph [ref=e153]: No filter selected means everything shows.
          - generic [ref=e154]: Filter places by city and type
        - generic [ref=e155]:
          - button "Near me" [ref=e157]:
            - img
            - text: Near me
          - button "Copy a shareable link to this view" [ref=e158]:
            - img
            - text: Share
  - contentinfo [ref=e159]:
    - generic [ref=e160]:
      - paragraph [ref=e161]: StudyMap. Open source and self-hostable. Built for students.
      - navigation [ref=e162]:
        - link "Privacy" [ref=e163] [cursor=pointer]:
          - /url: /legal/privacy
        - link "Terms" [ref=e164] [cursor=pointer]:
          - /url: /legal/terms
        - link "Disclaimer" [ref=e165] [cursor=pointer]:
          - /url: /legal/disclaimer
        - link "Contribute" [ref=e166] [cursor=pointer]:
          - /url: /contribute
        - link "GitHub" [ref=e167] [cursor=pointer]:
          - /url: https://github.com/anaydhawan/studymap
  - region "Notifications alt+T"
  - button "Open Next.js Dev Tools" [ref=e173] [cursor=pointer]:
    - img [ref=e174]
  - alert [ref=e178]
```