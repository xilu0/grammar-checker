# Implementation Plan: English Grammar Practice SPA


**Branch**: `001-develop-a-single` | **Date**: 2025-09-14 | **Spec**: [link](spec.md)
**Input**: Feature specification from `/specs/001-develop-a-single/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
4. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
5. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CLAUDE.md` for Claude Code, `.github/copilot-instructions.md` for GitHub Copilot, or `GEMINI.md` for Gemini CLI).
6. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
7. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
8. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:
- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary
This plan outlines the development of a Single-Page Application (SPA) to help users practice English grammar. The application will be built with Angular, presenting grammar points in a slide-based format. All content will be sourced from a local JSON file, and the application will have no backend dependency.

## Technical Context
**Language/Version**: TypeScript 5.x
**Primary Dependencies**: Angular 18.x
**Storage**: Local JSON file
**Testing**: Jasmine/Karma
**Target Platform**: Web Browser (SPA)
**Project Type**: single
**Performance Goals**: Initial load < 500KB, meet Core Web Vitals
**Constraints**: No backend dependency. Use official Angular components and vanilla HTML/CSS/TypeScript.
**Scale/Scope**: Cover all grammatical knowledge points as defined in the local JSON file.

## Constitution Check
*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Simplicity**:
- Projects: 1 (frontend SPA)
- Using framework directly? Yes
- Single data model? Yes
- Avoiding patterns? Yes

**Architecture**:
- EVERY feature as library? N/A (single project)
- Libraries listed: N/A
- CLI per library: N/A
- Library docs: N/A

**Testing (NON-NEGOTIABLE)**:
- RED-GREEN-Refactor cycle enforced? Yes
- Git commits show tests before implementation? Yes
- Order: Contract→Integration→E2E→Unit strictly followed? Yes
- Real dependencies used? Yes (local JSON file)
- Integration tests for: new libraries, contract changes, shared schemas? N/A

**Observability**:
- Structured logging included? Yes
- Frontend logs → backend? N/A
- Error context sufficient? Yes

**Versioning**:
- Version number assigned? 1.0.0
- BUILD increments on every change? Yes
- Breaking changes handled? N/A

## Project Structure

### Documentation (this feature)
```
specs/001-develop-a-single/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
# Option 1: Single project (DEFAULT)
src/
├── app/
│   ├── components/
│   ├── services/
│   └── models/
└── assets/
    └── grammar.json

tests/
├── contract/
├── integration/
└── unit/
```

**Structure Decision**: Option 1: Single project

## Phase 0: Outline & Research
1. **Extract unknowns from Technical Context** above:
   - DONE. All clarifications have been addressed in the Technical Context section.

2. **Generate and dispatch research agents**:
   - No research needed as per the user's direct guidance.

3. **Consolidate findings** in `research.md`:
   - A `research.md` file will be created to document the decisions made.

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts
*Prerequisites: research.md complete*

1. **Extract entities from feature spec** → `data-model.md`:
   - `GrammarPoint` and `Slide` entities will be documented.

2. **Generate API contracts** from functional requirements:
   - Since there is no backend, this will define the contract for the local JSON data structure in `contracts/grammar.schema.json`.

3. **Generate contract tests** from contracts:
   - A test will be created to validate the structure of the `grammar.json` file against the schema.

4. **Extract test scenarios** from user stories:
   - A `quickstart.md` will be created with steps to manually test the application.

5. **Update agent file incrementally**:
   - N/A for this workflow.

**Output**: data-model.md, /contracts/grammar.schema.json, failing tests, quickstart.md

## Phase 2: Task Planning Approach
*This section describes what the /tasks command will do - DO NOT execute during /plan*

**Task Generation Strategy**:
- Load `/templates/tasks-template.md` as base
- Generate tasks from Phase 1 design docs.
- Create tasks for setting up the Angular project, creating components, services, and models.
- Create tasks for implementing the slide navigation and content display.
- Create unit tests for all components and services.

**Ordering Strategy**:
- TDD order: Tests before implementation
- Dependency order: Models before services before UI
- Mark [P] for parallel execution (independent files)

**Estimated Output**: 15-20 numbered, ordered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation
*These phases are beyond the scope of the /plan command*

**Phase 3**: Task execution (/tasks command creates tasks.md)
**Phase 4**: Implementation (execute tasks.md following constitutional principles)
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking
*Fill ONLY if Constitution Check has violations that must be justified*

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A       | N/A        | N/A                                 |


## Progress Tracking
*This checklist is updated during execution flow*

**Phase Status**:
- [X] Phase 0: Research complete (/plan command)
- [X] Phase 1: Design complete (/plan command)
- [X] Phase 2: Task planning complete (/plan command - describe approach only)
- [X] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [X] Initial Constitution Check: PASS
- [X] Post-Design Constitution Check: PASS
- [X] All NEEDS CLARIFICATION resolved
- [X] Complexity deviations documented

---
*Based on Constitution v1.0.0 - See `/.specify/memory/constitution.md`*