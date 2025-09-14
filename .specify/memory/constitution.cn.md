# Angular SPA Constitution

## Core Principles

### I. Component-First Architecture
- 每个功能模块以独立组件形式存在
- 组件必须高内聚、低耦合
- 遵循 Angular 风格指南和最佳实践
- 使用 standalone components 优先于 NgModules

### II. State Management
- 使用 NgRx/Akita/Signal Store 进行全局状态管理
- 本地状态使用 Angular Signals 或 RxJS
- 状态变更必须可追踪和可调试
- 遵循单向数据流原则

### III. Test-First Development
- 单元测试覆盖率不低于 80%
- 使用 Jasmine/Karma 进行单元测试
- 使用 Cypress/Playwright 进行 E2E 测试
- CI/CD 管道必须包含测试阶段

### IV. Performance & Optimization
- 实施懒加载和代码分割
- 使用 OnPush 变更检测策略
- 优化 bundle 大小，初始加载不超过 500KB
- Core Web Vitals 指标必须达标

### V. Accessibility & i18n
- WCAG 2.1 AA 级别合规
- 使用 Angular i18n 进行国际化
- 语义化 HTML 和 ARIA 标签
- 键盘导航支持

## Development Standards

### TypeScript Configuration
- 严格模式启用 (strict: true)
- 无隐式 any
- 严格的空值检查
- ESLint + Prettier 强制代码风格

### API Integration
- 使用 HttpClient 和拦截器
- 统一错误处理机制
- API 响应类型定义
- 环境变量管理 API 端点

### Routing & Navigation
- 路由守卫实现权限控制
- 预加载策略优化
- 面包屑导航支持
- 深度链接和状态保持

## Quality Gates

### Code Review Requirements
- 至少一位团队成员审核
- 自动化代码质量检查通过
- 无未解决的 linting 错误
- 变更日志更新

### CI/CD Pipeline
- 构建 → 单元测试 → E2E 测试 → 部署
- 生产部署需要手动批准
- 自动版本号管理
- 回滚机制就绪

## Governance

- Constitution 优先级高于其他实践
- 修改需要团队 2/3 成员同意
- 每季度评审和更新
- 新成员入职必须学习此文档

**Version**: 1.0.0 | **Ratified**: 2025-01-15 | **Last Amended**: 2025-01-15