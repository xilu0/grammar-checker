# Tasks: English Grammar Practice SPA

**Input**: Design documents from `/specs/001-develop-a-single/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → If not found: ERROR "No implementation plan found"
   → Extract: tech stack, libraries, structure
2. Load optional design documents:
   → data-model.md: Extract entities → model tasks
   → contracts/: Each file → contract test task
   → research.md: Extract decisions → setup tasks
3. Generate tasks by category:
   → Setup: project init, dependencies, linting
   → Tests: contract tests, integration tests
   → Core: models, services, CLI commands
   → Integration: DB, middleware, logging
   → Polish: unit tests, performance, docs
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → All contracts have tests?
   → All entities have models?
   → All endpoints implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Single project**: `src/`, `tests/` at repository root
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 3.1: Setup
- [ ] T001 Create project structure per implementation plan in `src/` and `tests/`.
- [ ] T002 Initialize Angular project with dependencies (`@angular/core`, `@angular/common`, etc.).
- [ ] T003 [P] Configure linting and formatting tools (ESLint, Prettier).
- [ ] T004 Create `src/assets/grammar.json` with initial data.

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**
- [ ] T005 [P] Contract test for `grammar.json` in `tests/contract/test_grammar_schema.spec.ts` to validate against `contracts/grammar.schema.json`.
- [ ] T006 [P] Integration test for "Start a Lesson" scenario in `tests/integration/test_lesson_start.spec.ts`.
- [ ] T007 [P] Integration test for "Navigate to the Next Slide" scenario in `tests/integration/test_slide_navigation.spec.ts`.
- [ ] T008 [P] Integration test for "Navigate to the Previous Slide" scenario in `tests/integration/test_slide_navigation.spec.ts`.
- [ ] T009 [P] Integration test for "End of the Lesson" scenario in `tests/integration/test_lesson_end.spec.ts`.

## Phase 3.3: Core Implementation (ONLY after tests are failing)
- [ ] T010 [P] Create `GrammarPoint` and `Example` models in `src/app/models/grammar.models.ts`.
- [ ] T011 [P] Create `GrammarDataService` in `src/app/services/grammar-data.service.ts` to fetch data from `grammar.json`.
- [ ] T012 Create `SlideComponent` in `src/app/components/slide/slide.component.ts` to display a single grammar slide.
- [ ] T013 Implement slide navigation logic (next/previous) in `SlideComponent`.
- [ ] T014 Create `LessonComponent` in `src/app/components/lesson/lesson.component.ts` to manage the lesson flow.
- [ ] T015 Implement the "End of Lesson" summary screen in `src/app/components/lesson-summary/lesson-summary.component.ts`.

## Phase 3.4: Integration
- [ ] T016 Integrate `GrammarDataService` with `LessonComponent` to load grammar points.
- [ ] T017 Implement routing for the application in `src/app/app.routes.ts`.

## Phase 3.5: Polish
- [ ] T018 [P] Unit tests for `GrammarDataService` in `tests/unit/test_grammar_data_service.spec.ts`.
- [ ] T019 [P] Unit tests for `SlideComponent` in `tests/unit/test_slide_component.spec.ts`.
- [ ] T020 [P] Unit tests for `LessonComponent` in `tests/unit/test_lesson_component.spec.ts`.
- [ ] T021 [P] Add structured logging for key events.
- [ ] T022 Run manual testing as per `quickstart.md`.
- [ ] T023 [P] Update `readme.md` with instructions on how to run the app.

## Dependencies
- Tests (T005-T009) before implementation (T010-T015)
- T010 blocks T011, T012, T014
- T011 blocks T016
- T012, T013 block T014
- Implementation before polish (T018-T023)

## Parallel Example
```
# Launch T005-T009 together:
Task: "Contract test for `grammar.json` in `tests/contract/test_grammar_schema.spec.ts`"
Task: "Integration test for "Start a Lesson" scenario in `tests/integration/test_lesson_start.spec.ts`"
Task: "Integration test for "Navigate to the Next Slide" scenario in `tests/integration/test_slide_navigation.spec.ts`"
Task: "Integration test for "Navigate to the Previous Slide" scenario in `tests/integration/test_slide_navigation.spec.ts`"
Task: "Integration test for "End of the Lesson" scenario in `tests/integration/test_lesson_end.spec.ts`"
```

## Notes
- [P] tasks = different files, no dependencies
- Verify tests fail before implementing
- Commit after each task
- Avoid: vague tasks, same file conflicts

## Task Generation Rules
*Applied during main() execution*

1. **From Contracts**:
   - Each contract file → contract test task [P]
   - Each endpoint → implementation task
   
2. **From Data Model**:
   - Each entity → model creation task [P]
   - Relationships → service layer tasks
   
3. **From User Stories**:
   - Each story → integration test [P]
   - Quickstart scenarios → validation tasks

4. **Ordering**:
   - Setup → Tests → Models → Services → Endpoints → Polish
   - Dependencies block parallel execution

## Validation Checklist
*GATE: Checked by main() before returning*

- [ ] All contracts have corresponding tests
- [ ] All entities have model tasks
- [ ] All tests come before implementation
- [ ] Parallel tasks truly independent
- [ ] Each task specifies exact file path
- [ ] No task modifies same file as another [P] task
