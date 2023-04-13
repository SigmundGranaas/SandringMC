---
title: "Using variables to store player coordinates"
description: "Learn the basics of Java programming and Minecraft modding."
difficulty: "Beginner"
---

## Using variables to store player coordinates

In Minecraft, the player's position in the world is represented by three coordinates: x, y, and z. You can use variables
to store these coordinates and manipulate them as needed.

``` java
double playerX;
double playerY;
double playerZ;

playerX=100.5;
playerY=64.0;
playerZ=-250.8;
```

In this example, we declare and initialize three variables (`playerX`, `playerY`, and `playerZ`) to store the player's
coordinates in the game world. These variables can be used to track the player's position, set waypoints, or implement
custom teleportation mechanics.

**Example: Creating a mod that saves and loads player's last known coordinates**

1. Declare variables for storing the player's last known coordinates (e.g., `lastPlayerX`, `lastPlayerY`,
   and `lastPlayerZ`).
2. Create an event listener that listens for player movement events.
3. In the event handler, update the variables with the player's current coordinates whenever they move.
4. Implement a command or user interface that allows the player to save their current coordinates as their "last known"
   position.
5. Implement another command or user interface that teleports the player to their saved "last known" position.