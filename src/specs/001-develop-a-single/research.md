# Research & Decisions

**Feature**: English Grammar Practice SPA
**Date**: 2025-09-14

## Summary
This document records the technical decisions made during the planning phase for the English Grammar Practice SPA. The user provided a clear technical direction, so no exploratory research was required.

## Key Decisions

### Frontend Framework
- **Decision**: Use Angular 18.x.
- **Rationale**: Directly specified by the user. Angular is a robust framework suitable for building SPAs.
- **Alternatives considered**: None, as the choice was mandated.

### Data Storage
- **Decision**: Store grammar content in a local JSON file (`src/assets/grammar.json`).
- **Rationale**: The application has no backend, and this approach simplifies data management. The user specified this requirement.
- **Alternatives considered**: None.

### Styling
- **Decision**: Use vanilla CSS and HTML.
- **Rationale**: The user requested to use official components and vanilla technologies as much as possible, which promotes simplicity and avoids additional dependencies.
- **Alternatives considered**: CSS frameworks like Bootstrap or Material Design were considered but rejected to adhere to the user's preference for simplicity.

### State Management
- **Decision**: Use Angular Signals for local component state.
- **Rationale**: The application's state is simple and localized to the slide navigation. Angular Signals are a lightweight and efficient way to manage this.
- **Alternatives considered**: NgRx was considered but deemed overly complex for the current scope.
