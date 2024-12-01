import React from 'react';
import { SlideProps } from './types';

export const Slide8 = (): SlideProps => ({
    title: "Let's Practice!",
    subtitle: "Get Started with Real Testing",
    content: (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 p-6 rounded-lg shadow dark:shadow-blue-900/20">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Practice Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-gray-900/20">
                        <div className="flex items-center mb-4">
                            <h4 className="text-lg font-semibold dark:text-white">GitHub Repository</h4>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">Access the Task Manager project on GitHub:</p>
                        <a
                            href="https://github.com/example/task-manager-testing"
                            className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg text-sm transition-colors"
                        >
                            Clone from GitHub
                        </a>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-gray-900/20">
                        <div className="flex items-center mb-4">
                            <h4 className="text-lg font-semibold dark:text-white">GitLab Repository</h4>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">Access the Task Manager project on GitLab:</p>
                        <a
                            href="https://gitlab.com/example/task-manager-testing"
                            className="inline-flex items-center px-4 py-2 bg-orange-600 dark:bg-orange-700 hover:bg-orange-500 dark:hover:bg-orange-600 text-white rounded-lg text-sm transition-colors"
                        >
                            Clone from GitLab
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg shadow dark:shadow-green-900/20">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Getting Started</h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-sm text-gray-800 dark:text-gray-300">
                    <div className="space-y-2">
                        <p># 1. Clone the repository</p>
                        <p className="text-green-600 dark:text-green-400">git clone [repository-url]</p>
                        <p># 2. Create and activate virtual environment</p>
                        <p className="text-green-600 dark:text-green-400">python -m venv venv</p>
                        <p className="text-green-600 dark:text-green-400">source venv/bin/activate  # On Unix/MacOS</p>
                        <p className="text-green-600 dark:text-green-400">venv\Scripts\activate  # On Windows</p>
                        <p># 3. Install dependencies</p>
                        <p className="text-green-600 dark:text-green-400">pip install -r requirements.txt</p>
                        <p># 4. Run the tests</p>
                        <p className="text-green-600 dark:text-green-400">pytest -v</p>
                    </div>
                </div>
            </div>
        </div>
    ),
    details: (
        <div className="space-y-4 text-gray-800 dark:text-gray-300">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">Project Structure:</h3>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow font-mono text-sm">
                task_manager/
                <br />├── src/
                <br />│   ├── __init__.py
                <br />│   ├── models.py
                <br />│   ├── service.py
                <br />│   └── utils.py
                <br />├── tests/
                <br />│   ├── __init__.py
                <br />│   ├── conftest.py
                <br />│   ├── test_models.py
                <br />│   └── test_service.py
                <br />├── requirements.txt
                <br />└── README.md
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg shadow dark:shadow-blue-900/20 mt-4">
                <p className="font-bold text-gray-900 dark:text-white">Key Files:</p>
                <ul className="list-disc pl-6 mt-2 text-gray-800 dark:text-gray-300">
                    <li>models.py: Task and User model definitions</li>
                    <li>service.py: Business logic and operations</li>
                    <li>utils.py: Helper functions and utilities</li>
                    <li>conftest.py: Pytest fixtures and configuration</li>
                    <li>test_*.py: Test modules for different components</li>
                </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg shadow dark:shadow-green-900/20 mt-4">
                <p className="font-bold text-gray-900 dark:text-white">Learning Goals:</p>
                <ul className="list-disc pl-6 mt-2 text-gray-800 dark:text-gray-300">
                    <li>Writing effective test cases</li>
                    <li>Using pytest fixtures and markers</li>
                    <li>Implementing mocking strategies</li>
                    <li>Achieving good test coverage</li>
                    <li>Following testing best practices</li>
                </ul>
            </div>
        </div>
    )
});