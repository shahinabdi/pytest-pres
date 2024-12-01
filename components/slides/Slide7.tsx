import React from 'react';
import { SlideProps } from './types';

export const Slide7 = (): SlideProps => ({
    title: "Testing Strategy",
    subtitle: "Organizing and Running Test Suites",
    content: (
        <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg shadow dark:shadow-blue-900/20">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Test Execution Patterns
                </h3>
                <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-gray-800 dark:text-gray-300">
                        <p className="font-bold mb-2 text-gray-900 dark:text-white">Development Workflow</p>
                        <pre className="text-sm dark:text-gray-300">
                            {`# Quick development cycle
pytest -v -m "not slow"

# Full test suite
pytest -v --cov=src --cov-report=term-missing`}
                        </pre>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-gray-800 dark:text-gray-300">
                        <p className="font-bold mb-2 text-gray-900 dark:text-white">CI/CD Pipeline</p>
                        <pre className="text-sm dark:text-gray-300">
                            {`# Stage 1: Smoke Tests
pytest -v -m smoke

# Stage 2: Full Suite
pytest -v

# Stage 3: Coverage Report
pytest -v --cov=src --cov-report=html`}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    ),
    details: (
        <div className="space-y-4 text-gray-800 dark:text-gray-300">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                Test Organization Best Practices:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
                <li>Group related tests in classes</li>
                <li>Use markers for test categorization</li>
                <li>Create fixtures for common setups</li>
                <li>Implement parametrized tests for thoroughness</li>
                <li>Maintain test independence</li>
            </ul>
            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg shadow dark:shadow-yellow-900/20 mt-4">
                <p className="font-bold text-gray-900 dark:text-white">Running Tests Tips:</p>
                <ul className="list-disc pl-6 mt-2 dark:text-gray-300">
                    <li>Use -v for verbose output</li>
                    <li>Use -s to see print statements</li>
                    <li>Use -k for keyword filtering</li>
                    <li>Use --pdb for debugging failures</li>
                </ul>
            </div>
        </div>
    )
});