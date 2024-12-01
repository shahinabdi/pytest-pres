import React from 'react';
import { SlideProps } from './types';

export const Slide1 = (): SlideProps => ({
    title: "Calculator Testing Tutorial",
    subtitle: "Comprehensive Guide to Testing with Pytest",
    content: (
        <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg shadow dark:shadow-blue-900/20">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Program Overview: Calculator
                </h3>
                <ul className="space-y-2 text-gray-800 dark:text-gray-300">
                    <li>• State tracking (last_result)</li>
                    <li>• Input validation</li>
                    <li>• Basic arithmetic operations</li>
                    <li>• Error handling</li>
                </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg shadow dark:shadow-purple-900/20">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Test Categories
                </h3>
                <ul className="space-y-2 text-gray-800 dark:text-gray-300">
                    <li>• Initialization Tests</li>
                    <li>• Basic Operation Tests</li>
                    <li>• State Management Tests</li>
                    <li>• Edge Cases</li>
                </ul>
            </div>
        </div>
    ),
    details: (
        <div className="space-y-4 text-gray-800 dark:text-gray-300">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                Calculator Class Structure:
            </h3>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow font-mono text-gray-800 dark:text-gray-300">
                class Calculator:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self) -{'>'} None:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.last_result = None<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;def _validate_numbers(self, x: float, y: float) -> tuple[float, float]:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def add(self, x: float, y: float) -{'>'} float:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def subtract(self, x: float, y: float) -{'>'} float:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def multiply(self, x: float, y: float) -{'>'} float:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def divide(self, x: float, y: float) -{'>'} float:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;def get_last_result(self) -{'>'} float:
            </div>
            <div className="mt-4">
                <p className="font-bold text-gray-900 dark:text-white">Key Features:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-800 dark:text-gray-300">
                    <li>Maintains calculation state</li>
                    <li>Validates all inputs</li>
                    <li>Handles arithmetic operations</li>
                    <li>Provides error handling</li>
                </ul>
            </div>
        </div>
    )
});