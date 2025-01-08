# E2E Testing Framework with Playwright

A comprehensive end-to-end testing framework built with Playwright, featuring authentication testing, product management testing, and API integration tests.

## 🚀 Features

- Authentication testing (Login/Signup flows)
- Product CRUD operations testing
- API integration testing
- Cross-browser testing (Chrome, Firefox, Safari)
- Parallel test execution
- Faker.js for test data generation
- Environment variable configuration
- GitHub Actions CI/CD integration
- Custom test fixtures and helpers
- Allure reporting integration

## 📋 Prerequisites

- Node.js (LTS version)
- npm (Node Package Manager)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm ci
```

3. Install Playwright browsers:
```bash
npx playwright install --with-deps
```

4. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Set required variables:
     - `BASE_URL`
     - `TEST_USER_EMAIL`
     - `TEST_USER_PASSWORD`

## 📁 Project Structure

```
├── tests/
│   ├── auth/
│   │   ├── login.test.ts
│   │   └── signup.test.ts
│   └── products/
│       └── product-crud.test.ts
├── utils/
│   ├── api-helpers.ts
│   └── test-data.ts
├── fixtures/
│   └── test-base.ts
├── playwright.config.ts
└── .github/workflows/
    └── test.yml
```

## 🧪 Running Tests

Run all tests:
```bash
npx playwright test
```

Run specific test file:
```bash
npx playwright test tests/auth/login.test.ts
```

Run tests in headed mode:
```bash
npx playwright test --headed
```

Run tests in specific browser:
```bash
npx playwright test --project=chromium
```

## 📊 Test Reports

Generate and view HTML report:
```bash
npx playwright show-report
```

## 🔄 CI/CD Integration

The project includes GitHub Actions workflows for:
- Multi-OS testing (Ubuntu, Windows, macOS)
- Automatic test execution on push and pull requests
- Test artifacts storage
- Parallel test execution

## 🧩 Key Components

- **Test Base Fixture**: Provides authentication and common test setup
- **API Helpers**: Utilities for API testing and data setup
- **Test Data Generation**: Faker.js integration for dynamic test data
- **Cross-browser Testing**: Configured for Chrome, Firefox, and Safari
- **Environment Configuration**: Dotenv integration for environment management

## 📝 Configuration

Key configurations in `playwright.config.ts`:
- Timeout settings
- Parallel execution
- Retry logic
- Screenshot and video capture
- Browser configurations
- Reporter setup

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/)
- [Faker.js Documentation](https://fakerjs.dev/)
- [Allure Report Documentation](https://docs.qameta.io/allure/)