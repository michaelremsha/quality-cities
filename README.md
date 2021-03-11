## Project Description

Pull info about requested area/city like it's population, income, living cost etc scores. As well it will show the google map centered on that area

## Link to the API you plan to use

Teleport API, they create the scores for income etc:
https://developers.teleport.org/api/
Google Maps API to show the actual map:
https://developers.google.com/maps/

## Example data response you plan to use

https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/

## Visual of your component hierarchy

Navigation Bar (showing links to home page / current search / link to search history
HomePage (search coordinates/ city functionality)

> Details(one that will have actual info)
> Map(shows map centered on searched location, as a separate element)

> Search History(showing previously searched locations by user with link to details and map element)

## Wire Frames

https://app.mockplus.com/run/rp/AfQIhrYvw0g/_WftJ26KRRD?ps=1&ha=0&la=0&fc=0&out=1
![WireframHOME](https://media.git.generalassemb.ly/user/34028/files/5a059d80-81a0-11eb-99ac-19bff6a9b3f5)
![WireframDetails](https://media.git.generalassemb.ly/user/34028/files/7acdf300-81a0-11eb-98f5-755b561a4f58)

## User Stories

As a user I want to search by name of the city or coordinates and see details relevant to that location as well as a map of that location.

### MVP Goals

Search by city name or coordinates
Display info
Display map
Display search history

### Stretch Goals

Clickable search History elements that return to the page with details and a map
Additional info from different API's
Be able to search by clicking on the location on the map
