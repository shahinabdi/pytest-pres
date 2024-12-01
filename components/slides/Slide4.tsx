import React from 'react';
import { SlideProps } from './types';

export const Slide4 = (): SlideProps => ({
    title: "Edge Cases",
    subtitle: "Handling Special Cases and Errors",
    content: (
        <div className="space-y-6">
            <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg shadow dark:shadow-orange-900/20">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Edge Case Tests
                </h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-gray-800 dark:text-gray-300">
                    @pytest.mark.parametrize("operation, x, y, expected_error", [<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;("add", "not a number", 5, "Calculator operations require numeric inputs"),<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;("divide", 1, 0, "Cannot divide by zero"),<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;("multiply", None, 3, "Calculator operations require numeric inputs")<br />
                    ])
                </div>
            </div>
        </div>
    ),
    details: (
        <div className="space-y-4 text-gray-800 dark:text-gray-300">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                Edge Cases Covered:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
                <li>Invalid input types</li>
                <li>Division by zero</li>
                <li>Special float values (inf, nan)</li>
                <li>Type validation</li>
                <li>Error message verification</li>
            </ul>
            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg shadow dark:shadow-red-900/20 mt-4">
                <p className="font-bold text-gray-900 dark:text-white">Error Handling:</p>
                <ul className="list-disc pl-6 mt-2 text-gray-800 dark:text-gray-300">
                    <li>Validates input types</li>
                    <li>Catches calculation errors</li>
                    <li>Verifies error messages</li>
                </ul>
            </div>
        </div>
    )
});