# Tasks: 001-develop-a-single

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
   → Tests: contract tests, integration tests, unit tests
   → Core: models, services, components
   → Integration: component integration
   → Polish: manual testing, performance
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
   → All components/services implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Single project**: `src/`, `tests/` at repository root
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 3.1: Setup
- [x] T001 Verify Angular project setup and dependencies.
- [x] T002 Verify linting and formatting configuration.

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These tests MUST be written/implemented and MUST FAIL before ANY implementation**
- [x] T003 [P] Implement contract test for `grammar.json` against `contracts/grammar.schema.json` in `src/app/contract/test_grammar_schema.spec.ts`.
- [x] T004 [P] Create unit tests for `GrammarPoint` and `Slide` models in `src/app/unit/test_grammar_models.spec.ts`.
- [x] T005 [P] Implement unit tests for `GrammarDataService` in `src/app/unit/test_grammar_data_service.spec.ts`.
- [x] T006 [P] Implement unit tests for `LessonComponent` in `src/app/unit/test_lesson_component.spec.ts`.
- [x] T007 [P] Implement unit tests for `SlideComponent` in `src/app/unit/test_slide_component.spec.ts`.
- [x] T008 [P] Implement integration test for lesson start in `src/app/integration/test_lesson_start.spec.ts`.
- [x] T009 [P] Implement integration test for slide navigation in `src/app/integration/test_slide_navigation.spec.ts`.
- [x] T010 [P] Implement integration test for lesson end in `src/app/integration/test_lesson_end.spec.ts`.

## Phase 3.3: Core Implementation (ONLY after tests are failing)
- [x] T011 [P] Refine `GrammarPoint` and `Slide` models in `src/app/models/grammar.models.ts` based on `data-model.md` and `grammar.schema.json`.
- [x] T012 [P] Implement `GrammarDataService` to load `grammar.json` in `src/app/services/grammar-data.service.ts`.
- [x] T013 [P] Implement `LessonComponent` logic (e.g., state management, navigation) in `src/app/components/lesson/lesson.component.ts`.
- [x] T014 [P] Implement `SlideComponent` logic (e.g., display content, handle interactions) in `src/app/components/slide/slide.component.ts`.
- [x] T015 Integrate `LessonComponent` and `SlideComponent` into `src/app/app.ts` and `src/app/app-module.ts`.
- [x] T016 Implement slide navigation within `LessonComponent`.
- [x] T017 Implement display of grammar content within `SlideComponent`.

## Phase 3.4: Integration
- [x] T018 Ensure `GrammarDataService` is correctly provided and used by `LessonComponent`.

## Phase 3.5: Polish
- [x] T019 Manually test application using `quickstart.md`.
- [ ] T020 Verify initial load performance (< 500KB).

## Dependencies
- Tests (T003-T010) before implementation (T011-T017)
- T011 blocks T012, T013, T014
- T012 blocks T013
- T013 blocks T015, T016, T018
- T014 blocks T015, T017
- Implementation (T011-T018) before Polish (T019-T020)

## Parallel Example
```
# Launch T003-T010 together:
Task: "Implement contract test for grammar.json against contracts/grammar.schema.json in src/app/contract/test_grammar_schema.spec.ts"
Task: "Create unit tests for GrammarPoint and Slide models in src/app/unit/test_grammar_models.spec.ts"
Task: "Implement unit tests for GrammarDataService in src/app/unit/test_grammar_data_service.spec.ts"
Task: "Implement unit tests for LessonComponent in src/app/unit/test_lesson_component.spec.ts"
Task: "Implement unit tests for SlideComponent in src/app/unit/test_slide_component.spec.ts"
Task: "Implement integration test for lesson start in src/app/integration/test_lesson_start.spec.ts"
Task: "Implement integration test for slide navigation in src/app/integration/test_slide_navigation.spec.ts"
Task: "Implement integration test for lesson end in src/app/integration/test_lesson_end.spec.ts"
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
   - Each endpoint → implementation task (N/A for this project)
   
2. **From Data Model**:
   - Each entity → model creation/refinement task [P]
   - Relationships → service layer tasks
   
3. **From User Stories**:
   - Each story → integration test [P]
   - Quickstart scenarios → validation tasks

4. **Ordering**:
   - Setup → Tests → Models → Services → Components → Integration → Polish
   - Dependencies block parallel execution

## Validation Checklist
*GATE: Checked by main() before returning*

- [X] All contracts have corresponding tests
- [X] All entities have model tasks
- [X] All tests come before implementation
- [X] Parallel tasks truly independent
- [X] Each task specifies exact file path
- [X] No task modifies same file as another [P] task