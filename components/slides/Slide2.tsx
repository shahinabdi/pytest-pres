import React from 'react';
import { SlideProps } from './types';

export const Slide2 = (): SlideProps => ({
    title: "Initialization Tests",
    subtitle: "Starting with Clean State",
    content: (
        <div className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg shadow dark:shadow-green-900/20">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    TestCalculatorInitialization
                </h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-gray-800 dark:text-gray-300">
                    def test_initial_state(self, calc):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;assert calc.last_result is None<br />
                    <br />
                    def test_initial_get_last_result_raises_error(self, calc):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;with pytest.raises(CalculatorError) as exc_info:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;calc.get_last_result()
                </div>
            </div>
        </div>
    ),
    details: (
        <div className="space-y-4 text-gray-800 dark:text-gray-300">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">Purpose:</h3>
            <ul className="list-disc pl-6 space-y-2">
                <li>Ensures calculator starts with clean state</li>
                <li>Verifies error handling before calculations</li>
                <li>Uses fixtures for consistent setup</li>
                <li>Tests both state and error conditions</li>
            </ul>
            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg shadow dark:shadow-yellow-900/20 mt-4">
                <p className="font-bold text-gray-900 dark:text-white">Key Testing Concepts:</p>
                <ul className="list-disc pl-6 mt-2 text-gray-800 dark:text-gray-300">
                    <li>Fixture usage</li>
                    <li>Exception testing</li>
                    <li>State verification</li>
                </ul>
            </div>
        </div>
    )
});